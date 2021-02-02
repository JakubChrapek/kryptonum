import React from "react"

import { StyledOurVisionElement } from "../../atoms/OurVisionElement/StyledOurVisionElement"
import { StyledOurVisionLogoTextH2 } from "../../atoms/OurVisionElement/StyledOurVisionLogoTextH2"
import { StyledOurVisionLogoTextSpan } from "../../atoms/OurVisionElement/StyledOurVisionLogoTextSpan"
import { StyledRightBoxParagraph } from "../../atoms/OurVisionElement/StyledRightBoxParagraph"
const OurVisionElement = ({ leftBoxText, rightBoxText, elementNumber }) => {
  return (
    <StyledOurVisionElement>
      <div>
        <StyledOurVisionLogoTextH2>
          <StyledOurVisionLogoTextSpan>{`(${elementNumber})`}</StyledOurVisionLogoTextSpan>
          <span dangerouslySetInnerHTML={{ __html: leftBoxText }} />
        </StyledOurVisionLogoTextH2>
      </div>
      <StyledRightBoxParagraph>{rightBoxText}</StyledRightBoxParagraph>
    </StyledOurVisionElement>
  )
}

export default OurVisionElement
