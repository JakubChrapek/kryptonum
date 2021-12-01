import React from "react"
import website from "../../config/website"
import OfferHeroSection from "../components/organisms/OfferHeroSection/OfferHeroSection"
import SEO from "../components/SEO/SEO"
import { graphql } from "gatsby"
import OfferWhyUsSection from "../components/organisms/OfferWhyUsSection/OfferWhyUsSection"
import OfferHorizontalImageSection from "../components/organisms/OfferHorizontalImageSection/OfferHorizontalImageSection"
import OfferHowCanWeHelpSection from "../components/organisms/OfferHowCanWeHelpSection/OfferHowCanWeHelpSection"
import FeedbackFrom from "../components/molecules/FeedbackFrom/FeedbackFrom"
import OfferContactFromSection from "../components/organisms/OfferContactFromSection/OfferContactFromSection"
import OfferFaqSection from "../components/organisms/OfferFaqSection/OfferFaqSection"

const Oferta = ({ data }) => {
  const {
    seoMetaTags,
    ofertaHeroClaim,
    offerHeroButtonText,
    ofertaHeroNaglowek,
    ofertaHeroImage: { gatsbyImageData: heroDesktopImage },
    ofertaMobileHeroImage: { gatsbyImageData: heroMobileImage },
    formImage: { gatsbyImageData: formImageDesktop },
    formImageMobile: { gatsbyImageData: formImageMobile },
    firstColumnItems,
    secondColumnItems,
    wideImage,
    ofertaWideImageMobile,
  } = data?.datoCmsPageOffer

  const {
    formularzImieNadInputem: contactPageNameLabel,
    formularzTekstPrzycisku: contactPageButtonText,
    formularzImiePlaceholder: contactPageNamePlaceholder,
    formularzEmailNadInputem: contactPageEmailLabel,
    formularzEmailPlaceholder: contactPageEmailPlaceholder,
    formularzWiadomoscNadTextarea: contactPageMessageLabel,
    formularzWiadomoscPlaceholder: contactPageMessagePlaceholder,
    formularzZgodaNaPrzetwarzanieTekst: contactPagePrivacyText,
  } = data?.datoCmsPageContact

  const { faqItems } = data?.datoCmsPageFaq

  const { feedbackTytul: feedbackTytul } = data.datoCmsPageAbout

  const horizontalImages = {
    largeImage: wideImage.gatsbyImageData,
    smallImage: ofertaWideImageMobile.gatsbyImageData,
  }
  return (
    <div id={website.skipNavId} style={{ backgroundColor: "var(--white)" }}>
      <SEO meta={seoMetaTags} />
      <OfferHeroSection
        headerText={ofertaHeroNaglowek}
        claimText={ofertaHeroClaim}
        btnText={offerHeroButtonText}
        heroDesktopImage={heroDesktopImage}
        heroMobileImage={heroMobileImage}
      />
      <OfferWhyUsSection
        mainParagraph=""
        firstColumnItems={firstColumnItems}
        secondColumnItems={secondColumnItems}
      />
      <OfferHorizontalImageSection data={horizontalImages} />
      <OfferHowCanWeHelpSection />
      <FeedbackFrom variant="offer" feedbackTytul={feedbackTytul} />
      <OfferContactFromSection
        id={website.skipNavId}
        variant="offer"
        formName="Formularz – oferta"
        formImageDesktop={formImageDesktop}
        formImageMobile={formImageMobile}
        contactPageNameLabel={contactPageNameLabel}
        contactPageButtonText={contactPageButtonText}
        contactPageNamePlaceholder={contactPageNamePlaceholder}
        contactPageEmailLabel={contactPageEmailLabel}
        contactPageEmailPlaceholder={contactPageEmailPlaceholder}
        contactPageMessageLabel={contactPageMessageLabel}
        contactPageMessagePlaceholder={contactPageMessagePlaceholder}
        contactPagePrivacyText={contactPagePrivacyText}
      />
      <OfferFaqSection
        faqSubheader="Sekcja FAQ"
        faqQuestion="Nie jesteś pewny, czy chcesz stronę, której zazdrości nawet konkurencja?"
        faqCta="Rozwiejemy twoje wątpliwości najczęściej zadawanymi pytaniami"
        faqItems={faqItems}
      />
    </div>
  )
}

export const query = graphql`
  query offerQuery {
    datoCmsPageOffer {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      ofertaHeroClaim {
        value
      }
      offerHeroButtonText
      ofertaHeroNaglowek {
        value
      }
      ofertaHeroImage {
        gatsbyImageData
      }
      ofertaMobileHeroImage {
        gatsbyImageData
      }
      formImage {
        gatsbyImageData
      }
      formImageMobile {
        gatsbyImageData
      }
      firstColumnItems: ofertaWhyUs1stColumn {
        offerListItemTitle
        offerListItemText
      }
      secondColumnItems: ofertaWhyUs2ndColumn {
        offerListItemTitle
        offerListItemText
      }
      wideImage {
        gatsbyImageData
      }
      ofertaWideImageMobile {
        gatsbyImageData
      }
    }
    datoCmsPageAbout {
      feedbackTytul {
        value
      }
    }
    datoCmsPageContact {
      formularzImieNadInputem
      formularzTekstPrzycisku {
        value
      }
      formularzImiePlaceholder {
        value
      }
      formularzEmailNadInputem
      formularzEmailPlaceholder {
        value
      }
      formularzWiadomoscNadTextarea
      formularzWiadomoscPlaceholder {
        value
      }
      formularzZgodaNaPrzetwarzanieTekst {
        value
      }
    }
    datoCmsPageFaq {
      faqItems {
        faqPytanie {
          value
        }
        faqOdpowiedz {
          value
        }
      }
    }
  }
`

export default Oferta
