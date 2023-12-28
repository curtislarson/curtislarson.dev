export type ApiError<T> = Partial<Record<keyof T, string>>;

export type ApiResponseJson<T, R = unknown> = { ok: true; data?: R } | {
  ok: false;
  errors: ApiError<T>;
};
