import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import useWindowSize from "../../../utils/getWindowSize"

import ImageColumnSmallWidth from "./ImageColumnSmallWidth"

import { StyledProjectSectionWrapper } from "../../atoms/ProjectsSection/StyledProjectSectionWrapper"
import { StyledProjectsColumn } from "../../molecules/ProjectSection/StyledProjectsColumn"
import { StyledProjectsStyles } from "../../atoms/ProjectsSection/StyledProjectsStyles"
import {
  useCursorDispatchContext,
  CURSOR_TYPES,
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TEXT,
} from "../../../contexts/cursorContext"

import MaxWidthSlider from "./MaxWidthSlider"

const query = graphql`
  query ProjectsQuery {
    allDatoCmsProject(sort: {position: DESC}, limit: 5, filter: { showProject: { eq: true } }) {
      nodes {
        projectTitle
        projectType
        projectSlug
        projectFeaturedImage {
          fluid(maxWidth: 524, maxHeight: 617) {
            ...GatsbyDatoCmsFluid
          }
        }
        projectPreviewImage {
          fluid(maxWidth: 524, maxHeight: 617) {
            ...GatsbyDatoCmsFluid
          }
        }
        projectCategories {
          categoryName
        }
      }
    }
  }
`

const ProjectsSection = ({ buttonText }) => {
  const width = useWindowSize()
  const data = useStaticQuery(query)
  const dispatchCursor = useCursorDispatchContext()
  const [activeProject, setActiveProject] = useState(0)

  const handleClick = iterator => {
    setActiveProject(iterator)
  }

  return (
    <StyledProjectSectionWrapper
      id="strony-internetowe"
      onMouseEnter={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.FULL_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.SMALLER,
        })
      }}
    >
      <StyledProjectsStyles>
        <StyledProjectsColumn>
          {data.allDatoCmsProject.nodes.map((project, iterator) => (
            <Link to={`/projekty/${project.projectSlug}`}>
              <motion.li
                key={project.projectTitle}
                onMouseEnter={() => {
                  handleClick(iterator)
                  dispatchCursor({
                    type: "CHANGE_CURSOR_TYPE",
                    cursorType: CURSOR_TYPES.FULL_CURSOR,
                  })
                  dispatchCursor({
                    type: "CHANGE_CURSOR_SIZE",
                    cursorSize: CURSOR_SIZES.HUGE,
                  })
                }}
                onMouseLeave={() => {
                  dispatchCursor({
                    type: "CHANGE_CURSOR_TYPE",
                    cursorType: CURSOR_TYPES.FULL_CURSOR,
                  })
                  dispatchCursor({
                    type: "CHANGE_CURSOR_SIZE",
                    cursorSize: CURSOR_SIZES.SMALLER,
                  })
                }}
                className={iterator === activeProject ? "active" : null}
              >
                <span>{`(${iterator + 1})`}</span>
                {project.projectTitle}
              </motion.li>
            </Link>
          ))}
          <Link
            onMouseEnter={() => {
              dispatchCursor({
                type: "CHANGE_CURSOR_TYPE",
                cursorType: CURSOR_TYPES.FULL_CURSOR,
              })
              dispatchCursor({
                type: "CHANGE_CURSOR_SIZE",
                cursorSize: CURSOR_SIZES.HUGE,
              })
            }}
            onMouseLeave={() => {
              dispatchCursor({
                type: "CHANGE_CURSOR_TYPE",
                cursorType: CURSOR_TYPES.FULL_CURSOR,
              })
              dispatchCursor({
                type: "CHANGE_CURSOR_SIZE",
                cursorSize: CURSOR_SIZES.SMALLER,
              })
            }}
            className="btn btn__dark"
            to="/projekty"
          >
            {buttonText ? buttonText : "Wszystkie projekty"}
          </Link>
        </StyledProjectsColumn>
        {width > 767 ? (
          <MaxWidthSlider
            activeProject={activeProject}
            dataName={data.allDatoCmsProject}
          />
        ) : (
          <ImageColumnSmallWidth dataName={data.allDatoCmsProject} />
        )}
      </StyledProjectsStyles>
    </StyledProjectSectionWrapper>
  )
}

export default ProjectsSection
