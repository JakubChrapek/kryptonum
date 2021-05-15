import React from "react"

import QuestionAndAnswerElement from "./QuestionAndAnswerElement/QuestionAndAnswerElement"
import { StyledQuestionsAndAnswerWrapper } from "../../atoms/FAQ/StyledQuestionsAndAnswer"

function QuestionsAndAnswer({ faqItems }) {
  return (
    <StyledQuestionsAndAnswerWrapper>
      {faqItems.map(item => (
        <QuestionAndAnswerElement
          question={item.faqQuestion}
          answer={item.faqAnswer}
        />
      ))}
    </StyledQuestionsAndAnswerWrapper>
  )
}

export default QuestionsAndAnswer
