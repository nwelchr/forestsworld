import React from "react";
import styled from "styled-components";

const SectionStyled = styled.div`
  min-height: 100vh;
  padding: 50px;
  background-color: black;
  opacity: 20%;
  color: red;

  h2 {
    margin-bottom: 20px;
  }
`;

const Section = ({ id, title }) => {
  return (
    <SectionStyled id={id}>
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet...
      </p>
    </SectionStyled>
  );
};

export default Section;
