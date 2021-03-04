import React from "react"
import useWindowScrollPosition from "@rehooks/window-scroll-position"
import { AnimatePresence, motion, transform } from "framer-motion"
import styled from "styled-components"
import { VscArrowLeft } from "react-icons/vsc"
import { TextStyles } from "../../atoms/Text/Text"
import { animateScroll } from "react-scroll"

const ScrollToTopStyles = styled(motion.button)`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 120px;
  right: 60px;
  mix-blend-mode: difference;
  background-color: transparent;
  border: 0;

  &:focus,
  &:active {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  span {
    width: 32px;
    height: 32px;
    margin: 0 10px 1px 0;
  }

  p {
    color: #fff;
  }
`

const ScrollToTop = () => {
  const options = {
    throttle: 100,
  }
  let position = useWindowScrollPosition(options)
  const variants = {
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
    initial: { opacity: 0, rotate: 90 },
    exit: { opacity: 0 },
  }
  const item = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <AnimatePresence>
      {position.y > 500 && (
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
        >
          <motion.span variants={item}>
            <VscArrowLeft size="32px" color="var(--white)" />
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
