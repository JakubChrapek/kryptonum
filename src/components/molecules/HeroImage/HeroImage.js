import React from "react"
import { HeroImageWrapper } from "../../atoms/HeroImage/StyledHeroImage"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  CURSOR_COLORS,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

const HeroImage = ({ image }) => {
  const dispatchCursor = useCursorDispatchContext()
  const handleOnMouseEnterForHeroImage = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.LIGHT,
    })
  }
  const handleOnMouseLeaveForHeroImage = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.DARK,
    })
  }
  return (
    <HeroImageWrapper
      onMouseEnter={handleOnMouseEnterForHeroImage}
      onMouseLeave={handleOnMouseLeaveForHeroImage}
    >
      <GatsbyImage
        style={{ pointerEvents: "none" }}
        image={image.gatsbyImageData}
      />
    </HeroImageWrapper>
  )
}

export default HeroImage
