import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledLogoTitle = styled(motion.h1)`
  color: ${({ color }) => (color ? color : "var(--black)")};
  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
  margin-left: 0.5rem;
  @media (max-width: 653px) {
    font-size: 20px;
  }
`
