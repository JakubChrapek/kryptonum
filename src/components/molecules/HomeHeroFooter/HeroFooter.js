import React from "react"
import { useLocation } from "@reach/router"
import { HeroFooterStyles } from "./StyledHeroFooter"
import StyledLink from "./StyledLink"
import {
  useCursorDispatchContext,
  CURSOR_TYPES,
  CURSOR_COLORS,
  CURSOR_SIZES,
} from "../../../contexts/cursorContext"

const HeroFooter = () => {
  const dispatchCursor = useCursorDispatchContext()
  let pathname = useLocation().pathname
  const handleOnMouseEnterForLink = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.BIGGER,
    })
  }

  const handleOnMouseLeaveForLink = () => {
    if (pathname === "/") {
      dispatchCursor({
        type: "CHANGE_CURSOR_TYPE",
        cursorType: CURSOR_TYPES.FULL_CURSOR,
      })
      dispatchCursor({
        type: "CHANGE_CURSOR_SIZE",
        cursorSize: CURSOR_SIZES.SMALLER,
      })
    } else {
      dispatchCursor({
        type: "CHANGE_CURSOR_TYPE",
        cursorType: CURSOR_TYPES.FULL_CURSOR,
      })

      dispatchCursor({
        type: "CHANGE_CURSOR_SIZE",
        cursorSize: CURSOR_SIZES.SMALLER,
      })
    }
  }
  return (
    <HeroFooterStyles>
      <div>
        <StyledLink
          href="https://www.facebook.com/kryptonumPL"
          target="_blank"
          rel="noreferrer"
          declaredFontSize="14px"
          declaredLineHeight="1.3"
          declaredFontColor="var(--white)"
          onMouseEnter={handleOnMouseEnterForLink}
          onMouseLeave={handleOnMouseLeaveForLink}
        >
          Facebook
        </StyledLink>
        <StyledLink
          href="https://www.instagram.com/kryptonum_pl/"
          target="_blank"
          rel="noreferrer"
          declaredFontSize="14px"
          declaredLineHeight="1.3"
          declaredFontColor="var(--white)"
          onMouseEnter={handleOnMouseEnterForLink}
          onMouseLeave={handleOnMouseLeaveForLink}
        >
          Instagram
        </StyledLink>
      </div>
      <StyledLink
        to="/blog"
        declaredFontSize="14px"
        declaredLineHeight="1.3"
        declaredFontColor="var(--white)"
        declaredMarginRight="0"
        onMouseEnter={handleOnMouseEnterForLink}
        onMouseLeave={handleOnMouseLeaveForLink}
      >
        Blog
      </StyledLink>
    </HeroFooterStyles>
  )
}

export default HeroFooter
