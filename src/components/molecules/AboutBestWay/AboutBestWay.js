import React from "react"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import useWindowSize from "../../../utils/getWindowSize"
import { StructuredText } from "react-datocms"

import { StyledBestWayWrapper } from "../../atoms/AboutBestWay/StyledBestWayWrapper"
import { TextStyles } from "../../atoms/Text/Text"
import { BgColourWrapper } from "../../atoms/Wrapper/Wrapper"

const AboutBestWay = ({
  marathonTitle,
  marathonFirstParagraph,
  marathonParagraphOverTitle,
  textContent,
}) => {
  const dispatchCursor = useCursorDispatchContext()
  const width = useWindowSize()
  return (
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
      <StyledBestWayWrapper>
        <TextStyles
          fontSize="28px"
          fontWeight="normal"
          lineHeight="1.71"
          textAlign="center"
          color="var(--black-font)"
          fontFamily="Poppins"
          styledAboutBestWayWrapper={true}
        >
          <StructuredText data={textContent} />
        </TextStyles>
      </StyledBestWayWrapper>
    </BgColourWrapper>
  )
}

export default AboutBestWay
