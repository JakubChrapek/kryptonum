import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion } from "framer-motion"

const query = graphql`
  query ProjectsQuery {
    allDatoCmsProject {
      nodes {
        projectTitle
        projectType
        projectSlug
        projectFeaturedImage {
          fluid(maxWidth: 524) {
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
const StyledWrapper = styled.section`
  background-color: var(--light-gray);
`

const ProjectsStyles = styled.div`
  display: flex;
  align-items: center;
  padding: 76px 151px 220px 141px;
  max-width: 1366px;
  margin: 0 auto;
`

const ProjectsColumn = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  li {
    font-family: "Libre Baskerville";
    font-size: 70px;
    line-height: 1.24em;
    font-weight: normal;
    letter-spacing: -1.75px;
    position: relative;
    padding-left: 8px;
    margin-bottom: 48px;
    &.active {
      color: var(--accent);
    }
  }

  span {
    font-size: 14px;
    font-weight: normal;
    line-height: 2.14;
    letter-spacing: 5px;
    color: var(--accent);
    position: absolute;
    left: -16px;
    top: -20px;
  }
`

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  .gatsby-image-wrapper {
  }
`

const ProjectsSection = () => {
  const data = useStaticQuery(query)
  const [activeProject, setActiveProject] = useState(0)

  return (
    <StyledWrapper>
      <ProjectsStyles>
        <ProjectsColumn>
          {data.allDatoCmsProject.nodes.map((project, iterator) => (
            <motion.li
              whileHover={{
                cursor: "pointer",
                color: "var(--accent)",
              }}
              key={project.projectTitle}
            >
              <span>{`(${iterator + 1})`}</span>
              {project.projectTitle}
            </motion.li>
          ))}
        </ProjectsColumn>
        <ImageColumn>
          <Img
            fluid={data.allDatoCmsProject.nodes[0].projectFeaturedImage.fluid}
          />
        </ImageColumn>
      </ProjectsStyles>
    </StyledWrapper>
  )
}

export default ProjectsSection
