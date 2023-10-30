import React from "react";
import { Section } from "../common";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import self from "../../assets/self-test.png";

const SelfImg = styled.img`
  border-radius: 50%;
  max-width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px dotted #999;
  padding: 2px;
`;

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const WelcomeText = styled.h1`
  text-align: center;
  font-weight: 200;
  font-size: 5rem;
  letter-spacing: 0.001rem;
`;

const Blurb = styled.section`
  display: flex;
  padding: 20px;
  max-width: 600px;
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
        <div>
          <p>
            <SelfImg src={self} />
          </p>
        </div>
      </ColumnFlex>
    </Section>
  );
};

export default About;
