import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";

const NavbarStyled = styled.div`
  padding: 10px 50px;
  color: #eee;
  transition: all 0.5s ease-in-out;
  z-index: 1000;

  a {
    margin: 0 15px;
    color: ${({ theme: { mode } }) => (mode === "dark" ? "#999" : "#333")};
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Navbar = ({ theme, toggleTheme }) => {
  const { t } = useTranslation();
  return (
    <NavbarStyled>
      <Link to="about" smooth={true}>
        {t("About")}
      </Link>
      <Link to="pastwork" smooth={true}>
        {t("Past Work")}
      </Link>
      <Link to="projects" smooth={true}>
        {t("Projects")}
      </Link>
      <Link to="contact" smooth={true}>
        {t("Contact")}
      </Link>
      <LanguageToggle />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </NavbarStyled>
  );
};

export default Navbar;
