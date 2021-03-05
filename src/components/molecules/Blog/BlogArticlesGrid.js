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

const BlogArticlesGrid = ({ posts, activeCategory }) => {
  const breakpointColumnsObj = {
    default: 2,
    767: 1,
  }
  return (
    <motion.div>
      <StyledMasonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {posts
          .filter(post =>
            activeCategory !== "All"
              ? post.articleCategory === activeCategory
              : true
          )
          .map((post, iterator) => {
            if (iterator === 1) {
              return (
                <>
                  <BlogQuote
                    text="“Your company shows great design which is important for us at Apple”"
                    author="Daniel Morrison"
                    position="Apple"
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
                    text="“Your company shows great design which is important for us at Apple”"
                    author="Daniel Morrison"
                    position="Apple"
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
