import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme: { mode } }) => (mode === "dark" ? "#FFF" : "#000")};
    transition: color 0.5s ease-in-out;
  }
`;

export default GlobalStyles;
