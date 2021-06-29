import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import HeroContent from "../components/molecules/HeroContent/HeroContent"
import HeroImage from "../components/molecules/HeroImage/HeroImage"
import WhatWeDo from "../components/molecules/Services/WhatWeDo"

const PageWrapper = styled.div`
  background-color: var(--white);
`
const Services = ({ data }) => {
  const {
    datoCmsPageService: {
      heroImage,
      heroTytul: heroTitle,
      coRobimyTytul: whatWeDoTitle,
      coRobimyAkapit: whatWeDoParagraph,
      stronyInternetoweTytul: websitesTitle,
      stronyInternetoweAkapit: websitesParagraph,
      marketingTytul: marketingTitle,
      marketingAkapit: marketingParagraph,
      strategiaTytul: strategyTitle,
      strategiaAkapit: strategyParagraph,
    },
  } = data
  return (
    <PageWrapper>
      <HeroContent content={heroTitle} />
      <HeroImage heroBgImg={heroImage} />
    </PageWrapper>
  )
}

export const query = graphql`
  query serviceData {
    datoCmsPageService {
      heroImage {
        gatsbyImageData(width: 920, placeholder: BLURRED, forceBlurhash: false)
      }
      heroTytul {
        value
      }
      coRobimyTytul
      coRobimyAkapit {
        value
      }
      stronyInternetoweTytul {
        value
      }
      stronyInternetoweAkapit {
        value
      }
      marketingTytul {
        value
      }
      marketingAkapit {
        value
      }
      strategiaTytul {
        value
      }
      strategiaAkapit {
        value
      }

      designImage {
        gatsbyImageData(width: 600, placeholder: BLURRED, forceBlurhash: false)
      }
      strategyImage {
        gatsbyImageData(width: 600, placeholder: BLURRED, forceBlurhash: false)
      }
      marketingImage {
        gatsbyImageData(width: 600, placeholder: BLURRED, forceBlurhash: false)
      }
      developmentImage {
        gatsbyImageData(width: 600, placeholder: BLURRED, forceBlurhash: false)
      }
    }
  }
`

export default Services
