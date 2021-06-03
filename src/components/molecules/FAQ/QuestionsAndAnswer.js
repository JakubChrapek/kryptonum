import React from "react"

import QuestionAndAnswerElement from "./QuestionAndAnswerElement/QuestionAndAnswerElement"
import { StyledQuestionsAndAnswerWrapper } from "../../atoms/FAQ/StyledQuestionsAndAnswer"

function QuestionsAndAnswer({ faqItems }) {
  return (
    <StyledQuestionsAndAnswerWrapper>
      {faqItems.map(item => (
        <QuestionAndAnswerElement
          question={item.faqPytanie}
          answer={item.faqOdpowiedz}
        />
      ))}
    </StyledQuestionsAndAnswerWrapper>
  )
}

export default QuestionsAndAnswer
