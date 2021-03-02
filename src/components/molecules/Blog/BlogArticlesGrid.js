import React from "react"
import Masonry from "react-masonry-css"
import Article from "../Article/Article"

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
              <p>{iterator}</p>
              <Article article={post} key={post.id} />
            </>
          )
        }
        return <Article article={post} key={post.id} />
      })}
    </Masonry>
  )
}

export default BlogArticlesGrid
