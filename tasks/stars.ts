#!/usr/bin/env -S deno run -A --unstable

import { $ } from "https://deno.land/x/dax@0.14.1/mod.ts";

const res = await $`gh api --paginate https://api.github.com/user/starred`.text();

Deno.writeTextFileSync(new URL("../public/stars.json", import.meta.url), res);
