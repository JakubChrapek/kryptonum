import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledLine = styled(motion.span)`
  flex: 1;
  height: 2px;
  width: 100%;
  background-color: var(--line-gray);
  position: relative;
  margin-left: 33px;
  display: inline-block;
  @media (max-width: 540px) {
    display: none;
  }

  &:after {
    content: "";
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    width: calc(100% + 28px);
    background-color: var(--black);
    z-index: 1;
    transform-origin: left center;
    transform: ${({ width }) => (width ? `scaleX(${width})` : `scaleX(0)`)};
    transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }
`
