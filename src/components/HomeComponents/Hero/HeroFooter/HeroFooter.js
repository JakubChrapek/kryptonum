import React from "react"
import { Link } from "gatsby"

import { HeroFooterStyles } from "./StyledHeroFooter"

const HeroFooter = () => {
  return (
    <HeroFooterStyles>
      <div>
        <a
          href="https://facebook.com/kryptonum"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com/kryptonum.studio"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
      <Link to="/blog">Blog</Link>
    </HeroFooterStyles>
  )
}

export default HeroFooter
