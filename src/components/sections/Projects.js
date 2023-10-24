import React from "react";
import { Section } from "../common";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <Section id="projects">
      <h2>{t("Projects")}</h2>
      <p>wepofj</p>
    </Section>
  );
};

export default Projects;
