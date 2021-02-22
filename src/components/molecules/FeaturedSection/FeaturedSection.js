import React from "react"

import { ServicesStyles } from "../../atoms/Services/ServicesStyles/ServicesStyles"
import { FeaturedSectionWrapper } from "../../atoms/FeaturedSection/FeaturedSectionWrapper"
import { FeaturedSectionUl } from "../../atoms/FeaturedSection/FeaturedSectionUl"
import { StyledFeaturedWrapper } from "./FeaturedWrapper/StyledFeaturedWrapper"

import { TextStyles } from "../../atoms/Text/Text"

const FeaturedSection = () => {
  return (
    <ServicesStyles featuredSection={true}>
      <TextStyles
        fontSize="8px"
        lineHeight="1.5em"
        letterSpacing="1.33px"
        fontFamily="Poppins"
        textTransform="uppercase"
        fontWeight="bold"
      >
        Works
      </TextStyles>
      <FeaturedSectionWrapper>
        <StyledFeaturedWrapper
          firstSpanLength="92%"
          secondSpanLength="120%"
          hasMarginLeft={false}
        >
          <span>Featured</span>
          <span>Projects</span>
        </StyledFeaturedWrapper>
        <FeaturedSectionUl>
          <li>Design</li>
          <li>Development</li>
          <li>Strategy</li>
        </FeaturedSectionUl>
      </FeaturedSectionWrapper>
    </ServicesStyles>
  )
}

export default FeaturedSection
