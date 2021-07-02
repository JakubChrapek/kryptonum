import React from "react"
import { HeroImageWrapper } from "../../atoms/HeroImage/StyledHeroImage"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  CURSOR_COLORS,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

const HeroImage = ({ heroBgImg }) => {
  const dispatchCursor = useCursorDispatchContext()

  return (
    <HeroImageWrapper>
      <GatsbyImage
        style={{ pointerEvents: "none" }}
        image={heroBgImg.gatsbyImageData}
      />
    </HeroImageWrapper>
  )
}

export default HeroImage
