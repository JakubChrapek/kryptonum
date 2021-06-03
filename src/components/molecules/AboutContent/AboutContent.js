import React from "react"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import { BgColourWrapper } from "../../atoms/Wrapper/Wrapper"

import HeroContent from "../HeroContent/HeroContent"
import HeroImage from "../HeroImage/HeroImage"

const AboutContent = ({ heroImage, heroBgImg, heroTitle }) => {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <>
      <BgColourWrapper
        onMouseEnter={() => {
          dispatchCursor({
            type: "CHANGE_CURSOR_TYPE",
            cursorType: CURSOR_TYPES.FULL_CURSOR,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_COLOR",
            cursorColor: CURSOR_COLORS.DARK,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_SIZE",
            cursorSize: CURSOR_SIZES.SMALLER,
          })
        }}
        bg="var(--white)"
      >
        <HeroContent content={heroTitle} />
      </BgColourWrapper>
      <HeroImage heroBgImg={heroImage} />
    </>
  )
}

export default AboutContent
