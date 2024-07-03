import React from "react";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  flex: 1 1 calc(33.333% - 16px); // Assumes three items per row minus the gap
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #ddd; // Optional border
  border-radius: 8px; // Optional rounded corners

  img {
    width: 100%;
    object-fit: cover;
  }

  h3 {
    margin-top: 10px;
  }
`;

const Project = ({ description, imageUrl }) => {
  return (
    <ProjectWrapper>
      <img src={imageUrl} />
      <span>{description}</span>
    </ProjectWrapper>
  );
};

export default Project;
