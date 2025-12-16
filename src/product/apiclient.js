import axios from "axios";
import { useAuthStore } from "./authStore";

export const api = axios.create({
  baseURL: "https://api.project-m.ai", // CHANGE if needed
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      useAuthStore.getState().logout();
      window.location.href = "/product/login";
    }
    return Promise.reject(err);
  }
);
console.log("ENV:", import.meta.env.VITE_API_BASE_URL);