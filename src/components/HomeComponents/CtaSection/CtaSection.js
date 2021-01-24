import { Link } from "gatsby"
import React from "react"

import { Wrapper, SectionStyles } from "./StyledCtaSection"

const CtaSection = () => {
  return (
    <Wrapper>
      <SectionStyles>
        <h2>
          Let's make a wonderful <span>website</span> <span>together</span>
        </h2>
        <Link to="/contact" className="btn btn__small btn__light">
          Contact us
        </Link>
      </SectionStyles>
    </Wrapper>
  )
}

export default CtaSection
