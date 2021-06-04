import React from "react"
import { StyledErrorSection } from "../../molecules/404/StyledErrorSection"
import { StyledErrorWrapper } from "../../molecules/404/StyledErrorWrapper"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

const ErrorMain = () => {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <StyledErrorSection>
      <StyledErrorWrapper
        onPointerEnter={() => {
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
      ></StyledErrorWrapper>
    </StyledErrorSection>
  )
}

export default ErrorMain
