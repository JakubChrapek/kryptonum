import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import Img from "gatsby-image"
import { AnimatePresence, motion } from "framer-motion"
import { fadeInUp, stagger } from "../../Styles/Animations"
import useWindowSize from "../../../utils/getWindowSize"

import ImageColumnSmallWidth from "./ImageColumnSmallWidth"

import { StyledCategoriesList } from "../../atoms/ProjectsSection/StyledCategoriesList"
import { StyledProjectSectionWrapper } from "../../atoms/ProjectsSection/StyledProjectSectionWrapper"
import { StyledImageColumn } from "../../molecules/ProjectSection/StyledImageColumn"
import { StyledProjectsColumn } from "../../molecules/ProjectSection/StyledProjectsColumn"
import { StyledProjectsStyles } from "../../atoms/ProjectsSection/StyledProjectsStyles"

const query = graphql`
  query ProjectsQuery {
    allDatoCmsProject {
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

const ProjectsSection = () => {
  const width = useWindowSize()
  const data = useStaticQuery(query)
  const [activeProject, setActiveProject] = useState(0)

  const handleClick = iterator => {
    setActiveProject(iterator)
  }

  return (
    <StyledProjectSectionWrapper>
      <StyledProjectsStyles>
        <StyledProjectsColumn>
          {data.allDatoCmsProject.nodes.map((project, iterator) => (
            <motion.li
              key={project.projectTitle}
              onClick={() => handleClick(iterator)}
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
          <Link className="btn" to="/projects">
            View all projects
          </Link>
        </StyledProjectsColumn>
        {width > 870 ? (
          <StyledImageColumn>
            <AnimatePresence exitBeforeEnter>
              {data.allDatoCmsProject.nodes
                .filter((_, iterator) => iterator === activeProject)
                .map(project => (
                  <motion.div
                    key={`${project.projectTitle}-${project.projectSlug}`}
                    variants={stagger}
                  >
                    <motion.div
                      key={`${project.projectTitle}-${project.projectSlug}-img-wrapper`}
                      variants={fadeInUp}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Img fluid={project.projectFeaturedImage.fluid} />
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
                ))}
            </AnimatePresence>
          </StyledImageColumn>
        ) : (
          <ImageColumnSmallWidth dataName={data.allDatoCmsProject} />
        )}
      </StyledProjectsStyles>
    </StyledProjectSectionWrapper>
  )
}

export default ProjectsSection
