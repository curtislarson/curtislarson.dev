import sg from "npm:@sendgrid/mail";
import { ContactData } from "../deps.ts";

export class EmailService {
  #sg;

  #senderEmail;

  constructor(sendgrid?: typeof sg) {
    this.#sg = sendgrid ?? sg;

    const senderEmail = Deno.env.get("CURTISLARSON_EMAIL_FROM_ADDRESS");
    if (!senderEmail) {
      throw new Error(
        "Environment variable CURTISLARSON_EMAIL_FROM_ADDRESS is not defined!",
      );
    }

    const sendgridApiKey = Deno.env.get("SENDGRID_API_KEY");
    if (!sendgridApiKey) {
      throw new Error("Environment variable SENDGRID_API_KEY is not defined!");
    }

    this.#senderEmail = senderEmail;
    this.#sg.setApiKey(sendgridApiKey);
  }

  async sendContactEmail(contact: ContactData) {
    const data: sg.MailDataRequired = {
      to: "contact@curtislarson.dev",
      replyTo: contact.email,
      from: this.#senderEmail,
      subject: `New Contact ${contact.contactId}: ${contact.subject}`,
      html: /* html */ `
        <body>
          <h2>New Contact from ${contact.email}</h2>
          <p>${contact.message}</p>
        </body>`,
    };
    return await this.#sg.send(data);
  }
}
