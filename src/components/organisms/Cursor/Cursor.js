import React from "react"
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
  border: 2px solid;
  transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media (max-width: 767px) {
    display: none !important;
  }

  ${({ type, color }) =>
    type === CURSOR_TYPES.FULL_CURSOR
      ? // FULL CURSOR - BG AND BORDER-COLOR THE SAME
        `
          background-color: ${color};
          border-color: ${color};
        `
      : type === CURSOR_TYPES.OUTLINED_CURSOR
      ? // OUTLINED CURSOR - BG TRANSPARENT WITH BORDER-COLOR
        `
          background-color: transparent;
          border-color: ${color};
        `
      : type === CURSOR_TYPES.INPUT_CURSOR
      ? `
          background-color: ${color};
          border: 0;
          border-radius: 0;
          width: 0.3rem;
        `
      : ``}/* cool difference effect
    background-color: var(--white);
    mix-blend-mode: difference; */
`

const Cursor = ({ show, type, color, size }) => {
  const { x, y } = useMousePosition()

  return (
    <CursorStyles
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        x: type === CURSOR_TYPES.INPUT_CURSOR ? x : x - 21,
        y: y - 21,
        scale:
          size === CURSOR_SIZES.BIGGER
            ? 1.2
            : size === CURSOR_SIZES.SMALLER
            ? 0.35
            : 0.6,
        opacity: show ? 1 : 0,
        width: type === CURSOR_TYPES.INPUT_CURSOR ? "0.4rem" : "4.2rem",
        height: "4.2rem",
        borderRadius: type === CURSOR_TYPES.INPUT_CURSOR ? "0%" : "100%",
      }}
      transition={{
        ease: "linear",
        duration: 0.1,
      }}
      type={type}
      color={color}
      size={size}
    />
  )
}

export default Cursor
