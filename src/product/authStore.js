import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: localStorage.getItem("pm_token"),
  user: JSON.parse(localStorage.getItem("pm_user") || "null"),
  isAuthenticated: !!localStorage.getItem("pm_token"),

  login: ({ token, user }) => {
    localStorage.setItem("pm_token", token);
    localStorage.setItem("pm_user", JSON.stringify(user));
    set({ token, user, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem("pm_token");
    localStorage.removeItem("pm_user");
    set({ token: null, user: null, isAuthenticated: false });
  },
}));