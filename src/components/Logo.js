import * as React from "react";
import styled from "styled-components";

import logo from "../assets/logo512.png";

const Wrapper = styled.img`
  max-width: 100px;
  width: 100%;
  height: auto;
  align-self: flex-start;
  padding: 20px;

  @media (max-width: 600px) {
    max-width: 150px;
    align-self: center;
  }
`;

const Logo = () => {
  return <Wrapper src={logo} alt="Hello!" />;
};

export default Logo;
