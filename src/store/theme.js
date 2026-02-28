// src/store/theme.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set) => ({
      theme:
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"),

      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark",
          );
          return { theme: newTheme };
        }),

      initTheme: () =>
        set((state) => {
          document.documentElement.classList.toggle(
            "dark",
            state.theme === "dark",
          );
          return {};
        }),
    }),
    {
      name: "theme",
    },
  ),
);

export default useThemeStore;
