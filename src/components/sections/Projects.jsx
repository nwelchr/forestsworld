import React from "react";
import { Section } from "../common";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Project from "./Project";
import bop from "../../assets/bop.webp";
import powerOfFriendship from "../../assets/power-of-friendship.webp";
import projectPhantom from "../../assets/project-phantom.webp";
import synergia from "../../assets/synergia.webp";
import verbling from "../../assets/verbling.webp";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px; // Adjust this for spacing between boxes
  justify-content: center; // Centers the items if they don't fill the entire row

  @media (max-width: 1024px) {
    flex-direction: row;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Projects = () => {
  const { t } = useTranslation();
  return (
    <Section id="projects">
      <Grid>
        <Project
          imageUrl={bop}
          description={t("Bop")}
          liveLink="https://bop-aa-b461179cab20.herokuapp.com/#/"
          githubLink="https://github.com/nwelchr/bop"
        />
        <Project
          imageUrl={powerOfFriendship}
          description={t("ThePowerOfFriendship")}
          liveLink="https://nwelchr.github.io/The-Power-of-Friendship/"
          githubLink="https://github.com/nwelchr/The-Power-of-Friendship"
        />
        <Project
          imageUrl={projectPhantom}
          description={t("ProjectPhantom")}
          liveLink="https://phantomvrtranslate.github.io/website/"
          githubLink="https://github.com/PhantomVRTranslate/PhantomVR"
        />
        <Project
          imageUrl={synergia}
          description={t("Synergia")}
          liveLink="https://synergiaihr.com/"
        />
        <Project
          imageUrl={verbling}
          description={t("Verbling")}
          liveLink="https://nwelchr.github.io/verbling-challenge/"
          githubLink="https://github.com/nwelchr/verbling-challenge"
        />
      </Grid>
    </Section>
  );
};

export default Projects;
