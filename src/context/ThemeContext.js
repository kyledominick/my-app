import React, { createContext, useState, useContext, useEffect } from "react";
import { lightTheme, darkTheme } from "../theme/theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme); // Default to light theme
  const [isCircle, setIsCircle] = useState(true); // Default shape is circle

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  const toggleShape = () => {
    setIsCircle((prev) => !prev); // Toggle between circle and square
  };

  // Update CSS variables when the theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--footer-background", theme.footerBackground);
    root.style.setProperty("--footer-text", theme.footerText);
    root.style.setProperty("--footer-hover-color", theme.name === "light" ? "#007bff" : "#90caf9"); // Optional hover color
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isCircle, toggleShape }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};