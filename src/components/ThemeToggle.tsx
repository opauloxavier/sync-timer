"use client";

import { useState, useEffect, useCallback } from "react";

type Theme = "system" | "light" | "dark";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  return (localStorage.getItem("theme") as Theme) ?? "system";
}

function applyTheme(theme: Theme) {
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  document.documentElement.classList.toggle("dark", isDark);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = getStoredTheme();
    setTheme(stored);
    applyTheme(stored);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  // Listen for system preference changes when in "system" mode
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (getStoredTheme() === "system") {
        applyTheme("system");
        setIsDark(mq.matches);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const cycle = useCallback(() => {
    const order: Theme[] = ["system", "dark", "light"];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
    if (next === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", next);
    }
    applyTheme(next);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, [theme]);

  const label =
    theme === "system" ? "System" : theme === "dark" ? "Dark" : "Light";

  return (
    <button
      onClick={cycle}
      aria-label={`Theme: ${label}`}
      title={`Theme: ${label}`}
      className="flex items-center justify-center h-8 w-8 rounded-full bg-white/60 dark:bg-white/[0.06] border border-sky-200/40 dark:border-sky-500/15 text-sky-400 transition-all hover:bg-white/80 dark:hover:bg-white/10 active:scale-90 shadow-sm"
    >
      {theme === "system" ? (
        // Monitor icon for system
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ) : isDark ? (
        // Moon icon
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        // Sun icon
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
}
