import React from "react";
import { Section } from "../common";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import self from "../../assets/self.jpg";

const SelfImg = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px dotted #999;
  padding: 2px;
`;

const About = () => {
  const { t } = useTranslation();
  return (
    <Section id="about">
      <div>
        <h2>{t("Welcome")}</h2>
        <p>{t("Blurb")}</p>
      </div>
      <div>
        <p>
          <SelfImg src={self} />
        </p>
      </div>
    </Section>
  );
};

export default About;
