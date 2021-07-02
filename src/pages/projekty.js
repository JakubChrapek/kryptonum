import React, { useRef } from "react"
import StyledProjectsWrapper from "../components/atoms/Projects/StyledProjectsWrapper/StyledProjectsWrapper"
import styled from "styled-components"
import { graphql } from "gatsby"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../contexts/cursorContext"
import website from "../../config/website"

const ProjectsStyles = styled.div`
  /* position: fixed; */
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: rgb(247, 247, 247);
  display: flex;
  flex-direction: column;
  position: relative;
`

const Projects = ({ data }) => {
  const dispatchCursor = useCursorDispatchContext()
  const handleWrapperEnter = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.SMALLER,
    })
  }

  const containerRef = useRef()
  const projectsPerPage = 6

  return (
    <ProjectsStyles
      id={website.skipNavId}
      onMouseEnter={handleWrapperEnter}
      ref={containerRef}
    >
      <StyledProjectsWrapper
        projects={data.allDatoCmsProject.nodes.slice(0, projectsPerPage)}
        projectsPerPage={projectsPerPage}
      />
      {/* {width > 1100 && (
        <StyledCaseStudyCard
          projects={data.allDatoCmsProject.nodes}
          activeProjectId={activeProjectId}
        />
      )} */}
      {/* <StyledVerticalLine
        activeProject={activeProjectId}
        numberOfProjects={numberOfProjects}
        ref={containerRef}
      /> */}
    </ProjectsStyles>
  )
}

export const query = graphql`
  query ProjectsListingQuery {
    allDatoCmsProject(
      limit: 6
      sort: { fields: meta___createdAt, order: DESC }
    ) {
      nodes {
        id
        projectTitle
        projectSlug
        projectCtaText {
          value
        }
        projectFeaturedImage {
          gatsbyImageData(width: 518, height: 697, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Projects
