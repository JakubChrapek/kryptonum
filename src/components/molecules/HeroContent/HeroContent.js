import React from "react"
import { StructuredText } from "react-datocms"

import { StyledHeroWrapper } from "../../atoms/HeroContent/StyledHeroWrapper"
import { StyledHeroSection } from "../../atoms/HeroContent/StyledHeroSection"
import { StyledHeroContentH1 } from "../../atoms/HeroContent/StyledHeroContentH1"
import { StyledFeaturedWrapper } from "../../molecules/FeaturedSection/FeaturedWrapper/StyledFeaturedWrapper"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import website from "../../../../config/website"
import styled from "styled-components"

const BackgroundWrapper = styled.div`
  background-color: var(--white);
  width: 100%;
`

const HeroContent = ({ content, variant }) => {
  const dispatchCursor = useCursorDispatchContext()
  const handleOnMouseEnterForBlogSection = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.SMALLER,
    })
  }
  return (
    <BackgroundWrapper>
      <StyledHeroSection
        id={website.skipNavId}
        onMouseEnter={handleOnMouseEnterForBlogSection}
      >
        <StyledHeroWrapper variant={variant}>
          <StyledHeroContentH1
            fontSize="76px"
            fontFamily="Poppins"
            lineHeight="1.5"
            color="var(--black)"
            variant={variant}
          >
            <StructuredText data={content} />
          </StyledHeroContentH1>
        </StyledHeroWrapper>
      </StyledHeroSection>
    </BackgroundWrapper>
  )
}

export default HeroContent
