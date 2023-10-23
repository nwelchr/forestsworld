import React, { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeToggle } from "./components";

import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  /* Base (light) theme */
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 100px 100px;
  background-color: #f7f7f7;
  transition: background-color 0.5s ease-in-out;

  /* Dark theme using ::before pseudo-element */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.05) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 100px 100px;
    background-color: #1e1e1e;
    opacity: ${({ theme: { mode } }) => (mode === "dark" ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
  }
`;

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <StyledThemeProvider theme={{ mode: theme }}>
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
