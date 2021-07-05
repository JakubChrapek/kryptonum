import React, { useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import useMousePosition from "../../../utils/useMousePosition"
import {
  CURSOR_TYPES,
  CURSOR_SIZES,
  CURSOR_COLORS,
} from "../../../contexts/cursorContext"

const CursorStyles = styled(motion.div)`
  cursor: pointer;
  position: absolute;
  z-index: 10;
  top: 0;
  opacity: 0.2;
  pointer-events: none;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media (max-width: 1024px) {
    display: none !important;
  }

  > span {
    font-size: 10px;
    line-height: 1;
    font-weight: 600;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* color: var(--white); */
  }

  background-color: var(--white);
  mix-blend-mode: difference;
`

const Cursor = ({ show, type, text, color, size }) => {
  const { x, y } = useMousePosition()

  return (
    <CursorStyles
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        x:
          type === CURSOR_TYPES.INPUT_CURSOR
            ? x
            : size === CURSOR_SIZES.HUGE
            ? x - 40
            : size === CURSOR_SIZES.BIGGER
            ? x - 21
            : size === CURSOR_SIZES.DEFAULT
            ? x - 15
            : x - 5,
        y:
          size === CURSOR_SIZES.HUGE
            ? y - 40
            : size === CURSOR_SIZES.BIGGER
            ? y - 21
            : size === CURSOR_SIZES.DEFAULT
            ? y - 15
            : y - 5,
        scale: 1,
        opacity: show ? 1 : 0,
        width:
          type === CURSOR_TYPES.INPUT_CURSOR
            ? "0.4rem"
            : size === CURSOR_SIZES.HUGE
            ? "8rem"
            : size === CURSOR_SIZES.BIGGER
            ? "4.2rem"
            : size === CURSOR_SIZES.DEFAULT
            ? "3rem"
            : "1rem",
        height:
          size === CURSOR_SIZES.HUGE
            ? "8rem"
            : size === CURSOR_SIZES.BIGGER
            ? "4.2rem"
            : size === CURSOR_SIZES.DEFAULT
            ? "3rem"
            : "1rem",
        borderRadius: type === CURSOR_TYPES.INPUT_CURSOR ? "0%" : "100%",
      }}
      transition={{
        ease: "linear",
        duration: 0.1,
        width: {
          ease: "easeInOut",
          duration: 0.3,
        },
        height: {
          ease: "easeInOut",
          duration: 0.3,
        },
        scale: {
          ease: "easeInOut",
          duration: 0.3,
        },
      }}
      type={type}
      color={color}
      size={size}
    >
      {type === CURSOR_TYPES.OUTLINED_CURSOR && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {text && text}
        </motion.span>
      )}
    </CursorStyles>
  )
}

export default Cursor
