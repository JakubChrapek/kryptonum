import React from "react"
import QuestionsAndAnswer from "./QuestionsAndAnswer"

import { StyledFAQMain } from "../../atoms/FAQ/StyledFAQMain"
import { StyledFAQH1 } from "../../atoms/FAQ/StyledFAQH1"
import { StyledFAQWrapper } from "../../atoms/FAQ/StyledFAQWrapper"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

const FAQMain = ({ faqItems }) => {
  const dispatchCursor = useCursorDispatchContext()

  return (
    <StyledFAQMain>
      <StyledFAQWrapper>
        <div>
          <StyledFAQH1>Frequently Asked Questions</StyledFAQH1>
        </div>
        <QuestionsAndAnswer faqItems={faqItems} />
      </StyledFAQWrapper>
    </StyledFAQMain>
  )
}

export default FAQMain
