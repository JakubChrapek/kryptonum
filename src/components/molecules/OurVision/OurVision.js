import React from "react"
import { StructuredText } from "react-datocms"

import OurVisionElement from "../OurVisionElement/OurVisionElement"

import { StyledOurVisionH2 } from "../../atoms/OurVision/StyledOurVisionH2"
import { StyledOurVisionHeroTextP } from "../../atoms/OurVision/StyledOurVisionHeroTextP"
import { StyledOurVisionHeroTextWrapper } from "../../atoms/OurVision/StyledOurVisionHeroTextWrapper"
import { StyledOurVisionSection } from "../../atoms/OurVision/StyledOurVisionSection"
import { StyledOurVisionWrapper } from "../../atoms/OurVision/StyledOurVisionWrapper"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

const OurVision = ({
  ourValuesTitle,
  ourValuesFeature,
  ourValuesCenteredClaim,
}) => {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <StyledOurVisionSection
      onMouseEnter={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.FULL_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_COLOR",
          cursorColor: CURSOR_COLORS.LIGHT,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.SMALLER,
        })
      }}
    >
      <StyledOurVisionWrapper>
        <StyledOurVisionH2
          fontSize="40px"
          lineHeight="1.28"
          color="var(--white)"
          declaredpadding="0 0 2px 0"
          fontFamily="Poppins"
        >
          <StructuredText data={ourValuesTitle} />
        </StyledOurVisionH2>
        <StyledOurVisionHeroTextWrapper>
          <StyledOurVisionHeroTextP
            fontFamily="Poppins"
            fontSize="40px"
            lineHeight="2.48"
            color="var(--white)"
            textAlign="center"
          >
            <StructuredText data={ourValuesCenteredClaim} />
          </StyledOurVisionHeroTextP>
        </StyledOurVisionHeroTextWrapper>
        <div>
          {ourValuesFeature.map((feature, i) => (
            <OurVisionElement
              leftBoxText={feature.wartoscTytul}
              rightBoxText={feature.wartoscTresc}
              elementNumber={i + 1}
            />
          ))}
        </div>
      </StyledOurVisionWrapper>
    </StyledOurVisionSection>
  )
}

export default OurVision
