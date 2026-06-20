"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a matching empty square placeholder to avoid layout shift
    return <div className="w-10 h-10 rounded-lg border border-border-custom bg-bg-secondary" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex w-10 h-10 items-center justify-center rounded-lg border border-border-custom bg-bg-secondary text-text-primary hover:text-accent hover:border-accent/40 active:scale-95 transition-all focus:outline-none"
      aria-label="Toggle Theme Mode"
    >
      {theme === "dark" ? (
        <Sun className="w-[18px] h-[18px] transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-[18px] h-[18px] transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
