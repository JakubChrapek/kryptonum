import React, { useEffect, useState } from "react"
import Masonry from "react-masonry-css"
import styled from "styled-components"
import Article from "../Article/Article"
import BlogQuote from "./BlogQuote"

const StyledMasonry = styled(Masonry)`
  margin-top: 90px;
`

const BlogArticlesGrid = ({ posts, activeCategory }) => {
  const [articleCategories, setArticleCategories] = useState([])

  const addNewCategory = (post, currentCategories) => {
    !currentCategories.includes(post?.articleCategory) &&
      currentCategories.push(post.articleCategory)
  }
  useEffect(() => {
    posts.forEach(article => {
      !articleCategories.includes(article.articleCategory) &&
        setArticleCategories([...articleCategories, article.articleCategory])
    })
    // console.log(articleCategories)
  }, [])
  return (
    <StyledMasonry
      breakpointCols={2}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {posts
        .filter(post => post.articleCategory !== activeCategory)
        .map((post, iterator) => {
          if (iterator === 1) {
            return (
              <>
                <BlogQuote
                  text="“Your company shows great design which is important for us at Apple”"
                  author="Daniel Morrison"
                  position="Apple"
                  margin="34px 0 0"
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
          return <Article full article={post} key={post.id} />
        })}
    </StyledMasonry>
  )
}

export default BlogArticlesGrid
