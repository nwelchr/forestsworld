import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    position: relative;
    color: ${({ theme: { mode } }) => (mode === "dark" ? "#FFF" : "#000")};
    transition: color 0.5s ease-in-out;
    background-color: black;
  }

  body::before, body::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: opacity 1s ease-in-out;
  }

  body::before {
    background: linear-gradient(to bottom, #140940, #022D2F);
    opacity: ${({ theme: { mode } }) => (mode === "dark" ? 1 : 0)};
  }

  body::after {
    background: linear-gradient(to bottom, #5C3CA5, #409A91);
    opacity: ${({ theme: { mode } }) => (mode === "light" ? 1 : 0)};
  }
`;

export default GlobalStyles;
