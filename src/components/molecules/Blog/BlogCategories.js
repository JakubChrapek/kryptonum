import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

const CategoriesStyles = styled(motion.ul)`
  width: 100%;
  display: flex;

  li {
    margin-right: 13px;
    padding: 16px;
    font-family: Poppins;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 3px;
    color: var(--black);
    cursor: pointer;
    transition: color 0.2s var(--transition-bezier-curve);
    &.active {
      color: var(--accent-lighter);
    }

    &:first-of-type {
      padding-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`

const BlogCategories = ({ categories, activeCategory, setActiveCategory }) => {
  function handleClickCategory(category) {
    setActiveCategory(category)
  }

  return (
    <CategoriesStyles>
      {[{ categoryName: "All", id: "all-default-category" }, ...categories]
        .filter(category => category.forbloglisting !== true)
        .map(category => {
          const isCategoryActive = activeCategory === category.categoryName
          return (
            <motion.li
              key={category.categoryName}
              whileHover={{ y: -4 }}
              whileTap={!isCategoryActive && { scale: 0.98 }}
              transition={{ ease: [0.6, -0.05, 0.01, 0.99], duration: 0.3 }}
              className={isCategoryActive ? "active" : undefined}
              onClick={() => handleClickCategory(category.categoryName)}
            >
              {category.categoryName}
            </motion.li>
          )
        })}
    </CategoriesStyles>
  )
}

export default BlogCategories
