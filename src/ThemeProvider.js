import React, { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeToggle } from "./components";

import styled, { css } from "styled-components";

const BackgroundGrid = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /* Base (light) theme */
  background-image: ${({ theme: { mode } }) =>
    mode === "light"
      ? `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
         linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`
      : `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
         linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`};
  background-size: 100px 100px;
  background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "#f7f7f7" : "#1e1e1e"};
  transition: background-color 0.5s ease-in-out;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  overflow-y: auto;
`;

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <StyledThemeProvider theme={{ mode: theme }}>
      <BackgroundGrid />
      <StyledContainer>
        <div style={{ position: "relative", zIndex: 1 }}>
          <ThemeToggle onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </ThemeToggle>
          HELLO WHAT IS UP
          {children}
        </div>
      </StyledContainer>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
