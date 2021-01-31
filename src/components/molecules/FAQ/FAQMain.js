import React from "react"
import QuestionsAndAnswer from "./QuestionsAndAnswer"

import { StyledFAQMain } from "../../atoms/FAQ/StyledFAQMain"
import { StyledFAQH1 } from "../../atoms/FAQ/StyledFAQH1"
import { StyledFAQWrapper } from "../../atoms/FAQ/StyledFAQWrapper"

const FAQMain = () => {
  return (
    <StyledFAQMain>
      <StyledFAQWrapper>
        <div>
          <StyledFAQH1>Frequently Asked Questions</StyledFAQH1>
        </div>
        <QuestionsAndAnswer />
      </StyledFAQWrapper>
    </StyledFAQMain>
  )
}

export default FAQMain
