import React from "react"

import { StructuredText } from "react-datocms"
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
  CURSOR_SIZES,
} from "../../../contexts/cursorContext"

const FeaturedSection = ({
  featuredTitle,
  featuredBigTitle,
  featuredFirstElement,
  featuredSecondElement,
  featuredThirdElement,
}) => {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <BgColourWrapper
      id="featuredProjects"
      onMouseOver={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.FULL_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.SMALLER,
        })
      }}
      bg="var(--white)"
    >
      <ServicesStyles featuredSection={true}>
        <TextStyles
          fontSize="9px"
          lineHeight="1.33em"
          letterSpacing="2.57px"
          textTransform="uppercase"
          fontWeight="500"
        >
          {featuredTitle}
        </TextStyles>
        <FeaturedSectionWrapper>
          <StyledFeaturedWrapper
            firstSpanLength="90%"
            secondSpanLength="135%"
            hasMarginLeft={false}
            mainHeader
          >
            <StructuredText data={featuredBigTitle.value} />
            {/* <span>Featured</span> */}
            {/* <span>Projects</span> */}
          </StyledFeaturedWrapper>
          <FeaturedSectionUl>
            <li>{featuredFirstElement}</li>
            <li>{featuredSecondElement}</li>
            <li>{featuredThirdElement}</li>
          </FeaturedSectionUl>
        </FeaturedSectionWrapper>
      </ServicesStyles>
    </BgColourWrapper>
  )
}

export default FeaturedSection
