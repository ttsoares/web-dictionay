import { useState, useEffect } from "react";

export type Theme = "light" | "dark";

export function useTheme(): [Theme, () => void] {
  const getInitialTheme = (): Theme => {
    const saved = localStorage.getItem("theme-color");
    if (saved === "light" || saved === "dark") return saved;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme-color", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return [theme, toggleTheme];
}
