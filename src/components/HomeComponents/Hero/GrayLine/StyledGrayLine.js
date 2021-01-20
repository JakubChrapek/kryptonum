import styled from "styled-components"
import { motion } from "framer-motion"

export const SvgStyles = styled(motion.svg)`
  position: absolute;
  left: 0;
  top: 55%;
  width: 100%;
  height: 2px;
  @media (max-width: 1101px) {
    top: 50%;
  }
  line {
    stroke: var(--white);
    stroke-width: 1px;
  }
`
