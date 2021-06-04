import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
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
} from "../../../contexts/cursorContext"

import MaxWidthSlider from "./MaxWidthSlider"

const query = graphql`
  query ProjectsQuery {
    allDatoCmsProject(limit: 5, filter: { locale: { eq: "pl" } }) {
      nodes {
        projectTitle
        projectType
        projectSlug
        projectFeaturedImage {
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
      onMouseEnter={() => {
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
      }}
    >
      <StyledProjectsStyles>
        <StyledProjectsColumn>
          {data.allDatoCmsProject.nodes.map((project, iterator) => (
            <motion.li
              key={project.projectTitle}
              onClick={() => handleClick(iterator)}
              onMouseEnter={() => {
                dispatchCursor({
                  type: "CHANGE_CURSOR_TYPE",
                  cursorType: CURSOR_TYPES.FULL_CURSOR,
                })
                dispatchCursor({
                  type: "CHANGE_CURSOR_COLOR",
                  cursorColor: CURSOR_COLORS.ACCENT_TRANSPARENT,
                })
                dispatchCursor({
                  type: "CHANGE_CURSOR_SIZE",
                  cursorSize: CURSOR_SIZES.BIGGER,
                })
              }}
              onMouseLeave={() => {
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
              }}
              className={iterator === activeProject ? "active" : null}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "backOut" },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
            >
              <span>{`(${iterator + 1})`}</span>
              {project.projectTitle}
            </motion.li>
          ))}
          <Link
            onMouseEnter={() => {
              dispatchCursor({
                type: "CHANGE_CURSOR_TYPE",
                cursorType: CURSOR_TYPES.FULL_CURSOR,
              })
              dispatchCursor({
                type: "CHANGE_CURSOR_COLOR",
                cursorColor: CURSOR_COLORS.ACCENT_TRANSPARENT,
              })
              dispatchCursor({
                type: "CHANGE_CURSOR_SIZE",
                cursorSize: CURSOR_SIZES.BIGGER,
              })
            }}
            onMouseLeave={() => {
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
