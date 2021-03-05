import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import { TextStyles } from "../../atoms/Text/Text"

const BlogQuoteWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => (margin ? margin : "")};
  @media (max-width: 767px) {
    margin: 44px 0 0;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }

  span {
    color: var(--text-light-gray);
    font-weight: 300;
  }

  .quote {
    &--content {
      @media (max-width: 767px) {
        font-size: 20px;
        line-height: 1.75;
      }
      @media (max-width: 500px) {
        font-size: 16px;
      }
    }
    &--author {
      @media (max-width: 767px) {
        font-size: 16px;
      }
      @media (max-width: 500px) {
        font-size: 14px;
      }
    }
    &--position {
      @media (max-width: 767px) {
        font-size: 16px;
      }
      @media (max-width: 500px) {
        font-size: 14px;
      }
    }
  }
`

const BlogQuote = ({ text, author, position, margin, layout }) => {
  return (
    <BlogQuoteWrapper layout={layout} margin={margin}>
      <TextStyles
        fontSize="24px"
        fontWeight="300"
        fontFamily="Libre Baskerville"
        lineHeight="48px"
        color="var(--black-font)"
        className="quote--content"
      >
        {text}
      </TextStyles>
      <TextStyles
        fontSize="20px"
        fontWeight="500"
        fontFamily="Poppins"
        lineHeight="48px"
        color="var(--black-font)"
        className="quote--author"
      >
        {`${author}, `}
        <span className="quote--position">{position}</span>
      </TextStyles>
    </BlogQuoteWrapper>
  )
}

export default BlogQuote
