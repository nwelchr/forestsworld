import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-size: 1.25rem;
    font-weight: 200;
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
