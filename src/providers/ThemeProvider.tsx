import { FC, ReactNode, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const toggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
