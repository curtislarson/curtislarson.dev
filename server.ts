#!/usr/bin/env -S deno run -A --no-check --unstable
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

// Auto load from `.env` files if available
import { load } from "https://deno.land/std@0.210.0/dotenv/mod.ts";
await load({
  envPath: new URL("./.env", import.meta.url).pathname,
  export: true,
});

import { serve } from "https://deno.land/std@0.183.0/http/server.ts";
import { serveStatic } from "https://deno.land/x/hono@v3.11.11/middleware.ts";
import { createApp } from "./packages/server/src/app.ts";
import { EmailService } from "./packages/server/src/email.ts";
import { QuackWareKv } from "./packages/server/src/kv.ts";

const hostname = Deno.env.get("HOSTNAME") ?? "localhost";
const email = new EmailService();
const kv = await QuackWareKv.init(Deno.env.get("QUACKWARE_KV_PATH"));

const app = createApp(hostname, kv, email);

app.get("/quack.png", serveStatic({ path: "./dist/quack.png" }));
app.get("/resume.pdf", serveStatic({ path: "./dist/resume.pdf" }));
app.get("/favicon.ico", serveStatic({ path: "./dist/favicon.ico" }));

app.get("/docs/assets/*", serveStatic({ root: "./docs/dist/" }));
app.get("/docs/*", serveStatic({ path: "./docs/dist/docs/index.html" }));

app.get("/assets/*", serveStatic({ root: "./dist/" }));

app.get("*", serveStatic({ path: "./dist/index.html" }));

serve(app.fetch, {
  hostname,
  port: Number(Deno.env.get("PORT") ?? 8000),
  onListen({ port, hostname }) {
    console.log(`Server started at ${hostname}:${port}`);
  },
});
