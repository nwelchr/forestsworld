import styled from "styled-components";

const Link = styled.a`
  display: inline-block;

  padding: 10px 20px;
  @media (max-width: 768px) {
    padding: 5px 10px;
  }

  border-radius: 5px;
  background-color: ${({ theme: { mode } }) =>
    mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};

  text-decoration: none;
  transition: color 1s ease-in-out, border 1s ease-in-out,
    background-color 1s ease-in-out, opacity 1s ease-in-out,
    box-shadow 1s ease-in-out;

  border: 1px solid
    ${({ theme: { mode } }) =>
      mode === "dark" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"};

  opacity: 0.6;

  &:hover {
    box-shadow: 0 0 15px 5px
      ${({ theme: { mode } }) =>
        mode === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"};
    opacity: 0.8;
  }

  font-weight: 400;
`;

export default Link;
