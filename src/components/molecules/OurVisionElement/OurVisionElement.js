import React from "react"
import { StructuredText } from "react-datocms"

import { StyledOurVisionElement } from "../../atoms/OurVisionElement/StyledOurVisionElement"
import { StyledOurVisionLogoTextH2 } from "../../atoms/OurVisionElement/StyledOurVisionLogoTextH2"
import { StyledRightBoxParagraph } from "../../atoms/OurVisionElement/StyledRightBoxParagraph"

import { TextStyles } from "../../atoms/Text/Text"

const OurVisionElement = ({ leftBoxText, rightBoxText, elementNumber }) => {
  return (
    <StyledOurVisionElement>
      <StyledOurVisionLogoTextH2
        fontSize="50px"
        lineHeight="1.26"
        letterSpacing="-1.3px"
        color="var(--accent)"
        accentedHeading
      >
        <TextStyles
          fontSize="14px"
          lineHeight="2.14px"
          letterSpacing="5px"
          color="var(--accent)"
          declaredDisplay="block"
          declaredpadding="0 9px 0 0"
          declaredTransform="translateY(-18px)"
        >{`(${elementNumber})`}</TextStyles>
        <span>
          <StructuredText data={leftBoxText} />
        </span>
      </StyledOurVisionLogoTextH2>
      <StyledRightBoxParagraph
        fontFamily="Poppins"
        fontSize="16px"
        lineHeight="1.5"
        letterSpacing="2.67px"
        color="var(--white)"
      >
        <StructuredText data={rightBoxText} />
      </StyledRightBoxParagraph>
    </StyledOurVisionElement>
  )
}

export default OurVisionElement
