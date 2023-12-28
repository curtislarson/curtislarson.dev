import { ContactData } from "./types/contact.ts";

/**
 * Modified slightly from https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
 */
export function isValidEmail(email: string) {
  return email.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ) != null;
}

export function validateContactData(data: Partial<ContactData>) {
  const errors: Partial<Record<keyof ContactData, string>> = {};

  if (data.contactId == null || data.contactId === "") {
    errors["message"] = "Contact ID not found!";
  }

  if (data.email == null || data.email === "") {
    errors["email"] = "Please provide an email address.";
  } else if (!isValidEmail(data.email)) {
    errors["email"] = "Invalid Email.";
  }

  if (data.message == null || data.message === "") {
    errors["message"] = "Please provide a message.";
  }

  if (data.subject == null || data.subject === "") {
    errors["subject"] = "Please provide a subject.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors } as const;
  } else {
    return { ok: true, data: data as ContactData } as const;
  }
}
