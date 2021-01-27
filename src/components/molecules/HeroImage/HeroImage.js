import React from "react"

import { HeroImageWrapper } from "./StyledHeroImage"

const HeroImage = ({ image }) => {
  return (
    <HeroImageWrapper>
      <img src={image} />
    </HeroImageWrapper>
  )
}

export default HeroImage
