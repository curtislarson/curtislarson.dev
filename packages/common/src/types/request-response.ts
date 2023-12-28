declare global {
  interface Body<T = unknown> {
    json(): Promise<T>;
  }

  interface Request<T = unknown> extends Body<T> {
    json(): Promise<T>;
    json<R = unknown>(): Promise<R>;
  }

  interface Response {
    json<T = unknown>(): Promise<T>;
  }
}

export {};
