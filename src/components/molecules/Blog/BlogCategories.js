import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

const CategoriesStyles = styled(motion.ul)`
  width: 100%;
  display: flex;

  button {
    margin-right: 13px;
    padding: 16px;
    font-family: Poppins;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 3px;
    color: var(--black);
    cursor: pointer;
    border: 0;
    background-color: transparent;
    transition: color 0.2s var(--transition-bezier-curve);
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: 16px;
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

    &:hover,
    &:focus,
    &:active {
      outline: none;
      transform: translateY(-4px);
    }

    &.active {
      color: var(--accent-lighter);
      transform: translateY(-4px);

      &:after {
        transform: scaleX(1);
      }
    }

    &:first-of-type {
      padding-left: 0;
      &:after {
        left: 0;
      }
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`

const BlogCategories = ({
  categories,
  activeCategory,
  setActiveCategory,
  setCurrentPage,
}) => {
  function handleClickCategory(category) {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  return (
    <CategoriesStyles>
      {["All", ...categories].map(category => {
        const isCategoryActive = activeCategory === category
        return (
          <motion.button
            role="button"
            key={category}
            whileHover={{ y: -4 }}
            whileTap={!isCategoryActive && { scale: 0.98 }}
            whileFocus={{ y: -4 }}
            transition={{ ease: [0.6, -0.05, 0.01, 0.99], duration: 0.3 }}
            className={isCategoryActive ? "active" : undefined}
            onClick={() => handleClickCategory(category)}
          >
            {category}
          </motion.button>
        )
      })}
    </CategoriesStyles>
  )
}

export default BlogCategories
