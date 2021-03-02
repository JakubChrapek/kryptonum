import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import { TextStyles } from "../../atoms/Text/Text"

const BlogQuoteWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => (margin ? margin : "")};

  span {
    color: var(--text-light-gray);
    font-weight: 300;
  }
`

const BlogQuote = ({ text, author, position, margin }) => {
  return (
    <BlogQuoteWrapper margin={margin}>
      <TextStyles
        fontSize="24px"
        fontWeight="300"
        fontFamily="Libre Baskerville"
        lineHeight="48px"
        color="var(--black-font)"
      >
        {text}
      </TextStyles>
      <TextStyles
        fontSize="20px"
        fontWeight="500"
        fontFamily="Poppins"
        lineHeight="48px"
        color="var(--black-font)"
      >
        {`${author}, `}
        <span className="quote--position">{position}</span>
      </TextStyles>
    </BlogQuoteWrapper>
  )
}

export default BlogQuote
