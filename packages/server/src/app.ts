import { cors, Hono } from "../deps.ts";
import { EmailService } from "./email.ts";
import { QuackWareKv } from "./kv.ts";
import { createRoutes } from "./routes/mod.ts";

const DEV_CORS_ORIGINS = ["http://localhost:8999"];
const PROD_CORS_ORIGINS = ["https://curtislarson.dev"];

export function createApp(
  hostname: string,
  kv: QuackWareKv,
  email: EmailService,
) {
  const app = new Hono();

  app.use(
    "*",
    cors({
      origin: hostname === "localhost" ? DEV_CORS_ORIGINS : PROD_CORS_ORIGINS,
    }),
  );
  app.route("/api/v1", createRoutes(kv, email));

  return app;
}
