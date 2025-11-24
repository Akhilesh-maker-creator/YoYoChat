import { create } from "zustand";

export const useThemeHook = create((set) => ({
  theme: localStorage.getItem("chatapp-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chatapp-theme", theme);
    set({ theme });
  },
}));