import { motion } from "framer-motion"
import styled from "styled-components"

export const DragSliderWrapper = styled(motion.div)`
  width: 100%;
  @media (max-width: 1189px) {
    cursor: grab;
  }
  @media (max-width: 874px) {
    padding: 0 41px;
  }
  @media (max-width: 540px) {
    padding: 0 20px;
  }
`
