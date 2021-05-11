import React, { useState } from "react"
import { motion } from "framer-motion"

import { StyledQuestionAndAnswerElement } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledQuestionAndAnswerElement"
import { StyledAddIcon } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledAddIcon"
import { StyledAddIconSpan } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledAddIconSpan"
import { StyledQuestion } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledQuestion"
import { StyledQuestionAndAnswerElementDiv } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledQuestionAndAnswerElementDiv"
import { TextStyles } from "../../../atoms/Text/Text"

import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../../contexts/cursorContext"

const QuestionAndAnswerElement = ({ question, answer }) => {
  const [openAnswer, setOpenAnswer] = useState(false)
  const dispatchCursor = useCursorDispatchContext()
  const handleOnMouseEnterForQuestion = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.OUTLINED_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.DARK_TRANSPARENT,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.BIGGER,
    })
  }
  const handleOnMouseEnterForIcon = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.OUTLINED_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.ACCENT_TRANSPARENT,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.BIGGER,
    })
  }
  const handleOnMouseLeave = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.DARK,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.SMALLER,
    })
  }

  return (
    <StyledQuestionAndAnswerElement>
      <StyledQuestionAndAnswerElementDiv
        onClick={() => setOpenAnswer(!openAnswer)}
      >
        <StyledQuestion
          onMouseEnter={handleOnMouseEnterForQuestion}
          onMouseLeave={handleOnMouseLeave}
        >
          {question}
        </StyledQuestion>
        <StyledAddIcon
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
        <TextStyles
          fontSize="16px"
          fontFamily="Poppins"
          lineHeight="1.88"
          color="var(--dark-bg)"
          declaredPadding="0 0 44px 14px"
        >
          {answer}
        </TextStyles>
      </motion.div>
    </StyledQuestionAndAnswerElement>
  )
}

export default QuestionAndAnswerElement
