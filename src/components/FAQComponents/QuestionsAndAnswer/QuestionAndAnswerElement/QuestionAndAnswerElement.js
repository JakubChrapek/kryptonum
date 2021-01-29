import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  StyledQuestionAndAnswerElement,
  StyledQuestion,
  StyledAnswer,
  AddIcon,
} from "./StyledQuestionAndAnswerElement"

const QuestionAndAnswerElement = ({ question, answer }) => {
  const [openAnswer, setOpenAnswer] = useState(false)

  return (
    <StyledQuestionAndAnswerElement>
      <div>
        <StyledQuestion>{question}</StyledQuestion>
        <AddIcon open={openAnswer} onClick={() => setOpenAnswer(!openAnswer)}>
          <span></span>
        </AddIcon>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          openAnswer
            ? { height: "100%", opacity: 1 }
            : { height: "0", opacity: 0 }
        }
        transition={{ ease: "easeOut", duration: 0.1 }}
      >
        <StyledAnswer>{answer}</StyledAnswer>
      </motion.div>
    </StyledQuestionAndAnswerElement>
  )
}

export default QuestionAndAnswerElement
