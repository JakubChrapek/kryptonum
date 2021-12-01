import React from "react"

import QuestionAndAnswerElement from "./QuestionAndAnswerElement/QuestionAndAnswerElement"
import { StyledQuestionsAndAnswerWrapper } from "../../atoms/FAQ/StyledQuestionsAndAnswer"

function QuestionsAndAnswer({ variant, faqItems }) {
  return (
    <StyledQuestionsAndAnswerWrapper variant={variant}>
      {faqItems.map((item, iterator) => (
        <QuestionAndAnswerElement
          initiallyOpened={iterator === 0}
          variant={variant}
          question={item.faqPytanie}
          answer={item.faqOdpowiedz}
        />
      ))}
    </StyledQuestionsAndAnswerWrapper>
  )
}

export default QuestionsAndAnswer
