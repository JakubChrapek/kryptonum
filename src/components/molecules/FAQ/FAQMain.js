import React from "react"
import QuestionsAndAnswer from "./QuestionsAndAnswer"
import { StructuredText } from "react-datocms"

import { StyledFAQMain } from "../../atoms/FAQ/StyledFAQMain"
import { StyledFAQH1 } from "../../atoms/FAQ/StyledFAQH1"
import { StyledFAQWrapper } from "../../atoms/FAQ/StyledFAQWrapper"
import website from "../../../../config/website"

const FAQMain = ({ faqTitle, faqItems, variant }) => {
  return (
    <StyledFAQMain id={website.skipNavId}>
      <StyledFAQWrapper>
        <div>
          <StyledFAQH1>
            <StructuredText data={faqTitle} />
          </StyledFAQH1>
        </div>
        <QuestionsAndAnswer variant={variant} faqItems={faqItems} />
      </StyledFAQWrapper>
    </StyledFAQMain>
  )
}

export default FAQMain
