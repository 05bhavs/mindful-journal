import { createContext, useState } from "react";

import { darkTheme, lightTheme } from "@/constants/theme";

export const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: any) {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
