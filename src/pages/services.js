import { graphql } from "gatsby"
import React from "react"

import HeroContent from "../components/molecules/HeroContent/HeroContent"
import HeroImage from "../components/molecules/HeroImage/HeroImage"
import WhatWeDo from "../components/molecules/Services/WhatWeDo"

const Services = ({ data }) => {
  const { heroImage } = data.datoCmsPageService
  return (
    <div>
      <HeroContent content="Good design<br/>makes life better" />
      <HeroImage image={heroImage} />
      <WhatWeDo imagesData={data.datoCmsPageService} />
    </div>
  )
}

export const query = graphql`
  query serviceImages {
    datoCmsPageService {
      heroImage {
        gatsbyImageData(width: 920, placeholder: BLURRED, forceBlurhash: false)
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
