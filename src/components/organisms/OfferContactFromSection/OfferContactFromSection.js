import React from "react"
import ContactForm from "../../molecules/Contact/ContactForm/ContactForm"
import website from "../../../../config/website"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const Wrapper = styled.section`
  background-color: var(--white);
  width: 100%;
`

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: clamp(76px, 9.75vw, 144px) clamp(36px, 7.77vw, 112px);
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    max-width: 768px;
    padding: 76px clamp(16px, 4.68vw, 36px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media (max-width: 640px) {
    padding: 48px 16px;
  }

  > .gatsby-image-wrapper {
    flex: 1 1 40%;
    margin: 18px 0;

    @media (max-width: 1024px) {
      width: calc(100% - clamp(24px, 4.5vw, 47px));
      margin-bottom: 56px;
      order: -1;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
`
const TextContainer = styled.div`
  flex: 1 1 60%;
  padding-right: clamp(80px, 9.88vw, 144px);
  @media (max-width: 1024px) {
    padding-right: 0;
    width: 100%;
  }
`

const FormQuestion = styled.p``

const CtaText = styled.p``

const OfferContactFromSection = ({
  contactPageNameLabel,
  contactPageButtonText,
  contactPageNamePlaceholder,
  contactPageEmailLabel,
  contactPageEmailPlaceholder,
  contactPageMessageLabel,
  contactPageMessagePlaceholder,
  contactPagePrivacyText,
  contactFormImage,
}) => {
  return (
    <Wrapper>
      <Container>
        <TextContainer>
          <FormQuestion>
            Chcesz mieć stroną internetową, której zazdrości nawet konkurencja?
          </FormQuestion>
          <CtaText>
            Wypełnij formularz zgłoszeniowy i umów się na bezpłatną rozmowę
          </CtaText>
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
        </TextContainer>
        <GatsbyImage image={contactFormImage} />
      </Container>
    </Wrapper>
  )
}

export default OfferContactFromSection
