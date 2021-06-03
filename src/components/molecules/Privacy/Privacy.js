import React from "react"
import { StructuredText } from "react-datocms"

import { StyledPrivacyHeaderTextWrapper } from "../../atoms/Privacy/StyledPrivacyHeaderTextWrapper"
import { StyledPrivacyHeaderTextWrapperH1 } from "../../atoms/Privacy/StyledPrivacyHeaderTextWrapperH1"
import { StyledPrivacyMain } from "../../atoms/Privacy/StyledPrivacyMain"
import { StyledPrivacyMainTextWrapper } from "../../atoms/Privacy/StyledPrivacyMainTextWrapper"
import { StyledPrivacyPolicyWrapper } from "../../atoms/Privacy/StyledPrivacyPolicyWrapper"

import { TextStyles } from "../../atoms/Text/Text"

const Privacy = ({ title, content }) => {
  return (
    <StyledPrivacyPolicyWrapper>
      <StyledPrivacyHeaderTextWrapper>
        <StyledPrivacyHeaderTextWrapperH1
          fontFamily="Poppins"
          fontSize="76px"
          lineHeight="1.3"
          color="var(--black)"
        >
          <StructuredText data={title} />
        </StyledPrivacyHeaderTextWrapperH1>
      </StyledPrivacyHeaderTextWrapper>
      <StyledPrivacyMain>
        <StyledPrivacyMainTextWrapper>
          <TextStyles
            fontFamily="Poppins"
            fontSize="16px"
            lineHeight="1.38"
            color="var(--dark-bg)"
            declaredpadding="0 0 80px 0"
          >
            <StructuredText data={content} />
          </TextStyles>
        </StyledPrivacyMainTextWrapper>
      </StyledPrivacyMain>
    </StyledPrivacyPolicyWrapper>
  )
}

export default Privacy
