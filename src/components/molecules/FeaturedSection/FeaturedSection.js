import React from "react"

import { ServicesStyles } from "../../atoms/Services/ServicesStyles/ServicesStyles"
import { FeaturedSectionWrapper } from "../../atoms/FeaturedSection/FeaturedSectionWrapper"
import { FeaturedSectionUl } from "../../atoms/FeaturedSection/FeaturedSectionUl"
import { StyledFeaturedWrapper } from "./FeaturedWrapper/StyledFeaturedWrapper"

import { TextStyles } from "../../atoms/Text/Text"
import { BgColourWrapper } from "../../atoms/Wrapper/Wrapper"
import {
  useCursorDispatchContext,
  CURSOR_TYPES,
  CURSOR_COLORS,
} from "../../../contexts/cursorContext"

const FeaturedSection = () => {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <BgColourWrapper
      onMouseOver={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.OUTLINED_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_COLOR",
          cursorColor: CURSOR_COLORS.DARK,
        })
      }}
      bg="var(--white)"
    >
      <ServicesStyles featuredSection={true}>
        <TextStyles
          fontSize="8px"
          lineHeight="1.5em"
          letterSpacing="1.33px"
          fontFamily="Poppins"
          textTransform="uppercase"
          fontWeight="bold"
        >
          Works
        </TextStyles>
        <FeaturedSectionWrapper>
          <StyledFeaturedWrapper
            firstSpanLength="92%"
            secondSpanLength="120%"
            hasMarginLeft={false}
          >
            <span>Featured</span>
            <span>Projects</span>
          </StyledFeaturedWrapper>
          <FeaturedSectionUl>
            <li>Design</li>
            <li>Development</li>
            <li>Strategy</li>
          </FeaturedSectionUl>
        </FeaturedSectionWrapper>
      </ServicesStyles>
    </BgColourWrapper>
  )
}

export default FeaturedSection
