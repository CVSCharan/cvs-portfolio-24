"use client";
import React, {
  createContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
  ReactNode,
  FC,
} from "react";

interface ThemeContextProps {
  themeColor: string;
  handleThemeColor: (content: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [themeColor, setThemeColor] = useState<string>("dark");

  const handleThemeColor = useCallback((content: string) => {
    setThemeColor(content);
  }, []);

  const currentHour = new Date().getHours();
  const isDayTime = currentHour >= 6 && currentHour < 18;

  useEffect(() => {
    if (isDayTime) {
      setThemeColor("light");
    } else {
      setThemeColor("dark");
    }
  }, [isDayTime]);

  const contextValue = useMemo(
    () => ({
      handleThemeColor,
      themeColor,
    }),
    [handleThemeColor, themeColor]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
