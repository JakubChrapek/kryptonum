import React, { useState } from "react"
import StyledProjectsWrapper from "../components/atoms/Projects/StyledProjectsWrapper/StyledProjectsWrapper"
import StyledCaseStudyCard from "../components/atoms/Projects/StyledCaseStudyCard/StyledCaseStudyCard"
import styled from "styled-components"
import { graphql } from "gatsby"

const ProjectsStyles = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(247, 247, 247);
  display: flex;
  align-items: center;
`

const Projects = ({ data }) => {
  const [activeProject, setActiveProject] = useState(0)
  return (
    <ProjectsStyles>
      <StyledProjectsWrapper
        projects={data.allDatoCmsProject.nodes}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <StyledCaseStudyCard
        activeProject={data.allDatoCmsProject.nodes[activeProject]}
      />
    </ProjectsStyles>
  )
}

export const query = graphql`
  query ProjectsListingQuery {
    allDatoCmsProject {
      nodes {
        projectTitle
        projectSlug
        projectFeaturedImage {
          fluid(maxWidth: 524, maxHeight: 617) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

export default Projects
