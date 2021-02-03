import React, { useState } from "react"
import { motion } from "framer-motion"

import { StyledQuestionAndAnswerElement } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledQuestionAndAnswerElement"
import { StyledAddIcon } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledAddIcon"
import { StyledAddIconSpan } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledAddIconSpan"
import { StyledQuestion } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledQuestion"
import { StyledQuestionAndAnswerElementDiv } from "../../../atoms/FAQ/QuestionAndAnswerElement/StyledQuestionAndAnswerElementDiv"
import { TextStyles } from "../../../atoms/Text/Text"

const QuestionAndAnswerElement = ({ question, answer }) => {
  const [openAnswer, setOpenAnswer] = useState(false)

  return (
    <StyledQuestionAndAnswerElement>
      <StyledQuestionAndAnswerElementDiv>
        <StyledQuestion>{question}</StyledQuestion>
        <StyledAddIcon
          open={openAnswer}
          onClick={() => setOpenAnswer(!openAnswer)}
        >
          <StyledAddIconSpan></StyledAddIconSpan>
        </StyledAddIcon>
      </StyledQuestionAndAnswerElementDiv>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          openAnswer
            ? { height: "100%", opacity: 1 }
            : { height: "0", opacity: 0 }
        }
        transition={{ ease: "easeOut", duration: 0.1 }}
      >
        <TextStyles
          fontSize="16px"
          fontFamily="Poppins"
          lineHeight="1.88"
          color="var(--dark-bg)"
          declaredPadding="39px 0 0 0"
        >
          {answer}
        </TextStyles>
      </motion.div>
    </StyledQuestionAndAnswerElement>
  )
}

export default QuestionAndAnswerElement
