import React from "react"

import { StyledHeroWrapper } from "../../atoms/HeroContent/StyledHeroWrapper"
import { StyledHeroSection } from "../../atoms/HeroContent/StyledHeroSection"
import { StyledHeroContentH1 } from "../../atoms/HeroContent/StyledHeroContentH1"

const HeroContent = ({ content, variant }) => {
  return (
    <StyledHeroSection>
      <StyledHeroWrapper variant={variant}>
        <StyledHeroContentH1
          fontSize="76px"
          fontFamily="Poppins"
          lineHeight="1.5"
          color="var(--black)"
          variant={variant}
        >
          {content}
        </StyledHeroContentH1>
      </StyledHeroWrapper>
    </StyledHeroSection>
  )
}

export default HeroContent
