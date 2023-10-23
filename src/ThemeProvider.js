import React, { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeToggle } from "./components";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <StyledThemeProvider theme={{ mode: theme }}>
      <ThemeToggle onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </ThemeToggle>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
