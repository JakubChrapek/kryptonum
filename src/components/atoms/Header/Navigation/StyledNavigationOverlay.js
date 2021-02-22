import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

export const StyledNavigationOverlay = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
`
