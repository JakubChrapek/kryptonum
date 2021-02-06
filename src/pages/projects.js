import React, { useRef, useState } from "react"
import StyledProjectsWrapper from "../components/atoms/Projects/StyledProjectsWrapper/StyledProjectsWrapper"
import StyledCaseStudyCard from "../components/atoms/Projects/StyledCaseStudyCard/StyledCaseStudyCard"
import styled from "styled-components"
import { graphql } from "gatsby"
import StyledVerticalLine from "../components/atoms/Projects/StyledVerticalLine/StyledVerticalLine"
import useWindowSize from "../utils/getWindowSize"

const ProjectsStyles = styled.div`
  /* position: fixed; */
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: rgb(247, 247, 247);
  display: flex;
  align-items: center;
  position: relative;
`

const Projects = ({ data }) => {
  const [activeProject, setActiveProject] = useState(0)
  const containerRef = useRef()
  const width = useWindowSize()
  return (
    <ProjectsStyles ref={containerRef}>
      <StyledProjectsWrapper
        projects={data.allDatoCmsProject.nodes}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <StyledCaseStudyCard
        projects={data.allDatoCmsProject.nodes}
        activeProject={data.allDatoCmsProject.nodes[activeProject]}
      />
      <StyledVerticalLine
        activeProject={activeProject}
        numberOfProjects={data.allDatoCmsProject.nodes.length}
        ref={containerRef}
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
