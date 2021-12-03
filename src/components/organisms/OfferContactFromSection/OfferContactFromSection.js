import React from "react"
import ContactForm from "../../molecules/Contact/ContactForm/ContactForm"
import website from "../../../../config/website"
import styled from "styled-components"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import {
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

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
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: 768px;
    padding: 76px clamp(16px, 4.68vw, 36px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media (max-width: 640px) {
    padding: 80px 16px 48px;
  }

  > .gatsby-image-wrapper {
    overflow: hidden;
    flex: 1 1 60%;
    margin-left: clamp(16px, 2.29vw, 33px);
    img,
    picture {
      object-fit: contain !important;
    }
    @media (max-width: 1024px) {
      width: clamp(327px, 75.5vw, 583px);
      margin-left: 0;
      margin-right: calc(-1 * clamp(80px, 18.8vw, 145px));
      margin-bottom: 27px;
      order: -1;
    }
    @media (max-width: 640px) {
      margin-bottom: 32px;
      margin-right: 0;
      margin-left: 0;
      width: 100%;
    }
  }
`
const TextContainer = styled.div`
  flex: 1 1 48%;
  /* padding-right: clamp(24px, 2.29vw, 33px); */
  @media (max-width: 1024px) {
    padding-right: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const FormQuestion = styled.p`
  font-size: clamp(22px, 2.5vw, 32px);
  line-height: 1.5;
  font-weight: 600;
  color: var(--off-black);
  @media (max-width: 1024px) {
    font-size: 34px;
    text-align: center;
    max-width: 551px;
  }
  @media (max-width: 640px) {
    font-size: clamp(20px, 7.5vw, 28px);
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
  formImageTablet,
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
  const dispatchCursor = useCursorDispatchContext()

  const images = withArtDirection(getImage(formImageDesktop), [
    {
      media: "(max-width: 640px)",
      image: getImage(formImageMobile),
    },
    {
      media: "(max-width: 1024px)",
      image: getImage(formImageTablet),
    },
  ])

  const handleSendForm = data => {
    if (typeof window !== "undefined") {
      // window.gtag("conversion", "click", {
      //   send_to: `${process.env.G_KRYPTONUM_AW_ID}/${process.env.G_KRYPTONUM_AW_LABEL}`,
      //   formName: "formularz-oferta",
      //   category: "contact",
      //   conversionName: "kontakt",
      //   ...data,
      // })
      window.gtag("conversion", "click", {
        send_to: [
          `${process.env.G_KRYPTONUM_AW_ID}/${process.env.G_KRYPTONUM_AW_LABEL}`,
        ],
      })

      return false
    }
  }

  return (
    <Wrapper
      onMouseEnter={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.FULL_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.SMALLER,
        })
      }}
    >
      <Container>
        <TextContainer>
          <FormQuestion>
            Chcesz mieć stronę internetową, której zazdrości konkurencja?
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
