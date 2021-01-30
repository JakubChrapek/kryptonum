import React from "react"

import { SectionStyles } from "../../atoms/CtaSection/StyledCtaSection"
import { Wrapper } from "../../atoms/CtaSection/StyledCtaWrapper"
import { StyledCtaH2 } from "../../atoms/CtaSection/StyledCtaH2"
import { StyledCtaLink } from "../../atoms/CtaSection/StyledCtaLink"

const CtaSection = () => {
  return (
    <Wrapper>
      <SectionStyles>
        <StyledCtaH2>
          Let's make a wonderful <span>website</span> <span>together</span>
        </StyledCtaH2>
        <StyledCtaLink to="/contact" className="btn btn__small btn__light">
          Contact us
        </StyledCtaLink>
      </SectionStyles>
    </Wrapper>
  )
}

export default CtaSection
