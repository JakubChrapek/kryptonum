import React from "react"
import Masonry from "react-masonry-css"
import Article from "../Article/Article"
import BlogQuote from "./BlogQuote"

const BlogArticlesGrid = ({ posts }) => {
  return (
    <Masonry
      breakpointCols={2}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {posts.map((post, iterator) => {
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
    </Masonry>
  )
}

export default BlogArticlesGrid
