import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { motion } from "framer-motion"
import useWindowSize from "../../../utils/getWindowSize"

import ImageColumnSmallWidth from "./ImageColumnSmallWidth"

import { StyledProjectSectionWrapper } from "../../atoms/ProjectsSection/StyledProjectSectionWrapper"
import { StyledProjectsColumn } from "../../molecules/ProjectSection/StyledProjectsColumn"
import { StyledProjectsStyles } from "../../atoms/ProjectsSection/StyledProjectsStyles"

import MaxWidthSlider from "./MaxWidthSlider"

const query = graphql`
  query ProjectsQuery {
    allDatoCmsProject(limit: 5) {
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
        {width > 767 ? (
          <MaxWidthSlider dataName={data.allDatoCmsProject} />
        ) : (
          <ImageColumnSmallWidth dataName={data.allDatoCmsProject} />
        )}
      </StyledProjectsStyles>
    </StyledProjectSectionWrapper>
  )
}

export default ProjectsSection
