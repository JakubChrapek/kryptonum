import React from "react"
import website from "../../config/website"
import OfferHeroSection from "../components/organisms/OfferHeroSection/OfferHeroSection"
import SEO from "../components/SEO/SEO"
import { graphql } from "gatsby"
import OfferWhyUsSection from "../components/organisms/OfferWhyUsSection/OfferWhyUsSection"
import OfferHorizontalImageSection from "../components/organisms/OfferHorizontalImageSection/OfferHorizontalImageSection"
import OfferHowCanWeHelpSection from "../components/organisms/OfferHowCanWeHelpSection/OfferHowCanWeHelpSection"
import FeedbackFrom from "../components/molecules/FeedbackFrom/FeedbackFrom"

const Oferta = ({ data }) => {
  const {
    seoMetaTags,
    ofertaHeroClaim,
    offerHeroButtonText,
    ofertaHeroNaglowek,
    ofertaHeroImage: { gatsbyImageData },
    firstColumnItems,
    secondColumnItems,
    wideImage,
    ofertaWideImageMobile,
  } = data?.datoCmsPageOffer
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
        heroImage={gatsbyImageData}
      />
      <OfferWhyUsSection
        mainParagraph=""
        firstColumnItems={firstColumnItems}
        secondColumnItems={secondColumnItems}
      />
      <OfferHorizontalImageSection data={horizontalImages} />
      <OfferHowCanWeHelpSection />
      <FeedbackFrom feedbackTytul={feedbackTytul} />
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
  }
`

export default Oferta
