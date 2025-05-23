"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="relative w-6 h-6 cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaSun className="absolute w-full h-full text-yellow-300   transition-all duration-300 scale-100 dark:scale-0" />
      <FaMoon className="absolute w-full h-full text-white  transition-all duration-300 scale-0 dark:scale-100" />
    </div>
  );
}
