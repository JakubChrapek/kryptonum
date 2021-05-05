import React from "react"
import { HeroImageWrapper } from "../../atoms/HeroImage/StyledHeroImage"

const HeroImage = ({ image, onMouseEnter }) => {
  return (
    <HeroImageWrapper onMouseEnter={onMouseEnter}>
      <img src={image} />
    </HeroImageWrapper>
  )
}

export default HeroImage
