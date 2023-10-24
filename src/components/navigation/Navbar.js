import React from "react";
import { Link } from "react-scroll";
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
  background: rgba(0, 0, 0, 0.5);
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  padding: 10px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1; /* This will allow it to take up all available space */
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
      <LinksContainer>
        <StyledLink to="about" smooth duration={2000}>
          {t("About")}
        </StyledLink>
        <StyledLink to="pastwork" smooth duration={2000}>
          {t("Past Work")}
        </StyledLink>
        <StyledLink to="projects" smooth duration={2000}>
          {t("Projects")}
        </StyledLink>
        <StyledLink to="contact" smooth duration={2000}>
          {t("Contact")}
        </StyledLink>
      </LinksContainer>
      <ToggleContainer>
        <LanguageToggle />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </ToggleContainer>
    </NavbarStyled>
  );
};

export default Navbar;
