import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { TextStyles } from "../../atoms/Text/Text"
import { render as toPlainText } from "datocms-structured-text-to-plain-text"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

const TextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  > p {
    max-width: 50ch;
  }
`

const Line = styled(motion.span)`
  width: 67px;
  height: 2px;
  background-color: var(--black);
  display: inline-block;
  margin-right: 22px;
`

const SlideHeaderWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

const FeedbackSlide = ({ slide }) => {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <TextWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
    >
      <SlideHeaderWrapper>
        <Line
          initial={{ opacity: 0, scaleX: 0, originX: 0 }}
          animate={{ opacity: 1, scaleX: 1, originX: 0 }}
          exit={{ opacity: 0, originX: 1 }}
          transition={{ delay: 0.28, duration: 0.3 }}
        />
        <motion.div>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={slide.linkToClientPage}
            onMouseEnter={() => {
              dispatchCursor({
                type: "CHANGE_CURSOR_TYPE",
                cursorType: CURSOR_TYPES.FULL_CURSOR,
              })
              dispatchCursor({
                type: "CHANGE_CURSOR_SIZE",
                cursorSize: CURSOR_SIZES.BIGGER,
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
          >
            <TextStyles
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="400"
              lineHeight="1.38"
              initial={{ opacity: 0, y: 2, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(3px)" }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {slide.clientName}
            </TextStyles>
          </a>
        </motion.div>
      </SlideHeaderWrapper>
      <TextStyles
        fontFamily="Poppins"
        fontSize="28px"
        fontWeight="400"
        lineHeight="1.5"
        slideText
        color="var(--black-font)"
        declaredMargin="36px 0 0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.5,
          ease: [0.5, -0.04, 0.36, 0.93],
        }}
      >
        {toPlainText(slide.feedback)}
      </TextStyles>
    </TextWrapper>
  )
}

export default FeedbackSlide
