import React from "react"
import Img from "gatsby-image"

import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import { TextStyles } from "../../atoms/Text/Text"
import styled from "styled-components"
import { motion } from "framer-motion"

const SlideWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
`

const ImageWrapper = styled(motion.div)`
  > .gatsby-image-wrapper {
    max-height: 326px;
    height: 326px;
  }
`

const TextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

const Line = styled(motion.span)`
  width: 67px;
  height: 2px;
  background-color: var(--black);
  display: inline-block;
  margin-right: 22px;
  margin-bottom: 20px;
`

const SlideHeaderWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
  }
`

const TeamSlide = ({ slide }) => {
  return (
    <SlideWrapper
      key={slide.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <ImageWrapper>
        <Img fluid={slide.photo.fluid} />
      </ImageWrapper>
      <TextWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: 0.1,
          staggerChildren: 0.1,
          duration: 0.7,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <SlideHeaderWrapper
          initial={{ opacity: 0, y: 8, skewX: 7 }}
          animate={{ opacity: 1, y: 0, skewX: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{
            duration: 0.7,
            ease: [1, 0, 0, 1],
          }}
        >
          <Line />
          <div>
            <TextStyles
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="400"
              lineHeight="1.38"
            >
              {slide.name}
            </TextStyles>
            <TextStyles
              fontFamily="JetBrains Mono"
              fontSize="14px"
              fontWeight="500"
              lineHeight="1.29"
              color="var(--slide-specialty)"
              declaredMargin="2px 0 0"
            >
              {slide.specialty}
            </TextStyles>
          </div>
        </SlideHeaderWrapper>
        <TextStyles
          fontFamily="Poppins"
          fontSize="28px"
          fontWeight="400"
          lineHeight="1.71"
          color="var(--black-font)"
          declaredMargin="36px 0 0"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [1, 0, 0, 1],
          }}
        >
          {slide.biography}
        </TextStyles>
      </TextWrapper>
    </SlideWrapper>
  )
}

export default TeamSlide
