import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import Masonry from "react-masonry-css"
import styled from "styled-components"
import Article from "../Article/Article"
import BlogQuote from "./BlogQuote"

const StyledMasonry = styled(Masonry)`
  margin-top: 90px;
  @media (max-width: 767px) {
    margin-top: 40px;
  }
  @media (max-width: 500px) {
    margin-top: 32px;
  }
`

const BlogArticlesGrid = ({ posts, activeCategory, articleQuotes }) => {
  const breakpointColumnsObj = {
    default: 2,
    767: 1,
  }

  const [firstQuoteText, firstQuoteAuthor, firstQuotePosition] = [
    articleQuotes[0].cytatTresc.value.document.children[0].children[0].value,
    articleQuotes[0].cytatAutor,
    articleQuotes[0].cytatFirmaLubStanowisko.value.document.children[0]
      .children[0].value,
  ]
  const [secondQuoteText, secondQuoteAuthor, secondQuotePosition] = [
    articleQuotes[1].cytatTresc.value.document.children[0].children[0].value,
    articleQuotes[1].cytatAutor,
    articleQuotes[1].cytatFirmaLubStanowisko.value.document.children[0]
      .children[0].value,
  ]
  return (
    <motion.div>
      <StyledMasonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {posts
          .filter(post =>
            activeCategory !== "Wszystkie"
              ? post.articleCategory === activeCategory
              : true
          )
          .map((post, iterator) => {
            if (iterator === 1) {
              return (
                <>
                  <BlogQuote
                    text={firstQuoteText}
                    author={firstQuoteAuthor}
                    position={firstQuotePosition}
                    margin="44px 0 0"
                  />
                  <Article full article={post} key={post.id} />
                </>
              )
            } else if (iterator === 2) {
              return (
                <>
                  <Article full article={post} key={post.id} />
                  <BlogQuote
                    text={secondQuoteText}
                    author={secondQuoteAuthor}
                    position={secondQuotePosition}
                    margin="66px 0 0"
                  />
                </>
              )
            }
            return (
              <>
                <Article full article={post} key={post.id} />
              </>
            )
          })}
      </StyledMasonry>
    </motion.div>
  )
}

export default BlogArticlesGrid
