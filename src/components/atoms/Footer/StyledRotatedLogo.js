import { motion } from "framer-motion"
import styled from "styled-components"

export const StyledRotatedLogo = styled(motion.h1)`
  font-size: 20px;
  line-height: 1.2em;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--white);
  position: absolute;
  transform: rotate(-90deg);
  left: 0;
  top: 160px;
  @media (max-width: 912px) {
    display: none;
  }
`
