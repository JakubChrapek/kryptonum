import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import {
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

const WideImage = styled(GatsbyImage)`
  aspect-ratio: 1440/501;
  @media (max-width: 767px) {
    aspect-ratio: 768/267;
  }
  @media (max-width: 640px) {
    aspect-ratio: 360/300;
  }
`

const OfferHorizontalImageSection = ({ data }) => {
  const dispatchCursor = useCursorDispatchContext()

  const images = withArtDirection(getImage(data.largeImage), [
    {
      media: "(max-width: 640px)",
      image: getImage(data.smallImage),
    },
  ])
  return (
    <WideImage
      onMouseEnter={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.FULL_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.SMALLER,
        })
      }}
      image={images}
    />
  )
}

export default OfferHorizontalImageSection
