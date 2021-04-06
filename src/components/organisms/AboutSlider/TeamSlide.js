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
    <SlideWrapper key={slide.id}>
      <ImageWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <Img fluid={slide.photo.fluid} />
      </ImageWrapper>
      <TextWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          staggerChildren: 0.1,
          duration: 0.4,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <SlideHeaderWrapper>
          <Line
            initial={{ opacity: 0, scaleX: 0, originX: 0 }}
            animate={{ opacity: 1, scaleX: 1, originX: 0 }}
            exit={{ opacity: 0, originX: 1 }}
            transition={{ delay: 0.38, duration: 0.4 }}
          />
          <div>
            <TextStyles
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="400"
              lineHeight="1.38"
              initial={{ opacity: 0, y: 2, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(3px)" }}
              transition={{ delay: 0.65, duration: 0.4 }}
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
              initial={{ opacity: 0, y: 2, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(3px)" }}
              transition={{ delay: 0.95, duration: 0.4 }}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 1.25,
            duration: 0.7,
            ease: [0.5, -0.04, 0.36, 0.93],
          }}
        >
          {slide.biography}
        </TextStyles>
      </TextWrapper>
    </SlideWrapper>
  )
}

export default TeamSlide
