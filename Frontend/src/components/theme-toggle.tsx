"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="relative w-7 h-7 cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaMoon className="absolute p-1 w-fit h-full text-black   transition-all duration-300 scale-100 dark:scale-0" />
      <FaSun className="absolute p-1 w-fit h-full text-white  transition-all duration-300 scale-0 dark:scale-100" />
    </div>
  );
}
