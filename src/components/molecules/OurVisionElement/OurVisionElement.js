import React from "react"
import { StructuredText } from "react-datocms"

import { StyledOurVisionElement } from "../../atoms/OurVisionElement/StyledOurVisionElement"
import { StyledOurVisionLogoTextH2 } from "../../atoms/OurVisionElement/StyledOurVisionLogoTextH2"
import { StyledRightBoxParagraph } from "../../atoms/OurVisionElement/StyledRightBoxParagraph"

import { TextStyles } from "../../atoms/Text/Text"

const OurVisionElement = ({
  leftBoxText,
  rightBoxText,
  elementNumber,
  marginBottom,
}) => {
  return (
    <StyledOurVisionElement marginBottom={marginBottom}>
      <StyledOurVisionLogoTextH2
        fontSize="14px"
        lineHeight="2.12"
        letterSpacing="0.35em"
        color="var(--accent)"
        accentedHeading
      >
        <span>
          <StructuredText data={leftBoxText} />
        </span>
      </StyledOurVisionLogoTextH2>
      <StyledRightBoxParagraph
        fontFamily="Poppins"
        fontSize="16px"
        lineHeight="1.5"
        color="var(--white)"
      >
        <StructuredText data={rightBoxText} />
      </StyledRightBoxParagraph>
    </StyledOurVisionElement>
  )
}

export default OurVisionElement
