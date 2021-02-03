import React from "react"

import ContactForm from "./ContactForm/ContactForm"

import { StyledContactFormWrapper } from "../../atoms/Contact/StyledContactFormWrapper"
import { StyledContactFormWrapperDiv } from "../../atoms/Contact/StyledContactFormWrapperDiv"
import { StyledContactInfo } from "../../atoms/Contact/StyledContactInfo"
import { StyledContactInfoList } from "../../atoms/Contact/StyledContactInfoList"
import { StyledContactSection } from "../../atoms/Contact/StyledContactSection"
import { StyledContactTextWrapper } from "../../atoms/Contact/StyledContactTextWrapper"
import { StyledContactTextWrapperH1 } from "../../atoms/Contact/StyledContactTextWrapperH1"
import { TextStyles } from "../../atoms/Text/Text"

const ContactMain = () => {
  return (
    <StyledContactSection>
      <StyledContactTextWrapper>
        <StyledContactTextWrapperH1
          fontFamily="Poppins"
          fontSize="76px"
          lineHeight="1.3"
          color="var(--black)"
        >
          Let’s start something <br /> Great together
        </StyledContactTextWrapperH1>
      </StyledContactTextWrapper>
      <StyledContactFormWrapper>
        <StyledContactFormWrapperDiv>
          <ContactForm />
          <StyledContactInfo>
            <TextStyles
              declaredPadding="0 0 24px 0"
              fontFamily="Poppins"
              fontSize="16px"
              lineHeight="1.38"
              color="var(--dark-bg)"
            >
              If you want to talk about design:
            </TextStyles>
            <StyledContactInfoList>
              <li>Maciej</li>
              <li>+48 725 373 508</li>
              <li>maciej@kryptonumstudio.com</li>
            </StyledContactInfoList>

            <TextStyles
              declaredPadding="0 0 24px 0"
              fontFamily="Poppins"
              fontSize="16px"
              lineHeight="1.38"
              color="var(--dark-bg)"
            >
              Or about how the internet works
            </TextStyles>
            <StyledContactInfoList>
              <li>Jacob</li>
              <li>+48 883 736 548</li>
              <li>kuba@kryptonumstudio.com</li>
            </StyledContactInfoList>

            <TextStyles
              declaredPadding="0 0 24px 0"
              fontFamily="Poppins"
              fontSize="16px"
              lineHeight="1.38"
              color="var(--dark-bg)"
            >
              You can find us here, but rarely 😉
            </TextStyles>
            <StyledContactInfoList>
              <li>Aleja Komisji Edukacji Narodowej</li>
              <li>Warsaw</li>
            </StyledContactInfoList>
          </StyledContactInfo>
        </StyledContactFormWrapperDiv>
      </StyledContactFormWrapper>
    </StyledContactSection>
  )
}

export default ContactMain
