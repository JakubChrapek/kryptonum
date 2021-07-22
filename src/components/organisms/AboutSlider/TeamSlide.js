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
import { StructuredText } from "react-datocms"

const SlideWrapper = styled(motion.div)`
  display: flex;
  > div {
    flex: 1 1 50%;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const ImageWrapper = styled(motion.div)`
  padding-right: 73px;
  @media (max-width: 1024px) {
    padding-right: 60px;
  }
  @media (max-width: 767px) {
    padding-right: 0;
  }
  > .gatsby-image-wrapper {
    max-height: 407px;
    height: 407px;
    @media (max-width: 1080px) {
      max-height: 286px;
      height: 286px;
    }
    @media (max-width: 880px) {
      max-height: 246px;
      height: 246px;
    }
    @media (max-width: 767px) {
      max-height: unset;
      height: auto;
    }
  }
`

const TextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    margin-top: 10px;
  }
`

const Line = styled(motion.span)`
  width: 67px;
  height: 2px;
  background-color: var(--black);
  display: inline-block;
  margin-right: 22px;
  margin-top: 10px;
  @media (max-width: 767px) {
    width: 47px;
  }
`

const SlideHeaderWrapper = styled(motion.div)`
  display: flex;
  > div {
    display: flex;
    flex-direction: column;
  }
`

const StyledTitle = styled(TextStyles)`
  @media (max-width: 340px) {
    font-size: 11px;
  }
  @media (max-width: 320px) {
    font-size: 10px;
  }
`

const TeamSlide = ({ slide }) => {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <SlideWrapper>
      <ImageWrapper
        onMouseEnter={() => {
          dispatchCursor({
            type: "CHANGE_CURSOR_TYPE",
            cursorType: CURSOR_TYPES.FULL_CURSOR,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_SIZE",
            cursorSize: CURSOR_SIZES.SMALLER,
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
        key={slide.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <Img fluid={slide.photo.fluid} />
      </ImageWrapper>
      <TextWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          staggerChildren: 0.1,
          duration: 0.3,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <SlideHeaderWrapper>
          <Line
            initial={{ opacity: 0, scaleX: 0, originX: 0 }}
            animate={{ opacity: 1, scaleX: 1, originX: 0 }}
            exit={{ opacity: 0, originX: 1 }}
            transition={{ delay: 0.32, duration: 0.35 }}
          />
          <div>
            <TextStyles
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="400"
              lineHeight="1.5"
              initial={{ opacity: 0, y: 2, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(3px)" }}
              transition={{ delay: 0.55, duration: 0.3 }}
              name
            >
              {slide.name}
            </TextStyles>
            <StyledTitle
              fontSize="13px"
              fontWeight="400"
              lineHeight="2.3"
              letterSpacing="0.1em"
              color="var(--slide-specialty)"
              initial={{ opacity: 0, y: 2, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(3px)" }}
              transition={{ delay: 0.85, duration: 0.3 }}
              specialty
            >
              {slide.specialty}
            </StyledTitle>
          </div>
        </SlideHeaderWrapper>
        <TextStyles
          fontFamily="Poppins"
          fontSize="24px"
          lineHeight="1.5"
          fontWeight="400"
          color="var(--dark-bg)"
          declaredMargin="30px 0 0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 1,
            duration: 0.5,
            ease: [0.5, -0.04, 0.36, 0.93],
          }}
          slideText
        >
          <StructuredText data={slide.biographyFull} />
        </TextStyles>
      </TextWrapper>
    </SlideWrapper>
  )
}

export default TeamSlide
