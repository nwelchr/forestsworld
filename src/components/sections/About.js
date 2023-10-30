import React from "react";
import { Section } from "../common";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import self from "../../assets/self-test.png";
import resume from "../../assets/resume.pdf";

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

const IconWrapper = styled.a`
  margin: 0 10px;
  transition: color 1s ease-in-out, filter 1s ease-in-out;

  &:hover {
    filter: brightness(1.2);
  }
`;

const StyledIcon = styled.svg`
  width: 32px;
  height: 32px;

  path {
    fill: ${({ theme: { mode } }) => (mode === "dark" ? "#bbb" : "#000")};
    transition: fill 1s ease-in-out;
  }

  ${IconWrapper}:hover & {
    path {
      fill: ${({ theme: { mode } }) => (mode === "dark" ? "#fff" : "#555")};
    }
  }
`;

const Icon = ({ href, title, pathData }) => (
  <IconWrapper href={href} target="_blank" rel="noopener noreferrer">
    <StyledIcon
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path d={pathData} />
    </StyledIcon>
  </IconWrapper>
);

const Links = () => {
  return (
    <div>
      <Icon
        href="https://www.linkedin.com/in/forestrwelch"
        title="LinkedIn"
        pathData="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
      <Icon
        href="https://github.com/nwelchr"
        title="GitHub"
        pathData="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
      {/* Add more icons similarly */}
    </div>
  );
};

const ResumeButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${({ theme: { mode } }) =>
    mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};

  text-decoration: none;
  transition: color 1s ease-in-out, background-color 1s ease-in-out,
    box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0 15px 5px
      ${({ theme: { mode } }) =>
        mode === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"};
  }

  font-weight: 300;
  opacity: 0.8;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <Center>
        a
        <Links />
        <div style={{ marginTop: "20px" }}>
          <ResumeButton href={resume} target="_blank">
            Resume
          </ResumeButton>
        </div>
      </Center>
    </Section>
  );
};

export default About;
