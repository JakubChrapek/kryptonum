import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc"

const PaginationStyles = styled(motion.div)`
  display: flex;
  width: 100%;
  margin-top: 84px;
  justify-content: center;
`

const PaginationList = styled(motion.ul)`
  display: flex;
  align-items: center;
  button {
    border: 0;
    background-color: transparent;
    font-family: "Poppins";
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 3.33px;
    color: var(--black);
    padding: 8px;
    margin: 0 9px;

    &:not(.arrow) {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 100%;
        height: 2px;
        background-color: var(--accent-lighter);
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.2s var(--transition-bezier-curve);
      }

      &:hover:after,
      &:focus:after,
      &:active:after {
        transform: scaleX(1);
      }

      &:focus,
      &:active {
        outline: 2px solid var(--accent-lighter);
        outline-offset: 1px;
      }

      &.active {
        color: var(--accent-lighter);

        &:after {
          transform: scaleX(1);
        }
      }
    }

    &.arrow {
      &:focus,
      &:active {
        outline: 2px solid var(--accent-lighter);
      }
      &:disabled {
        cursor: not-allowed;
        &:focus,
        &:active {
          outline: none;
        }
      }
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      &:focus,
      &:active {
        outline: none;
      }
    }
  }
`

const BlogArticlesGridPagination = ({
  pages,
  ArticlesPerPage,
  numberOfArticles,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <motion.div>
      {pages > 1 && (
        <PaginationStyles
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <PaginationList>
            <motion.button
              role="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              whileHover={currentPage !== 1 && { x: -4 }}
              whileTap={currentPage !== 1 && { x: -6 }}
              className="arrow"
              style={{ marginRight: 24 }}
            >
              <VscArrowLeft size="30px" color="var(--black)" />
            </motion.button>
            {Array.from(Array(pages).keys()).map(pageNumber => (
              <motion.button
                role="button"
                className={currentPage === pageNumber + 1 && "active"}
                onClick={() => setCurrentPage(pageNumber + 1)}
              >
                <li>{pageNumber + 1}</li>
              </motion.button>
            ))}
            <motion.button
              role="button"
              disabled={currentPage >= pages}
              onClick={() => setCurrentPage(currentPage + 1)}
              whileHover={currentPage < pages && { scale: 1.02, x: 4 }}
              whileTap={currentPage < pages && { scale: 0.98, x: 6 }}
              className="arrow"
              style={{ marginLeft: 24 }}
            >
              <VscArrowRight size="30px" color="var(--black)" />
            </motion.button>
          </PaginationList>
        </PaginationStyles>
      )}
    </motion.div>
  )
}

export default BlogArticlesGridPagination
