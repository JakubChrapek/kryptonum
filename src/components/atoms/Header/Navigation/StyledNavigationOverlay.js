import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

export const StyledNavigationOverlay = styled(motion.div)`
  /* position: fixed; */
  left: 0;
  top: 0;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.22);
`
