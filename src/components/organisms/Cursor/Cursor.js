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
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media (max-width: 767px) {
    display: none !important;
  }

  > span {
    font-size: 10px;
    line-height: 1;
    font-weight: 600;
    text-transform: uppercase;
    /* color: var(--white); */
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
          border-width: 2px;
          > span {
            color: ${color};
          }
        `
      : //: type === CURSOR_TYPES.FIRE_CURSOR
      //? // OUTLINED CURSOR - BG TRANSPARENT WITH BORDER-COLOR
      // `
      //   background-color: transparent;
      //   border: 0;
      //   > span {
      //     font-size: 28px;
      //   }
      // `
      type === CURSOR_TYPES.INPUT_CURSOR
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
        x:
          type === CURSOR_TYPES.INPUT_CURSOR
            ? x
            : size === CURSOR_SIZES.HUGE
            ? x - 40
            : size === CURSOR_SIZES.BIGGER
            ? x - 21
            : size === CURSOR_SIZES.DEFAULT
            ? x - 15
            : x - 10,
        y:
          size === CURSOR_SIZES.HUGE
            ? y - 40
            : size === CURSOR_SIZES.BIGGER
            ? y - 21
            : size === CURSOR_SIZES.DEFAULT
            ? y - 15
            : y - 10,
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
            : "2rem",
        height:
          size === CURSOR_SIZES.HUGE
            ? "8rem"
            : size === CURSOR_SIZES.BIGGER
            ? "4.2rem"
            : size === CURSOR_SIZES.DEFAULT
            ? "3rem"
            : "2rem",
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
          Zobacz
        </motion.span>
      )}
    </CursorStyles>
  )
}

export default Cursor
