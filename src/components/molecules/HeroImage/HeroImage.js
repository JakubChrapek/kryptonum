import React from "react"
import { HeroImageWrapper } from "../../atoms/HeroImage/StyledHeroImage"
import { GatsbyImage } from "gatsby-plugin-image"

const HeroImage = ({ image, onMouseEnter }) => {
  return (
    <HeroImageWrapper onMouseEnter={onMouseEnter}>
      <GatsbyImage image={image.gatsbyImageData} />
    </HeroImageWrapper>
  )
}

export default HeroImage
