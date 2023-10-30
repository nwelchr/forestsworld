import React from "react";
import styled from "styled-components";
import logo from "../assets/logo512.png";

const Wrapper = styled.img`
  width: 50px;
`;

const Logo = () => {
  return <Wrapper src={logo} alt="Hello!" />;
};

export default Logo;
