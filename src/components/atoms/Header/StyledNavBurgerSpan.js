import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledNavBurgerSpan = styled(motion.span)`
  width: 100%;
  height: 2px;
  background-color: ${({ color }) =>
    color === "light" ? "var(--white)" : "var(--black)"};
  transition: background-color 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53),
    transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  &:first-child {
    transform: translateY(-3px);
  }
  &:last-child {
    transform: translateY(3px);
  }
`
