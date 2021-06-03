import React from "react"
import QuestionsAndAnswer from "./QuestionsAndAnswer"
import { StructuredText } from "react-datocms"

import { StyledFAQMain } from "../../atoms/FAQ/StyledFAQMain"
import { StyledFAQH1 } from "../../atoms/FAQ/StyledFAQH1"
import { StyledFAQWrapper } from "../../atoms/FAQ/StyledFAQWrapper"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import website from "../../../../config/website"

const FAQMain = ({ faqTitle, faqItems }) => {
  const dispatchCursor = useCursorDispatchContext()

  return (
    <StyledFAQMain id={website.skipNavId}>
      <StyledFAQWrapper>
        <div>
          <StyledFAQH1>
            <StructuredText data={faqTitle} />
          </StyledFAQH1>
        </div>
        <QuestionsAndAnswer faqItems={faqItems} />
      </StyledFAQWrapper>
    </StyledFAQMain>
  )
}

export default FAQMain
