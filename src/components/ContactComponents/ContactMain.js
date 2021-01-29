import React from "react"

import {
  ContactFormWrapper,
  StyledContactInfo,
  ContactSection,
  ContactTextWrapper,
  StyledContactInfoList,
} from "./StyledContactMain"
import ContactForm from "./ContactForm/ContactForm"

const ContactMain = () => {
  return (
    <ContactSection>
      <ContactTextWrapper>
        <h1>
          Let’s start something <br /> Great together
        </h1>
      </ContactTextWrapper>
      <ContactFormWrapper>
        <div>
          <ContactForm />
          <StyledContactInfo>
            <p>If you want to talk about design:</p>
            <StyledContactInfoList>
              <li>Maciej</li>
              <li>+48 725 373 508</li>
              <li>maciej@kryptonumstudio.com</li>
            </StyledContactInfoList>

            <p>Or about how the internet works</p>
            <StyledContactInfoList>
              <li>Jacob</li>
              <li>+48 883 736 548</li>
              <li>kuba@kryptonumstudio.com</li>
            </StyledContactInfoList>

            <p>You can find us here, but rarely 😉</p>
            <StyledContactInfoList>
              <li>Aleja Komisji Edukacji Narodowej</li>
              <li>Warsaw</li>
            </StyledContactInfoList>
          </StyledContactInfo>
        </div>
      </ContactFormWrapper>
    </ContactSection>
  )
}

export default ContactMain
