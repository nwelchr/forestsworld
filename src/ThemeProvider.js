import React, { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Toggle } from "./components";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <StyledThemeProvider theme={{ mode: theme }}>
      <Toggle onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</Toggle>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
