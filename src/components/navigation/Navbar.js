import React from "react";
import styled from "styled-components";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import { Logo } from "../";

const NavbarStyled = styled.div`
  width: 100%;
  padding: 10px 50px;
  color: #ccc;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Change here */
  background: rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledLink = styled.a`
  display: inline-block;
  padding: 5px;
  margin: 5px;
  text-decoration: none;

  /* Target the rendered anchor tag inside StyledLink */

  position: relative; /* Provide position context for pseudo-element */

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 1px;
    background-color: currentColor;
    transition: width 1s ease-out;
  }

  &:hover::before {
    width: 100%;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = ({ theme, toggleTheme }) => {
  const { t } = useTranslation();
  return (
    <NavbarStyled>
      <Logo />
      <ToggleContainer>
        <LanguageToggle />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </ToggleContainer>
    </NavbarStyled>
  );
};

export default Navbar;
