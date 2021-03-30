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
  height: 4.2rem;
  width: 4.2rem;
  position: absolute;
  z-index: 10;
  top: 0;
  opacity: 0.2;
  border-radius: 100%;
  pointer-events: none;
  border: 2px solid;
  transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

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
      : `
          opacity: 0;
        `}

  &--full {
    background: var(--cursor-full);
  }

  &--outline {
    background: transparent;
    border: 2px solid var(--black);
  }
  &--light {
    background: var(--cursor-light);
  }
  &--smaller {
    width: 2.6rem;
    height: 2.6rem;
  }
`

const Cursor = ({ show, type, color, size }) => {
  const { x, y } = useMousePosition()
  return (
    <CursorStyles
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        x: x - 21,
        y: y - 21,
        scale: show ? 1.2 : 1,
        opacity: show ? 1 : 0,
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
