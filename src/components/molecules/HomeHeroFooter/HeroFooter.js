import React from "react"

import { HeroFooterStyles } from "./StyledHeroFooter"
import { StyledLink } from "./StyledLink"

const HeroFooter = () => {
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
