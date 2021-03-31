import React from "react"

import { HeroFooterStyles } from "./StyledHeroFooter"
import { StyledLink } from "./StyledLink"
import {
  useCursorDispatchContext,
  CURSOR_TYPES,
  CURSOR_COLORS,
  CURSOR_SIZES,
} from "../../../contexts/cursorContext"

const HeroFooter = () => {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <HeroFooterStyles>
      <div>
        <StyledLink
          href="https://facebook.com/kryptonum"
          target="_blank"
          rel="noreferrer"
          declaredFontSize="14px"
          declaredLineHeight="1.3"
          declaredFontColor="var(--white)"
          declaredFontFamily="JetBrains Mono"
          onMouseEnter={() => {
            dispatchCursor({
              type: "CHANGE_CURSOR_COLOR",
              cursorColor: CURSOR_COLORS.ACCENT,
            })
            dispatchCursor({
              type: "CHANGE_CURSOR_SIZE",
              cursorSize: CURSOR_SIZES.SMALLER,
            })
          }}
          onMouseLeave={() => {
            dispatchCursor({
              type: "CHANGE_CURSOR_COLOR",
              cursorColor: CURSOR_COLORS.LIGHT,
            })
            dispatchCursor({
              type: "CHANGE_CURSOR_SIZE",
              cursorSize: CURSOR_SIZES.DEFAULT,
            })
          }}
        >
          Facebook
        </StyledLink>
        <StyledLink
          href="https://instagram.com/kryptonum.studio"
          target="_blank"
          rel="noreferrer"
          declaredFontSize="14px"
          declaredLineHeight="1.3"
          declaredFontColor="var(--white)"
          declaredFontFamily="JetBrains Mono"
        >
          Instagram
        </StyledLink>
      </div>
      <StyledLink
        to="/blog"
        declaredFontSize="14px"
        declaredLineHeight="1.3"
        declaredFontColor="var(--white)"
        declaredFontFamily="JetBrains Mono"
        declaredMarginRight="0"
        declaredPadding="0 0 0 8px"
      >
        Blog
      </StyledLink>
    </HeroFooterStyles>
  )
}

export default HeroFooter
