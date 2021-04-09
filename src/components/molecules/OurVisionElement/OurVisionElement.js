import React from "react"

import { StyledOurVisionElement } from "../../atoms/OurVisionElement/StyledOurVisionElement"
import { StyledOurVisionLogoTextH2 } from "../../atoms/OurVisionElement/StyledOurVisionLogoTextH2"
import { StyledRightBoxParagraph } from "../../atoms/OurVisionElement/StyledRightBoxParagraph"

import { TextStyles } from "../../atoms/Text/Text"

const OurVisionElement = ({ leftBoxText, rightBoxText, elementNumber }) => {
  return (
    <StyledOurVisionElement>
      <StyledOurVisionLogoTextH2
        fontFamily="LibreBaskerville"
        fontSize="50px"
        lineHeight="1.26"
        letterSpacing="-1.3px"
        color="var(--accent)"
        accentedHeading
      >
        <TextStyles
          fontFamily="JetBrains Mono"
          fontSize="14px"
          lineHeight="2.14px"
          letterSpacing="5px"
          color="var(--accent)"
          declaredDisplay="block"
          declaredPadding="0 9px 0 0"
          declaredTransform="translateY(-18px)"
        >{`(${elementNumber})`}</TextStyles>
        <span dangerouslySetInnerHTML={{ __html: leftBoxText }} />
      </StyledOurVisionLogoTextH2>
      <StyledRightBoxParagraph
        fontFamily="Poppins"
        fontSize="16px"
        lineHeight="1.5"
        letterSpacing="2.67px"
        color="var(--white)"
      >
        {rightBoxText}
      </StyledRightBoxParagraph>
    </StyledOurVisionElement>
  )
}

export default OurVisionElement
