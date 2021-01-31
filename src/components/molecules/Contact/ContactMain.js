import React from "react"

import ContactForm from "./ContactForm/ContactForm"

import { StyledContactFormWrapper } from "../../atoms/Contact/StyledContactFormWrapper"
import { StyledContactFormWrapperDiv } from "../../atoms/Contact/StyledContactFormWrapperDiv"
import { StyledContactInfo } from "../../atoms/Contact/StyledContactInfo"
import { StyledContactInfoList } from "../../atoms/Contact/StyledContactInfoList"
import { StyledContactInfoP } from "../../atoms/Contact/StyledContactInfoP"
import { StyledContactSection } from "../../atoms/Contact/StyledContactSection"
import { StyledContactTextWrapper } from "../../atoms/Contact/StyledContactTextWrapper"
import { StyledContactTextWrapperH1 } from "../../atoms/Contact/StyledContactTextWrapperH1"

const ContactMain = () => {
  return (
    <StyledContactSection>
      <StyledContactTextWrapper>
        <StyledContactTextWrapperH1>
          Let’s start something <br /> Great together
        </StyledContactTextWrapperH1>
      </StyledContactTextWrapper>
      <StyledContactFormWrapper>
        <StyledContactFormWrapperDiv>
          <ContactForm />
          <StyledContactInfo>
            <StyledContactInfoP>
              If you want to talk about design:
            </StyledContactInfoP>
            <StyledContactInfoList>
              <li>Maciej</li>
              <li>+48 725 373 508</li>
              <li>maciej@kryptonumstudio.com</li>
            </StyledContactInfoList>

            <StyledContactInfoP>
              Or about how the internet works
            </StyledContactInfoP>
            <StyledContactInfoList>
              <li>Jacob</li>
              <li>+48 883 736 548</li>
              <li>kuba@kryptonumstudio.com</li>
            </StyledContactInfoList>

            <StyledContactInfoP>
              You can find us here, but rarely 😉
            </StyledContactInfoP>
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
