import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ theme: { mode } }) =>
    mode === "dark" ? "rgba(255, 255, 255, .5)" : "rgba(0, 0, 0, .5)"};
  color: ${({ theme: { mode } }) => (mode === "dark" ? "#ccc" : "#333")};
  border-radius: 20px;
  border: 0px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 1s ease-in-out;

  &:hover {
    background: ${({ theme: { mode } }) =>
      mode === "dark" ? "rgba(255, 255, 255, .2)" : "rgba(0, 0, 0, .2)"};
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
