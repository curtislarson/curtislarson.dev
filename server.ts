#!/usr/bin/env -S deno run -A --no-check --no-config

import { serve } from "https://deno.land/std@0.183.0/http/server.ts";
import { serveStatic } from "https://deno.land/x/hono@v3.1.5/middleware.ts";
import { Hono } from "https://deno.land/x/hono@v3.1.5/mod.ts";

const app = new Hono();

app.get("/assets/*", serveStatic({ root: "./dist/" }));
app.get("/quack.png", serveStatic({ path: "./dist/quack.png" }));
app.get("/resume.pdf", serveStatic({ path: "./dist/resume.pdf" }));
app.get("/favicon.ico", serveStatic({ path: "./dist/favicon.ico" }));

app.get("*", serveStatic({ path: "./dist/index.html" }));

serve(app.fetch, {
  hostname: Deno.env.get("HOSTNAME") ?? "localhost",
  port: Number(Deno.env.get("PORT") ?? 8000),
  onListen({ port, hostname }) {
    console.log(`Server started at ${hostname}:${port}`);
  },
});
