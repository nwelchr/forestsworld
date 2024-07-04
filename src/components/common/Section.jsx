import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 20px;
  }
`;

const Section = ({ id, children }) => {
  return <Wrapper id={id}>{children}</Wrapper>;
};

export default Section;
