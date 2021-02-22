import { AnimatePresence, motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import slugify from "slugify"
import { TextStyles } from "../../Text/Text"
import Img from "gatsby-image"
import { projectTransition } from "../../../Styles/Animations"

const CardStyles = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  border: 1px solid var(--black);
  width: 344px;
  height: 490px;
  display: flex;
  justify-content: center;
  align-items: center;

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
  position: absolute;
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
`

const StyledCaseStudyCard = ({ projects, activeProject }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <CardStyles>
        {projects
          .filter(project => project.projectSlug === activeProject.projectSlug)
          .map(project => (
            <motion.div
              key={project.projectSlug}
              variants={projectTransition}
              initial="initial"
              exit="exit"
              animate="animate"
            >
              <ImageLink to={`/projects/${activeProject.projectSlug}`}>
                <Img
                  fluid={project.projectFeaturedImage.fluid}
                  alt={project.projectTitle}
                />
              </ImageLink>
            </motion.div>
          ))}
        <CircleStyles whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <LinkStyles to={`/projects/${activeProject.projectSlug}`}>
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
      </CardStyles>
    </AnimatePresence>
  )
}

export default StyledCaseStudyCard
