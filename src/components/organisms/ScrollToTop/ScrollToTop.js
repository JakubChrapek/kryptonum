import React, { useState } from "react"
import { AnimatePresence, motion, transform } from "framer-motion"
import styled from "styled-components"
import { VscArrowLeft } from "react-icons/vsc"
import { TextStyles } from "../../atoms/Text/Text"
import { animateScroll } from "react-scroll"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import useWindowSize from "../../../utils/getWindowSize"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

const ScrollToTopStyles = styled(motion.button)`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 120px;
  right: 60px;
  mix-blend-mode: difference;
  background-color: transparent;
  border: 0;
  z-index: 5;

  @media (max-width: 1025px) {
    right: -20px;
    bottom: 80px;
  }

  &:focus,
  &:active {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
    @media (max-width: 1025px) {
      outline-offset: 0;
    }
  }

  span {
    width: 32px;
    height: 32px;
    margin: 0 10px 1px 0;
    @media (max-width: 1025px) {
      width: 24px;
      height: 24px;
      margin: 0 15px 3px 0;
    }
  }

  p {
    color: #fff;
    font-weight: 300;
  }
  @media (max-width: 1025px) {
    p {
      font-size: 10px;
    }
  }
`

const ScrollToTop = () => {
  const dispatchCursor = useCursorDispatchContext()
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  let width = useWindowSize()
  const variants = {
    animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
    initial: { opacity: 0, y: 4, rotate: 90 },
    exit: { opacity: 0, y: 4 },
  }
  const item = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -500) {
      setShowScrollToTop(true)
    } else {
      setShowScrollToTop(false)
    }
  })

  return (
    <AnimatePresence>
      {showScrollToTop && (
        <ScrollToTopStyles
          role="button"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          whileHover={{ cursor: "pointer", rotate: 90, y: -6 }}
          whileTap={{ y: -10 }}
          transition={{
            transform: {
              duration: 0.2,
              ease: [0.6, -0.02, 0.7, 0.96],
            },
          }}
          onClick={() => animateScroll.scrollToTop()}
          onMouseEnter={() => {
            dispatchCursor({
              type: "CHANGE_CURSOR_SIZE",
              cursorSize: CURSOR_SIZES.SMALLER,
            })
          }}
          onMouseLeave={() => {
            dispatchCursor({
              type: "CHANGE_CURSOR_SIZE",
              cursorSize: CURSOR_SIZES.DEFAULT,
            })
          }}
        >
          <motion.span variants={item}>
            <VscArrowLeft
              size={width > 1025 ? "32px" : "24px"}
              color="var(--white)"
            />
          </motion.span>
          <TextStyles
            variants={item}
            fontFamily="Poppins"
            fontSize="12px"
            lineHeight="32px"
            letterSpacing="2px"
            as="p"
          >
            Go up
          </TextStyles>
        </ScrollToTopStyles>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
