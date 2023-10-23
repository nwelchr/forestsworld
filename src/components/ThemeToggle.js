import styled from "styled-components";

const ThemeToggle = styled.button`
  background: ${({ theme: { mode } }) => (mode === "dark" ? "#111" : "#EEE")};
  color: ${({ theme: { mode } }) => (mode === "dark" ? "$EEE" : "#111")};
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { mode } }) =>
      mode === "dark" ? "#333" : "#CCC"};
  }
`;

export default ThemeToggle;
