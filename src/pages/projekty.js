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
  const [activeProjectId, setActiveProjectId] = useState(
    data?.allDatoCmsProject?.nodes[0].id
  )
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
  const numberOfProjects = data.allDatoCmsProject.nodes.length % 7
  const projectsPerPage = 6
  const width = useWindowSize()

  return (
    <ProjectsStyles onMouseEnter={handleWrapperEnter} ref={containerRef}>
      <StyledProjectsWrapper
        projects={data.allDatoCmsProject.nodes.slice(0, projectsPerPage)}
        projectsPerPage={projectsPerPage}
        activeProjectId={activeProjectId}
        setActiveProjectId={setActiveProjectId}
      />
      {/* {width > 1100 && (
        <StyledCaseStudyCard
          projects={data.allDatoCmsProject.nodes}
          activeProjectId={activeProjectId}
        />
      )} */}
      <StyledVerticalLine
        activeProject={activeProjectId}
        numberOfProjects={numberOfProjects}
        ref={containerRef}
      />
    </ProjectsStyles>
  )
}

const Project = () => {
  return <li>tralala</li>
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
