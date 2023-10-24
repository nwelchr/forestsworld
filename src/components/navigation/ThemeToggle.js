import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ theme: { mode } }) => (mode === "dark" ? "#333" : "#ccc")};
  color: ${({ theme: { mode } }) => (mode === "dark" ? "#ccc" : "#333")};
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { mode } }) =>
      mode === "dark" ? "#333" : "#CCC"};
  }
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <StyledButton onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "☀️"}
    </StyledButton>
  );
};

export default ThemeToggle;
