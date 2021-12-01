import React, { useState } from "react"
import { motion } from "framer-motion"
import { StructuredText } from "react-datocms"

import { StyledQuestionAndAnswerElement } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledQuestionAndAnswerElement"
import { StyledAddIcon } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledAddIcon"
import { StyledAddIconSpan } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledAddIconSpan"
import { StyledQuestion } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledQuestion"
import { StyledQuestionAndAnswerElementDiv } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledQuestionAndAnswerElementDiv"
import { TextStyles } from "../../../atoms/Text/Text"
import { AnswerText } from "./AnswerText"

import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TEXT,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../../contexts/cursorContext"

const QuestionAndAnswerElement = ({
  initiallyOpened,
  variant,
  question,
  answer,
}) => {
  const [openAnswer, setOpenAnswer] = useState(initiallyOpened ? true : false)
  const dispatchCursor = useCursorDispatchContext()
  const handleOnMouseEnterForQuestion = () => {
    openAnswer
      ? dispatchCursor({
          type: "CHANGE_CURSOR_TEXT",
          cursorText: CURSOR_TEXT.COLLAPSE,
        })
      : dispatchCursor({
          type: "CHANGE_CURSOR_TEXT",
          cursorText: CURSOR_TEXT.EXPAND,
        })
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.OUTLINED_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.HUGE,
    })
  }
  const handleOnMouseEnterForIcon = () => {
    openAnswer
      ? dispatchCursor({
          type: "CHANGE_CURSOR_TEXT",
          cursorText: CURSOR_TEXT.COLLAPSE,
        })
      : dispatchCursor({
          type: "CHANGE_CURSOR_TEXT",
          cursorText: CURSOR_TEXT.EXPAND,
        })
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.OUTLINED_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.HUGE,
    })
  }
  const handleOnMouseLeave = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.SMALLER,
    })
  }

  return (
    <StyledQuestionAndAnswerElement>
      <StyledQuestionAndAnswerElementDiv
        onClick={() => {
          setOpenAnswer(prevState => !prevState)
          dispatchCursor({
            type: "CHANGE_CURSOR_TEXT",
            cursorText: openAnswer ? CURSOR_TEXT.EXPAND : CURSOR_TEXT.COLLAPSE,
          })
        }}
      >
        <StyledQuestion
          variant={variant}
          onMouseEnter={handleOnMouseEnterForQuestion}
          onMouseLeave={handleOnMouseLeave}
        >
          <StructuredText data={question} />
        </StyledQuestion>
        <StyledAddIcon
          variant={variant}
          open={openAnswer}
          onMouseEnter={handleOnMouseEnterForIcon}
          onMouseLeave={handleOnMouseLeave}
        >
          <StyledAddIconSpan open={openAnswer}></StyledAddIconSpan>
        </StyledAddIcon>
      </StyledQuestionAndAnswerElementDiv>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          openAnswer
            ? { height: "100%", opacity: 1 }
            : { height: "0", opacity: 0 }
        }
        transition={{ ease: "circOut", duration: 0.2 }}
        style={{ pointerEvents: "none" }}
      >
        <AnswerText
          variant={variant}
          fontSize="16px"
          fontFamily="Poppins"
          lineHeight="1.88"
          color="var(--dark-bg)"
          declaredpadding="0 0 44px 14px"
        >
          <StructuredText data={answer} />
        </AnswerText>
      </motion.div>
    </StyledQuestionAndAnswerElement>
  )
}

export default QuestionAndAnswerElement
