export class ApiClient {
  static #instance: ApiClient | null = null;

  static instance(baseUrl?: string) {
    if (ApiClient.#instance === null) {
      ApiClient.#instance = new ApiClient(
        baseUrl ?? "https://curtislarson.dev/api/v1",
      );
    }
    return ApiClient.#instance;
  }

  private constructor(readonly baseUrl: string) {
  }

  async fetch(pathname: `/${string}`, init?: RequestInit) {
    const url = this.baseUrl + pathname;
    const headers = init?.headers ?? new Headers();
    if (!("content-type" in headers)) {
      Object.assign(headers, { "content-type": "application/json" });
    }
    return await fetch(url, {
      ...init,
      headers,
    });
  }
}
