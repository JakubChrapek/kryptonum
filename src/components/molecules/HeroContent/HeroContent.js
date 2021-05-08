import React from "react"

import { StyledHeroWrapper } from "../../atoms/HeroContent/StyledHeroWrapper"
import { StyledHeroSection } from "../../atoms/HeroContent/StyledHeroSection"
import { StyledHeroContentH1 } from "../../atoms/HeroContent/StyledHeroContentH1"
import { StyledFeaturedWrapper } from "../../molecules/FeaturedSection/FeaturedWrapper/StyledFeaturedWrapper"

const BlogLinks = () => (
  <StyledFeaturedWrapper
    mainHeader
    firstSpanLength="145%"
    secondSpanLength="190%"
    hasSmalFontSize
  >
    <span>Blog</span>
    <span>Posts</span>
  </StyledFeaturedWrapper>
)

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
          <BlogLinks />
        </StyledHeroContentH1>
      </StyledHeroWrapper>
    </StyledHeroSection>
  )
}

export default HeroContent
