import { Hono } from "../../deps.ts";
import { EmailService } from "../email.ts";
import { QuackWareKv } from "../kv.ts";
import { createContactRoutes } from "./contact.ts";

export function createRoutes(kv: QuackWareKv, email: EmailService) {
  const root = new Hono();
  root.route("/contact", createContactRoutes(kv, email));
  return root;
}
