import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const NavbarStyled = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 50px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  transition: all 0.5s ease;
  z-index: 1000;

  a {
    margin: 0 15px;
    color: ${(props) => props.theme.color};
    cursor: pointer;
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
