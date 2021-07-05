import React, { useState } from "react"

import { AnimatePresence, motion } from "framer-motion"
import Img from "gatsby-image"
import { fadeInUp, stagger } from "../../Styles/Animations"
import { StyledImageColumn } from "../../molecules/ProjectSection/StyledImageColumn"
import { StyledCategoriesList } from "../../atoms/ProjectsSection/StyledCategoriesList"
import {
  CURSOR_COLORS,
  CURSOR_TYPES,
  CURSOR_SIZES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import { Link } from "gatsby"

const MaxWidthSlider = ({ dataName, activeProject }) => {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <StyledImageColumn>
      <AnimatePresence exitBeforeEnter>
        {dataName.nodes
          .filter((_, iterator) => iterator === activeProject)
          .map(project => (
            <Link to={`/projekty/${project.projectSlug}`}>
              <motion.div
                key={`${project.projectTitle}-${project.projectSlug}`}
                variants={stagger}
                onMouseEnter={() => {
                  dispatchCursor({
                    type: "CHANGE_CURSOR_TYPE",
                    cursorType: CURSOR_TYPES.OUTLINED_CURSOR,
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
              >
                <motion.div
                  key={`${project.projectTitle}-${project.projectSlug}-img-wrapper`}
                  variants={fadeInUp}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Img fluid={project.projectPreviewImage.fluid} />
                </motion.div>
                <motion.p
                  key={`${project.projectTitle}-${project.projectSlug}-projectType`}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  exit={{ opacity: 0 }}
                >{`${project.projectType[0].toUpperCase()}${project.projectType.slice(
                  1
                )}`}</motion.p>
                <StyledCategoriesList
                  key={`${project.projectTitle}-${project.projectSlug}-projectCategories`}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  exit={{ opacity: 0 }}
                >
                  <motion.span>
                    {project.projectCategories
                      .map(category => category.categoryName)
                      .join(", ")}
                  </motion.span>
                </StyledCategoriesList>
              </motion.div>
            </Link>
          ))}
      </AnimatePresence>
    </StyledImageColumn>
  )
}

export default MaxWidthSlider
