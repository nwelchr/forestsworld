import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme: { mode } }) => (mode === "dark" ? "#FFF" : "#000")};
    transition: color 1s ease-in-out;
    a {
      color: ${({ theme: { mode } }) => (mode === "dark" ? "#999" : "#333")};
      transition: color 1s ease-in-out;
      cursor: pointer;
    }
  }
`;

export default GlobalStyles;
