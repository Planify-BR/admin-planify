import { create } from "zustand";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("auth-token"),
  isAuthenticated: !!localStorage.getItem("auth-token"),
  setToken: (token: string) => {
    localStorage.setItem("auth-token", token);
    set({ token, isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem("auth-token");
    set({ token: null, isAuthenticated: false });
  },
}));
