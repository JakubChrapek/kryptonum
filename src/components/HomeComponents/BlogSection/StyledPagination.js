import styled from "styled-components"
import { motion } from "framer-motion"

export const PaginationStyles = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 40px 0 0 0 !important;

  button {
    border: none;
    background-color: transparent;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &[disabled] {
      cursor: default;
    }
  }
`

export const Line = styled(motion.span)`
  flex: 1;
  height: 2px;
  width: 100%;
  background-color: var(--line-gray);
  position: relative;
  margin-left: 33px !important;

  &:after {
    width: 100% !important;
    height: 2px !important;
    bottom: 0 !important;
    left: 0;
    width: calc(100% + 28px);
    background-color: var(--black);
    height: 3px;
    z-index: 1 !important;
    transform-origin: left center;
    transform: ${({ width }) => (width ? `scaleX(${width})` : `scaleX(0)`)};
    transition: transform 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }
`
