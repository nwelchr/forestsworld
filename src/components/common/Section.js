import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  padding: 50px;
  margin: 10px;

  h2 {
    margin-bottom: 20px;
  }
`;

const Section = ({ id, children }) => {
  return <Wrapper id={id}>{children}</Wrapper>;
};

export default Section;
