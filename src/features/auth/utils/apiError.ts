import axios from "axios";

interface ApiErrorBody {
  message?: string;
  errors?: Record<string, string[]>;
}

export function getApiErrorMessage(error: unknown, fallback: string): string {
  if (!axios.isAxiosError(error)) return fallback;

  const body = error.response?.data as ApiErrorBody | undefined;
  const firstFieldError = Object.values(body?.errors ?? {})[0]?.[0];

  return firstFieldError ?? body?.message ?? fallback;
}
