import React from "react"

import {
  StyledOurVisionWrapper,
  OurVisionLogoTextWrapper,
  RightBoxParagraph,
} from "./StyledOurVisionElement"

const OurVisionElement = ({ leftBoxText, rightBoxText, elementNumber }) => {
  return (
    <StyledOurVisionWrapper>
      <OurVisionLogoTextWrapper>
        <h2>
          <span>{`(${elementNumber})`}</span>
          {leftBoxText}
        </h2>
      </OurVisionLogoTextWrapper>
      <RightBoxParagraph>{rightBoxText}</RightBoxParagraph>
    </StyledOurVisionWrapper>
  )
}

export default OurVisionElement
