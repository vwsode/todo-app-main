import { createContext } from "react";

interface ThemeContextProps {
  mode: "dark" | "light";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);
