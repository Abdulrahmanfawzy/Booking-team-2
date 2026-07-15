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
    // Token expired or revoked
    if (error.response?.status === 401) {
      tokenStorage.clear();

      // if (window.location.pathname !== "/sign-in") {
      //   window.location.href = "/sign-in";
      // }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
