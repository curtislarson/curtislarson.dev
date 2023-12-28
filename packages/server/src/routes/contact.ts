import { ContactData, Hono, validateContactData } from "../../deps.ts";
import { EmailService } from "../email.ts";
import { QuackWareKv } from "../kv.ts";
import { logger } from "../logger.ts";

export function createContactRoutes(kv: QuackWareKv, email: EmailService) {
  const routes = new Hono();

  routes.post("/", async (c) => {
    const data = await c.req.json<Partial<ContactData>>();
    const validateResponse = validateContactData(data);
    if (!validateResponse.ok) {
      logger.error({ validateResponse }, "Request failed validation");
      return c.json(validateResponse, 400);
    }

    const res = await kv.addContact(validateResponse.data);

    logger.info({ data: validateResponse.data, res }, "Add Contact Result");

    const sendResult = await email.sendContactEmail(validateResponse.data);

    logger.info({ sendResult }, "Email Send Result");

    if (res.ok) {
      return c.json({ ok: true }, 200);
    }
  });

  return routes;
}
