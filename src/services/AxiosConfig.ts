import axios from "axios";
import type { AxiosError } from "axios";
import { tokenStorage } from "@/features/auth/utils/tokenStorage";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status;
    const message = (error.response?.data as { message?: string } | undefined)
      ?.message;

    // This API reports auth failures as a 500 "Route [login] not defined."
    // (Laravel redirecting to a `login` route that doesn't exist in an API-only
    // app) instead of a 401. Without treating it as an auth failure, an expired
    // token is never cleared and the UI stays "logged in" while every protected
    // request fails.
    const isAuthFailure =
      status === 401 ||
      (status === 500 && Boolean(message?.includes("Route [login] not defined")));

    if (isAuthFailure) {
      tokenStorage.clear();

      if (window.location.pathname !== "/sign-in") {
        window.location.href = "/sign-in";
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
