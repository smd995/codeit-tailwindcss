"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  toggleDarkMode: (newTheme: "light" | "dark" | "system") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme은 ThemeProvider 내부에서 사용해야 합니다.");
  }

  return context;
}

const themeGetter = () => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme") === "dark";
  }

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return true;
  }

  return false;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState<boolean>(themeGetter);

  const toggleDarkMode = (newTheme: "light" | "dark" | "system") => {
    if (newTheme === "system") {
      localStorage.removeItem("theme");
      setIsDark(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? true
          : false,
      );
    } else {
      localStorage.setItem("theme", newTheme);
      setIsDark(newTheme === "dark");
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (!("theme" in localStorage)) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  });

  return (
    <ThemeContext.Provider value={{ toggleDarkMode }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
}
