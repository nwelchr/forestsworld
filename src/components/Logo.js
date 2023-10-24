import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import logo from "../assets/logo512.png";

const Wrapper = styled.img`
  width: 50px;
  padding: 0px 20px;
`;

const Logo = () => {
  return (
    <Link to="about" smooth duration={2000}>
      <Wrapper src={logo} alt="Hello!" />
    </Link>
  );
};

export default Logo;
