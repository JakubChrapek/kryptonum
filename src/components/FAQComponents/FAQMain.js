import React from "react"
import QuestionsAndAnswer from "./QuestionsAndAnswer/QuestionsAndAnswer"
import { StyledFAQMain, StyledFAQWrapper, StytledFAQH1 } from "./StyledFAQMain"

const FAQMain = () => {
  return (
    <StyledFAQMain>
      <StyledFAQWrapper>
        <div>
          <StytledFAQH1>Frequently Asked Questions</StytledFAQH1>
        </div>
        <QuestionsAndAnswer />
      </StyledFAQWrapper>
    </StyledFAQMain>
  )
}

export default FAQMain
