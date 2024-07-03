import React, { useState } from "react";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  background: ${({ theme: { mode } }) =>
    mode === "dark"
      ? "linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%), black;"
      : "linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%), white;"}
      
  background-size: 300% 300%;
  @media (max-width: 768px) {
    background-size: 200% 200%;
  }

  animation: gradient 20s ease infinite;
  transition: background 1s ease-in-out;

  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    25% {
      background-position: 50% 100%;
    }
    50% {
      background-position: 100% 100%;
    }
    75% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThemeProvider = ({ children, theme }) => {
  return (
    <StyledThemeProvider theme={{ mode: theme }}>
      <Background />
      <ScrollContainer>{children}</ScrollContainer>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
