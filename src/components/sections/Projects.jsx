import React from "react";
import { Section } from "../common";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Project from "./Project";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px; // Adjust this for spacing between boxes
  justify-content: center; // Centers the items if they don't fill the entire row
`;

const Projects = () => {
  const { t } = useTranslation();
  return (
    <Section id="projects">
      <Grid>
        <Project
          imageUrl={"https://nwel.ch/images/synergia.png"}
          description={t("Synergia")}
        />
        <Project
          imageUrl={"https://nwel.ch/images/moving-on.png"}
          description={t("Moving On")}
        />
      </Grid>
    </Section>
  );
};

export default Projects;
