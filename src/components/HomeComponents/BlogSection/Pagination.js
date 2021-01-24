import React from "react"
import { motion } from "framer-motion"

import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg"

import { Line, PaginationStyles } from "./StyledPagination"

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

export default Pagination
