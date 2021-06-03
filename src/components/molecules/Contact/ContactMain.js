import React from "react"
import { StructuredText } from "react-datocms"

import ContactForm from "./ContactForm/ContactForm"

import { StyledContactFormWrapper } from "../../atoms/Contact/StyledContactFormWrapper"
import { StyledContactFormWrapperDiv } from "../../atoms/Contact/StyledContactFormWrapperDiv"
import { StyledContactInfo } from "../../atoms/Contact/StyledContactInfo"
import { StyledContactInfoList } from "../../atoms/Contact/StyledContactInfoList"
import { StyledContactSection } from "../../atoms/Contact/StyledContactSection"
import { StyledContactTextWrapper } from "../../atoms/Contact/StyledContactTextWrapper"
import { StyledContactTextWrapperH1 } from "../../atoms/Contact/StyledContactTextWrapperH1"
import { TextStyles } from "../../atoms/Text/Text"

import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import styled from "styled-components"
import website from "../../../../config/website"

const StyledLink = styled.a`
  color: #727272;
  text-decoration: none;
  font-family: "Poppins";
  font-weight: normal;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 1px;
    background-color: #727272;
    width: 100%;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  &:hover,
  &:active,
  &:focus {
    &:after {
      transform: scaleY(1);
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: 2px solid #727272;
  }
`

const ContactMain = ({
  contactPageTitle,
  contactPageNameLabel,
  contactPageButtonText,
  contactPageNamePlaceholder,
  contactPageEmailLabel,
  contactPageEmailPlaceholder,
  contactPageMessageLabel,
  contactPageMessagePlaceholder,
  contactPagePrivacyText,
  contactColumnFirstQuestion,
  contactColumnFirstContactDetails,
  contactColumnSecondQuestion,
  contactColumnSecondContactDetails,
  contactColumnFunnySentence,
  contactColumnLastAddress,
}) => {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <StyledContactSection>
      <StyledContactTextWrapper
        onPointerEnter={() => {
          dispatchCursor({
            type: "CHANGE_CURSOR_TYPE",
            cursorType: CURSOR_TYPES.FULL_CURSOR,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_COLOR",
            cursorColor: CURSOR_COLORS.DARK,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_SIZE",
            cursorSize: CURSOR_SIZES.SMALLER,
          })
        }}
      >
        <StyledContactTextWrapperH1
          fontFamily="Poppins"
          fontSize="76px"
          lineHeight="1.3"
          color="var(--black)"
        >
          <StructuredText data={contactPageTitle} />
        </StyledContactTextWrapperH1>
      </StyledContactTextWrapper>
      <StyledContactFormWrapper>
        <StyledContactFormWrapperDiv>
          <ContactForm
            id={website.skipNavId}
            contactPageNameLabel={contactPageNameLabel}
            contactPageButtonText={contactPageButtonText}
            contactPageNamePlaceholder={contactPageNamePlaceholder}
            contactPageEmailLabel={contactPageEmailLabel}
            contactPageEmailPlaceholder={contactPageEmailPlaceholder}
            contactPageMessageLabel={contactPageMessageLabel}
            contactPageMessagePlaceholder={contactPageMessagePlaceholder}
            contactPagePrivacyText={contactPagePrivacyText}
          />
          <StyledContactInfo>
            <StructuredText data={contactColumnFirstQuestion} />
            <StyledContactInfoList>
              <StructuredText data={contactColumnFirstContactDetails} />
            </StyledContactInfoList>
            <StructuredText data={contactColumnSecondQuestion} />
            <StyledContactInfoList>
              <StructuredText data={contactColumnSecondContactDetails} />
            </StyledContactInfoList>
            <StructuredText data={contactColumnFunnySentence} />
            <StyledContactInfoList>
              <StructuredText data={contactColumnLastAddress} />
            </StyledContactInfoList>
          </StyledContactInfo>
        </StyledContactFormWrapperDiv>
      </StyledContactFormWrapper>
    </StyledContactSection>
  )
}

export default ContactMain
