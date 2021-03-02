import { motion } from "framer-motion"
import styled from "styled-components"

const BlogQuoteWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

const BlogQuote = ({ text, author, brand }) => {
  return (
    <BlogQuoteWrapper>
      <p>{text}</p>
      <p>
        {author}
        <span>{brand}</span>
      </p>
    </BlogQuoteWrapper>
  )
}
