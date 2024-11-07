import React from "react";
import styled from "styled-components";
import { Link } from "../common";

const ProjectWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2); // Background color
  border-radius: 16px; // Increased roundedness
  padding: 30px;
  width: 400px; // Fixed width for consistency
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;

  img {
    width: 300px;
    height: 196px;
    object-fit: cover;
    border-radius: 16px;
  }

  h3 {
    margin-top: 10px;
    font-size: 1rem;
  }

  p {
    margin: 20px 0;
    font-size: 0.975rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 10px;
  }
`;

const Project = ({ description, imageUrl, liveLink, githubLink }) => {
  return (
    <ProjectWrapper>
      <img
        loading="lazy"
        width="300px"
        height="196px"
        src={imageUrl}
        alt="Project"
      />
      <p>{description}</p>
      <ul>
        {liveLink && (
          <li>
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              Live
            </Link>
          </li>
        )}
        {githubLink && (
          <li>
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              Github
            </Link>
          </li>
        )}
      </ul>
    </ProjectWrapper>
  );
};

export default Project;
