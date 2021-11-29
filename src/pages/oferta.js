import React from "react"
import website from "../../config/website"
import OfferHeroSection from "../components/organisms/OfferHeroSection/OfferHeroSection"
import SEO from "../components/SEO/SEO"
import { graphql } from "gatsby"

const Oferta = ({ data }) => {
  const {
    seoMetaTags,
    ofertaHeroClaim,
    offerHeroButtonText,
    ofertaHeroNaglowek,
    ofertaHeroImage: { gatsbyImageData },
  } = data?.datoCmsPageOffer
  return (
    <div id={website.skipNavId} style={{ backgroundColor: "var(--white)" }}>
      <SEO meta={seoMetaTags} />
      <OfferHeroSection
        headerText={ofertaHeroNaglowek}
        claimText={ofertaHeroClaim}
        btnText={offerHeroButtonText}
        heroImage={gatsbyImageData}
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
    }
  }
`

export default Oferta
