import React, { useEffect, useRef, useState } from "react"
import StyledProjectsWrapper from "../components/atoms/Projects/StyledProjectsWrapper/StyledProjectsWrapper"
import StyledCaseStudyCard from "../components/atoms/Projects/StyledCaseStudyCard/StyledCaseStudyCard"
import styled from "styled-components"
import { graphql } from "gatsby"
import StyledVerticalLine from "../components/atoms/Projects/StyledVerticalLine/StyledVerticalLine"
import useWindowSize from "../utils/getWindowSize"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { TweenLite } from "gsap/gsap-core"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../contexts/cursorContext"

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
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.DARK,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.SMALLER,
    })
  }

  const containerRef = useRef()
  const numberOfProjects = data.allDatoCmsProject.nodes.length
  const projectsPerPage = 6
  const width = useWindowSize()

  return (
    <ProjectsStyles onMouseEnter={handleWrapperEnter} ref={containerRef}>
      <StyledProjectsWrapper
        projects={data.allDatoCmsProject.nodes.slice(0, projectsPerPage)}
        // projectsPerPage={projectsPerPage}
        // activeProjectId={activeProjectId}
        // setActiveProjectId={setActiveProjectId}
      />
      {/* <StyledProjectsWrapper
        projects={data.allDatoCmsProject.nodes.slice(
          projectsPerPage,
          2 * projectsPerPage
        )}
        projectsPerPage={projectsPerPage}
        activeProjectId={activeProjectId}
        setActiveProjectId={setActiveProjectId}
      /> */}
      {/* {width > 1100 && (
        <StyledCaseStudyCard
          projects={data.allDatoCmsProject.nodes}
          activeProjectId={activeProjectId}
        />
      )} */}
      {/* <StyledVerticalLine
        activeProject={activeProjectId}
        activeSection={activeSection}
        numberOfSections={numberOfSections}
        numberOfProjects={numberOfProjects}
        ref={containerRef}
      /> */}
    </ProjectsStyles>
  )
}

export const query = graphql`
  query ProjectsListingQuery {
    allDatoCmsProject {
      nodes {
        id
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
