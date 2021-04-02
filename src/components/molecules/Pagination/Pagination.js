import React from "react"

import { PaginationStyles } from "../../atoms/BlogSection/StyledPagination"
import { StyledLine } from "../../atoms/BlogSection/StyledLine"
import { StyledButtonPagination } from "../../atoms/BlogSection/StyledButtonPagination"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import {
  LeftArrowPagination,
  RightArrowPagination,
} from "../../atoms/Icons/arrows"

const Pagination = ({ length, currentPage, setCurrentPage }) => {
  const dispatchCursor = useCursorDispatchContext()
  const prevDisabled = currentPage === 0
  const nextDisabled = currentPage >= length - 1
  console.log(length, currentPage)
  return (
    <PaginationStyles>
      <StyledButtonPagination
        type="button"
        whileHover={!prevDisabled ? { x: -2 } : {}}
        whileTap={!prevDisabled ? { x: -4 } : {}}
        style={{ marginRight: "6px" }}
        onClick={!prevDisabled ? () => setCurrentPage(currentPage - 1) : null}
        disabled={prevDisabled}
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
            cursorType: CURSOR_TYPES.OUTLINED_CURSOR,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_COLOR",
            cursorColor: CURSOR_COLORS.DARK,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_SIZE",
            cursorSize: CURSOR_SIZES.DEFAULT,
          })
        }}
      >
        <LeftArrowPagination
          color={prevDisabled ? "var(--text-gray)" : "var(--black)"}
        />
      </StyledButtonPagination>
      <StyledButtonPagination
        type="button"
        whileHover={!nextDisabled ? { x: 2 } : {}}
        whileTap={!nextDisabled ? { x: 4 } : {}}
        style={{ marginLeft: "6px" }}
        onClick={!nextDisabled ? () => setCurrentPage(currentPage + 1) : null}
        disabled={nextDisabled}
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
            cursorColor: CURSOR_COLORS.DARK,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_SIZE",
            cursorSize: CURSOR_SIZES.SMALLER,
          })
        }}
      >
        <RightArrowPagination
          color={nextDisabled ? "var(--text-gray)" : "var(--black)"}
        />
      </StyledButtonPagination>
      <StyledLine
        width={
          currentPage === 0 ? 0 : length > 1 ? currentPage / (length - 1) : 1
        }
      />
    </PaginationStyles>
  )
}

export default Pagination
