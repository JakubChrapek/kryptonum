import React from "react"

import { ServicesStyles } from "../../atoms/Services/ServicesStyles/ServicesStyles"
import { FeaturedSectionH2 } from "../../atoms/FeaturedSection/FeaturedSectionH2"
import { FeaturedSectionWrapper } from "../../atoms/FeaturedSection/FeaturedSectionWrapper"
import { FeaturedSectionUl } from "../../atoms/FeaturedSection/FeaturedSectionUl"

const FeaturedSection = () => {
  return (
    <ServicesStyles featuredSection={true}>
      <FeaturedSectionH2>Works</FeaturedSectionH2>
      <FeaturedSectionWrapper>
        <div>
          <span>Featured</span>
          <span>Projects</span>
        </div>
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
