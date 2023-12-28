import { ContactData } from "../deps.ts";

export class QuackWareKv {
  static CONTACT_PREFIX = "contact";

  static async init(path?: string) {
    const kv = await Deno.openKv(path);
    return new QuackWareKv(kv);
  }

  private constructor(private kv: Deno.Kv) {}

  async addContact(data: ContactData) {
    const now = new Date().getTime();

    return await this.kv.set(
      [QuackWareKv.CONTACT_PREFIX, data.contactId, data.email, now],
      data,
    );
  }
}
