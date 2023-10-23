import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const NavbarStyled = styled.div`
  padding: 10px 50px;
  color: #eee;
  transition: all 0.5s ease;
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

const Navbar = ({ theme }) => {
  return (
    <NavbarStyled theme={theme}>
      <Link to="about" smooth={true}>
        About
      </Link>
      <Link to="pastwork" smooth={true}>
        Past Work
      </Link>
      <Link to="projects" smooth={true}>
        Projects
      </Link>
      <Link to="contact" smooth={true}>
        Contact
      </Link>
    </NavbarStyled>
  );
};

export default Navbar;
