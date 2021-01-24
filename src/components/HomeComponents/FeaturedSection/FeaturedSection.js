import React from "react"

import { FeaturedWrapper, SectionStyles } from "./StyledFeaturedSection"

const FeaturedSection = () => {
  return (
    <SectionStyles>
      <h2>Works</h2>
      <div>
        <FeaturedWrapper>
          <span>Featured</span>
          <span>Projects</span>
        </FeaturedWrapper>
        <ul>
          <li>
            <h3>Design</h3>
          </li>
          <li>
            <h3>Development</h3>
          </li>
          <li>
            <h3>Strategy</h3>
          </li>
        </ul>
      </div>
    </SectionStyles>
  )
}

export default FeaturedSection
