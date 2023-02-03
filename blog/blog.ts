#!/usr/bin/env -S deno run -A --unstable --no-check --no-config

import { Blog } from "../../mdx-blog/mod.ts";

await new Blog({ blogDir: new URL("./posts", import.meta.url).pathname, css: {} }).serve();
