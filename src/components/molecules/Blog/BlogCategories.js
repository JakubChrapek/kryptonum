import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { scroller as scroll } from "react-scroll"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

const CategoriesStyles = styled(motion.ul)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

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

    @media (max-width: 787px) {
      padding: 7px 12px;
      font-size: 14px;
    }

    @media (max-width: 500px) {
      font-size: 12px;
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
    @media (max-width: 768px) {
      &:after {
        left: 12px;
      }
      &:first-of-type {
        padding-left: 12px;
        &:after {
          left: 12px;
        }
      }
    }
  }
`

const BlogCategories = ({
  categories,
  activeCategory,
  setActiveCategory,
  setCurrentPage,
}) => {
  const dispatchCursor = useCursorDispatchContext()
  const handleOnMouseEnterForLink = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.ACCENT_TRANSPARENT,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.BIGGER,
    })
  }

  const handleOnMouseLeaveForLink = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.DARK,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.SMALLER,
    })
  }

  function alignScroll() {
    scroll.scrollTo("blog-container", {
      duration: 0,
      delay: 0,
      smooth: true,
      offset: 0, // Scrolls to element + 50 pixels down the page
    })
  }
  function handleClickCategory(e, category) {
    e.preventDefault()
    setActiveCategory(category)
    setCurrentPage(1)
    alignScroll()
    return false
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
            transition={{ ease: [0.6, -0.05, 0.01, 0.99], duration: 0.3 }}
            className={isCategoryActive ? "active" : undefined}
            onClick={e => handleClickCategory(e, category)}
            onMouseEnter={handleOnMouseEnterForLink}
            onMouseLeave={handleOnMouseLeaveForLink}
          >
            {category}
          </motion.button>
        )
      })}
    </CategoriesStyles>
  )
}

export default BlogCategories
