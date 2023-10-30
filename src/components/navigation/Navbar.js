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
