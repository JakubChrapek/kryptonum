import React from "react"
import ContactForm from "../../molecules/Contact/ContactForm/ContactForm"
import website from "../../../../config/website"
import styled from "styled-components"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

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
      margin-bottom: 27px;
      order: -1;
    }
    @media (max-width: 640px) {
      margin-bottom: 48px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const FormQuestion = styled.p`
  font-size: clamp(28px, 2.5vw, 36px);
  line-height: 1.5;
  font-weight: 600;
  color: var(--off-black);
  @media (max-width: 1024px) {
    font-size: 36px;
    text-align: center;
    max-width: 551px;
  }
  @media (max-width: 640px) {
    font-size: 24px;
  }
`

const CtaText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: var(--off-black);
  margin: 8px 0 16px;
  @media (max-width: 1024px) {
    text-align: center;
    margin: 8px 0 48px;
  }
  @media (max-width: 640px) {
    margin: 8px 0 24px;
  }
`

const OfferContactFromSection = ({
  variant,
  formName,
  formImageDesktop,
  formImageMobile,
  contactPageNameLabel,
  contactPageButtonText,
  contactPageNamePlaceholder,
  contactPageEmailLabel,
  contactPageEmailPlaceholder,
  contactPageMessageLabel,
  contactPageMessagePlaceholder,
  contactPagePrivacyText,
}) => {
  const images = withArtDirection(getImage(formImageDesktop), [
    {
      media: "(max-width: 640px)",
      image: getImage(formImageMobile),
    },
  ])

  const handleSendForm = data => {
    if (typeof window !== "undefined") {
      window.gtag("event", "conversion", {
        send_to: `${process.env.G_KRYPTONUM_AW_ID}/${process.env.G_KRYPTONUM_AW_LABEL}`,
        ...data,
      })
      return false
    }
  }

  return (
    <Wrapper>
      <Container>
        <TextContainer>
          <FormQuestion>
            Chcesz mieć stronę internetową, której zazdrości nawet konkurencja?
          </FormQuestion>
          <CtaText>
            Wypełnij formularz zgłoszeniowy i umów się na bezpłatną rozmowę
          </CtaText>
          <ContactForm
            id={website.skipNavId}
            name={formName}
            variant={variant}
            handleSendForm={handleSendForm}
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
        <GatsbyImage image={images} />
      </Container>
    </Wrapper>
  )
}

export default OfferContactFromSection
