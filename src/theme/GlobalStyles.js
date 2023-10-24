import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme: { mode } }) => (mode === "dark" ? "#ccc" : "#333")};
    transition: color 1s ease-in-out;
    a {
      color: ${({ theme: { mode } }) => (mode === "dark" ? "#ccc" : "#333")};
      transition: color 1s ease-in-out;
      cursor: pointer;
    }
  }
`;

export default GlobalStyles;
