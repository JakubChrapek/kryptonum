import React, { useState, useEffect } from "react"
import Article from "./Article"
import Pagination from "./Pagination"
import { AnimatePresence } from "framer-motion"
import { ArticlesStyles } from "./StyledArticlesGrid"
import useWindowSize from "../../../utils/getWindowSize"

const ArticlesGrid = ({ posts }) => {
  const width = useWindowSize()
  const [currentPage, setCurrentPage] = useState(0)
  const pageLength = width < 740 ? 1 : 2

  return (
    <AnimatePresence exitBeforeEnter>
      <ArticlesStyles key="articles-section">
        {posts
          .slice(currentPage * pageLength, (currentPage + 1) * pageLength)
          .map(post => (
            <Article key={post.id} article={post} />
          ))}
      </ArticlesStyles>
      {posts.length > pageLength && (
        <Pagination
          key="articles-pagination"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          length={Math.ceil(posts?.length / pageLength)}
        />
      )}
    </AnimatePresence>
  )
}

export default ArticlesGrid
