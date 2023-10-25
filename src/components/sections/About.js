import React from "react";
import { Section } from "../common";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import self from "../../assets/self-test.png";

const SelfImg = styled.img`
  border-radius: 50%;
  width: 300px;
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

const StarryBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;

  & > div {
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    animation: twinkle 3s infinite alternate;

    &:nth-child(odd) {
      animation-duration: 2.5s;
    }

    &:nth-child(3n) {
      animation-duration: 3.5s;
    }
  }

  @keyframes twinkle {
    0%,
    100% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const renderStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 5 + 1; // 1px to 6px
    const left = Math.random() * 100; // Random position in viewport width
    const top = Math.random() * 100; // Random position in viewport height
    stars.push(
      <div
        key={i}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
        }}
      />
    );
  }
  return stars;
};

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
