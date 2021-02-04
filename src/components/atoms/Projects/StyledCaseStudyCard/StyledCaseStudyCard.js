import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import slugify from "slugify"
import { TextStyles } from "../../Text/Text"

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
`

const CircleStyles = styled(motion.div)`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: var(--accent);
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

const StyledCaseStudyCard = ({ activeProject }) => {
  return (
    <CardStyles>
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
  )
}

export default StyledCaseStudyCard
