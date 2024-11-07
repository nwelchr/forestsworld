import React from "react";
import { Section } from "../common";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import self from "../../assets/self.webp";

const SelfImg = styled.img`
  border-radius: 50%;

  max-width: 300px;
  height: 300px;

  @media (max-width: 1024px) {
    max-width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    max-width: 200px;
    height: 200px;
  }

  object-fit: cover;
  border: 1px dotted #999;
  padding: 2px;
`;

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const WelcomeText = styled.h1`
  text-align: center;
  font-weight: 200;
  font-size: 5rem;
  letter-spacing: 0.001rem;

  padding: 0 5%;

  @media (max-width: 768px) {
    font-size: 3rem;
    padding: 0 20%;
  }
`;

const Blurb = styled.section`
  display: flex;
  max-width: 600px;

  padding: 10px;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 5px;
    text-align: center;
  }
`;

const About = () => {
  const { t } = useTranslation();

  return (
    <Section id="about">
      <WelcomeText>
        {t("Welcome")} {t("World")}.
      </WelcomeText>
      <ColumnFlex>
        <Blurb>
          <p>{t("Blurb")}</p>
        </Blurb>
        <SelfImg width="300px" height="300px" src={self} />
      </ColumnFlex>
    </Section>
  );
};

export default About;
