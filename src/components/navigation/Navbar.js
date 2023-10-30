import React from "react";
import styled from "styled-components";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import { Logo } from "../";

const NavbarStyled = styled.div`
  width: 100%;
  color: #ccc;
  position: fixed;

  background: rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Padding = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = ({ theme, toggleTheme }) => {
  const { t } = useTranslation();
  return (
    <NavbarStyled>
      <Padding>
        <Logo />
        <ToggleContainer>
          <LanguageToggle />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </ToggleContainer>
      </Padding>
    </NavbarStyled>
  );
};

export default Navbar;
