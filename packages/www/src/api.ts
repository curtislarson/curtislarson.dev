import { ApiClient } from "@curtis.land/common";

console.log("apiHost=", { env: import.meta.env });

export const api = ApiClient.instance(import.meta.env.VITE_API_HOST);
