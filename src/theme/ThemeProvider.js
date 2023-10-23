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

  /* Base (light) theme */
  background-image: ${({ theme: { mode } }) =>
    mode === "light"
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cpath d='M 0 20 Q 20 40 40 20 T 80 20' fill='none' stroke='%23d0d0d0' stroke-width='0.2' transform='rotate(45 20 20)'/%3E%3C/svg%3E")`
      : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cpath d='M 0 20 Q 20 40 40 20 T 80 20' fill='none' stroke='%23404040' stroke-width='0.2' transform='rotate(45 20 20)'/%3E%3C/svg%3E")`};

  background-size: 80px 80px;
  background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "#f7f7f7" : "#1e1e1e"};
  transition: background-color 0.5s ease-in-out,
    background-image 0.5s ease-in-out;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  overflow-y: auto;
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
      <StyledContainer>
        <ScrollContainer>{children}</ScrollContainer>
      </StyledContainer>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
