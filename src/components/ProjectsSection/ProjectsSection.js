import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { AnimatePresence, motion } from "framer-motion"
import {
  containerTransition,
  fadeInUp,
  itemTransition,
  stagger,
} from "../Styles/Animations"
import Button from "../Button/Button"

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
const StyledWrapper = styled.section`
  background-color: var(--light-gray);
`

const ProjectsStyles = styled.div`
  display: flex;
  padding: 76px 151px 220px 141px;
  max-width: 1366px;
  margin: 0 auto;
`

const ProjectsColumn = styled.ul`
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 124px;

  li {
    font-family: "Libre Baskerville";
    font-size: 70px;
    line-height: 1.24em;
    font-weight: normal;
    letter-spacing: -1.75px;
    position: relative;
    padding-left: 8px;
    margin-bottom: 48px;
    cursor: pointer;
    color: #030303;
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

  button {
    width: 100%;
    max-width: 387px;
    font-family: "JetBrains Mono";
    font-size: 18px;
    font-weight: 500;
    line-height: 1.28;
    letter-spacing: 2.57px;
    color: var(--white);
    border: 1px solid var(--black);
    padding: 31px 20px;
    background-color: var(--black);
    margin-top: 25px;
    position: relative;
    left: -20px;

    a {
      color: var(--white);
      text-decoration: none;
    }
  }
`

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-start;

  .gatsby-image-wrapper {
    max-width: 524px;
    max-height: 617px;

    picture,
    img {
      object-fit: cover !important;
    }
  }

  p {
    margin-top: 22px;
    color: #090909;
    font-family: "Poppins";
    font-size: 28px;
    line-height: 1.71;
  }
`

const CategoriesList = styled(motion.ul)`
  li {
    display: inline-flex;
    font-family: "Poppins";
    font-size: 18px;
    line-height: 2.67;
    color: #090909;
  }
`

const ProjectsSection = () => {
  const data = useStaticQuery(query)
  const [activeProject, setActiveProject] = useState(0)

  const handleClick = iterator => {
    setActiveProject(iterator)
  }

  return (
    <StyledWrapper>
      <ProjectsStyles>
        <ProjectsColumn>
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
          <Button>
            <Link to="/projects">View all projects</Link>
          </Button>
        </ProjectsColumn>
        <ImageColumn>
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
                  <CategoriesList
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
                  </CategoriesList>
                </motion.div>
              ))}
          </AnimatePresence>
        </ImageColumn>
      </ProjectsStyles>
    </StyledWrapper>
  )
}

export default ProjectsSection
