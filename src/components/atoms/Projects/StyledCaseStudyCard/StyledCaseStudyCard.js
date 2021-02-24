import { AnimatePresence, motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import slugify from "slugify"
import { TextStyles } from "../../Text/Text"
import Img from "gatsby-image"
import { projectTransition } from "../../../Styles/Animations"

const CardStyles = styled(motion.div)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 344px;
  height: 490px;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 100%;
    height: 100%;
    background-color: var(--white);
    border: 1px solid var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1800px) {
    width: 400px;
    height: 570px;
  }

  @media (min-width: 1910px) {
    width: 440px;
    height: 627px;
  }

  @media (min-width: 2200px) {
    width: 580px;
    height: 826px;
  }
  @media (max-width: 1100px) {
    /* TODO */
    /* position: sticky;
    left: unset;
    right: 0;
    top: 0; */
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    position: absolute !important;
    left: 0;
    top: 0;
  }
`

const CircleStyles = styled(motion.div)`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: var(--accent);
  position: relative;
  z-index: 2;
`

const LinkStyles = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageLink = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`

const StyledCaseStudyCard = ({ projects, activeProjectId }) => {
  return (
    <CardStyles>
      {projects
        .filter(project => project.id === activeProjectId)
        .map(project => (
          <motion.div
            key={project.projectSlug}
            initial={{ opacity: 0, y: 200, scaleY: 1.2 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -200, transition: { duration: 1 } }}
            transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="card"
          >
            <ImageLink to={`/projects/${project.projectSlug}`}>
              <Img
                fluid={project.projectFeaturedImage.fluid}
                alt={project.projectTitle}
              />
            </ImageLink>
            <CircleStyles
              key={`${project.projectSlug}-link`}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.15, delay: 0 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.15, delay: 0 },
              }}
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              exit={{ opacity: 0, scale: 0, y: 40 }}
            >
              <LinkStyles to={`/projects/${project.projectSlug}`}>
                <TextStyles
                  fontSize="12px"
                  fontWeight="600"
                  color="var(--black)"
                  lineHeight="1.5"
                  letterSpacing="2px"
                  fontFamily="Poppins"
                  textAlign="center"
                >
                  View case study
                </TextStyles>
              </LinkStyles>
            </CircleStyles>
          </motion.div>
        ))}
    </CardStyles>
  )
}

export default StyledCaseStudyCard
