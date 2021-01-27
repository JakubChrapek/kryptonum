import React from "react"

import { HeroSection, Wrapper } from "./StyledHeroContent"

const HeroContent = ({ content }) => {
  return (
    <HeroSection>
      <Wrapper>
        <h1>{content}</h1>
      </Wrapper>
    </HeroSection>
  )
}

export default HeroContent
