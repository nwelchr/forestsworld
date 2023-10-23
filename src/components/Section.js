import React from "react";
import styled from "styled-components";

const SectionStyled = styled.section`
  width: 100%;
  padding: 50px;
  margin: 10px;

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
        imperdiet...Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet...Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Phasellus imperdiet...Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus imperdiet...Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus imperdiet...Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Phasellus imperdiet...
      </p>
    </SectionStyled>
  );
};

export default Section;
