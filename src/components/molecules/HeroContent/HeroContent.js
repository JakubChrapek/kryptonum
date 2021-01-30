import React from "react"

import { StyledHeroWrapper } from "../../atoms/HeroContent/StyledHeroWrapper"
import { StyledHeroSection } from "../../atoms/HeroContent/StyledHeroSection"
import { StyledHeroContentH1 } from "../../atoms/HeroContent/StyledHeroContentH1"

const HeroContent = ({ content }) => {
  return (
    <StyledHeroSection>
      <StyledHeroWrapper>
        <StyledHeroContentH1>{content}</StyledHeroContentH1>
      </StyledHeroWrapper>
    </StyledHeroSection>
  )
}

export default HeroContent
