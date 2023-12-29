---
title: A Simple Website Uptime Checker Built with Deno
author: Curtis Larson
date: 2023-12-21
preview: How to create a simple website uptime checker using Deno Cron, Deno KV, and Deno Deploy.
---

## Introduction

I have quite a few websites running on different hosting platforms and have always needed a simple service that pings them every 10-15 minutes and provides updates on whether the site is live or not. I noticed that [Deno](https://deno.com) recently introduced a managed cron job scheduler and key value database on their hosted solution [Deno Deploy](https://deno.com/deploy) which sounded like a perfect opportunity to write my service and learn these new technologies.

The following is a guide on how to create a uptime checker website that executes a cron job every 10 minutes that reads a list of urls to check from the key value database, pings each url, and writes the response back to the key value database. When visiting the status page the index route retrieves a list of all urls that are being checked and their most recent checks from the key value database and returns it to the user in a simple grid display.

This project could be easily extended to also send out email notifications, depend on a specific response body rather than status code, and more. You can find the full source code of this project at the [uptime GitHub repository](https://github.com/curtislarson/uptime).

## Data Structures

The two important data structures in the project are `UrlToCheck` which represents the url we will be checking and `CheckResponse` which represents the response we received back from the server. We can see the two structures represented by the below TypeScript types which should be self explanatory:

```ts
export interface UrlToCheck {
  readonly name: string;
  readonly url: string;
  /**
   * @default 'GET'
   */
  readonly method?: "GET" | "POST";
}

export interface BaseCheck {
  status: number;
  statusText: string;
  ts: number;
  ok: boolean;
}

export interface CheckSuccess extends BaseCheck {
  ok: true;
  body: string;
}

export interface CheckFailure extends BaseCheck {
  ok: false;
  error?: Error;
}

export type CheckResponse = CheckSuccess | CheckFailure;
```

## Key Value Store

Deno's [Key/Value database](https://examples.deno.land/kv) is seamlessly built into the Deno runtime and can be setup with zero configuration on Deno Deploy. It's built on top of `sqlite` and provides a simple prefix based api which allows us to section off our different data types and easy add, get, list, and delete entries.

The main functionality we need is the ability to add new `UrlToCheck` objects, retrieve a list of all `UrlToCheck` objects, add new `CheckResponse` objects and have them associated with a `UrlToCheck` object, and retrieve a list of `CheckResponse` objects based on a unix timestamp range. Since we can section data based on the "Key Value Part" we can use prefixes to separate the different data types, name strings to separate different instances of the data type, and finally a timestamp string to separate different occurrences of the instance of the data type in the case of `CheckResponse`. The below `UptimeKv` class handles all of this:

```ts
import dayjs from "npm:dayjs";
import { logger } from "./logger.ts";
import { CheckResponse, UrlToCheck } from "./types.ts";

const ONE_DAY_MS = 86400 * 1000;

export class UptimeKv {
  static URL_KEY_PREFIX = "url";
  static CHECK_KEY_PREFIX = "check";

  static async init(path?: string) {
    const kv = await Deno.openKv(path);
    return new UptimeKv(kv);
  }

  private constructor(private kv: Deno.Kv) {}

  /** Retrieves a list of all urls to check */
  async getUrls() {
    const iter = this.kv.list<UrlToCheck>({
      prefix: [UptimeKv.URL_KEY_PREFIX],
    });
    const urls: UrlToCheck[] = [];
    for await (const toCheck of iter) {
      urls.push(toCheck.value);
    }

    return urls;
  }

  /** Adds a new url to check */
  async addUrl(toCheck: UrlToCheck) {
    return await this.kv.set([UptimeKv.URL_KEY_PREFIX, toCheck.name], {
      name: toCheck.name,
      url: toCheck.url,
      method: toCheck.method ?? "GET",
    });
  }

  /** Given the name of a url to check, retrieves the full `UrlToCheck` object */
  async getUrl(name: string) {
    const retrieved = await this.kv.get([UptimeKv.URL_KEY_PREFIX, name]);
    return retrieved.value;
  }

  /** Adds a new `CheckResponse` for the given `UrlToCheck` */
  async addCheckResponse(check: UrlToCheck, response: CheckResponse) {
    const now = new Date().getTime();
    return await this.kv.set([UptimeKv.CHECK_KEY_PREFIX, check.name, now], response, { expireIn: ONE_DAY_MS });
  }

  /** Retrieves all `CheckResponse` objects in the past day for the given `UrlToCheck` */
  async getCheckResponses(check: UrlToCheck) {
    const oneDayAgo = dayjs().add(-1, "day").toDate().getTime();

    logger.info(
      {
        oneDayAgo,
        check,
      },
      "Retrieving responses"
    );

    const iter = this.kv.list<CheckResponse>({
      prefix: [UptimeKv.CHECK_KEY_PREFIX, check.name],
      // This gets all values that have their third key (timestamp) >= `oneDayAgo`
      start: [UptimeKv.CHECK_KEY_PREFIX, check.name, oneDayAgo],
    });
    const responses: CheckResponse[] = [];
    for await (const response of iter) {
      responses.unshift(response.value);
    }

    return responses;
  }

  /** Close the kv store to prevent memory leak */
  close() {
    return this.kv.close();
  }
}
```

Notice how the `UptimeKv.CHECK_KEY_PREFIX` and `UptimeKv.URL_KEY_PREFIX` prefixes are used to split the two different types of data so they can be retrieved independently.

## Deno Cron

## Display Results

## Testing

## Deno Deploy
