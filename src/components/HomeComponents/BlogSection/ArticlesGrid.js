import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg"

const ArticlesStyles = styled(motion.section)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, minmax(240px, 1fr));
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 26px;
  margin: 73px 0 0 0 !important;

  .gatsby-image-wrapper {
    width: 100%;
    margin: 0 !important;
    height: 100%;
    max-height: 300px;

    picture,
    img {
      width: 100% !important;
      object-fit: cover !important;
    }
  }

  h3 {
    margin-top: 15px;
    padding-top: 11px;
    border-top: 2px solid var(--black);
    color: var(--dark-bg);
    font-size: 16px;
    font-family: "Poppins";
    line-height: 1.38em;
    font-weight: normal;
    width: 100%;
  }
`

const ArticleStyles = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;

  div {
    margin: 0 !important;
    flex-direction: column;
    align-items: flex-start !important;
    border-bottom: 2px solid var(--black);
  }

  p {
    color: var(--dark-bg);
    font-size: 10px;
    line-height: 1.3em;
    letter-spacing: 0.8px;
    font-family: "Poppins";
    margin-top: 26px;
    padding-bottom: 13px;
    width: 100%;
  }
`

const Article = ({ article }) => {
  const year = article.dateOfPublication.split("-")[0].slice(2)
  const month = article.dateOfPublication.split("-")[1]
  return (
    <ArticleStyles key={article.id} to={`/blog/${article.articleSlug}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Img fluid={article.articleFeaturedImage.fluid} />
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.6 },
          }}
          exit={{ opacity: 0 }}
        >
          {article.articleTitle}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6 },
          }}
          exit={{ opacity: 0 }}
        >{`${month}/${year}`}</motion.p>
      </motion.div>
    </ArticleStyles>
  )
}

const PaginationStyles = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 40px 0 0 0 !important;

  button {
    border: none;
    background-color: transparent;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &[disabled] {
      cursor: default;
    }
  }
`

const Line = styled(motion.span)`
  flex: 1;
  height: 2px;
  width: 100%;
  background-color: var(--line-gray);
  position: relative;
  margin-left: 33px !important;

  &:after {
    width: 100% !important;
    height: 2px !important;
    bottom: 0 !important;
    left: 0;
    width: calc(100% + 28px);
    background-color: var(--black);
    height: 3px;
    z-index: 1 !important;
    transform-origin: left center;
    transform: ${({ width }) => (width ? `scaleX(${width})` : `scaleX(0)`)};
    transition: transform 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }
`

const Pagination = ({ length, currentPage, setCurrentPage }) => {
  const prevDisabled = currentPage === 0
  const nextDisabled = currentPage >= length - 1
  return (
    <PaginationStyles>
      <motion.button
        type="button"
        whileHover={!prevDisabled ? { x: -2 } : {}}
        whileTap={!prevDisabled ? { x: -4 } : {}}
        style={{ marginRight: "6px" }}
        onClick={!prevDisabled ? () => setCurrentPage(currentPage - 1) : null}
        disabled={prevDisabled}
      >
        <CgArrowLongLeft
          size="40px"
          color={prevDisabled ? "var(--text-gray)" : "var(--black)"}
        />
      </motion.button>
      <motion.button
        type="button"
        whileHover={!nextDisabled ? { x: 2 } : {}}
        whileTap={!nextDisabled ? { x: 4 } : {}}
        style={{ marginLeft: "6px" }}
        onClick={!nextDisabled ? () => setCurrentPage(currentPage + 1) : null}
        disabled={nextDisabled}
      >
        <CgArrowLongRight
          size="40px"
          color={nextDisabled ? "var(--text-gray)" : "var(--black)"}
        />
      </motion.button>
      <Line
        width={
          currentPage === 0 ? 0 : length > 2 ? currentPage / (length - 1) : 1
        }
      />
    </PaginationStyles>
  )
}

const ArticlesGrid = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const pageLength = 2
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
