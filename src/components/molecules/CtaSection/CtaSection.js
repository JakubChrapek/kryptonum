import React from "react"

import { StructuredText } from "react-datocms"
import { SectionStyles } from "../../atoms/CtaSection/StyledCtaSection"
import { Wrapper } from "../../atoms/CtaSection/StyledCtaWrapper"
import { StyledCtaH2 } from "../../atoms/CtaSection/StyledCtaH2"
import { StyledCtaLink } from "../../atoms/CtaSection/StyledCtaLink"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

const CtaSection = ({
  createAWebsiteTogetherCTA,
  createAWebsiteTogetherButtonText,
}) => {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <Wrapper
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
      <SectionStyles>
        <StyledCtaH2
          fontSize="70px"
          lineHeight="1.38"
          letterSpacing="-1.75px"
          color="var(--white)"
          fontFamily="Libre Baskerville"
        >
          <StructuredText data={createAWebsiteTogetherCTA.value} />
        </StyledCtaH2>
        <StyledCtaLink
          onMouseEnter={() => {
            dispatchCursor({
              type: "CHANGE_CURSOR_TYPE",
              cursorType: CURSOR_TYPES.FULL_CURSOR,
            })
            dispatchCursor({
              type: "CHANGE_CURSOR_COLOR",
              cursorColor: CURSOR_COLORS.ACCENT_TRANSPARENT,
            })
            dispatchCursor({
              type: "CHANGE_CURSOR_SIZE",
              cursorSize: CURSOR_SIZES.BIGGER,
            })
          }}
          onMouseLeave={() => {
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
          to="/kontakt"
          className="btn btn__small btn__light"
        >
          {createAWebsiteTogetherButtonText}
        </StyledCtaLink>
      </SectionStyles>
    </Wrapper>
  )
}

export default CtaSection
