import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("car-theme") || "light",
  setTheme: (theme) => {
    localStorage.setItem("car-theme", theme);
    set({ theme });
  },
}));