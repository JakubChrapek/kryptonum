import React from "react"
import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const TextStyles = styled(motion.p)`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "0"};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.3em")};
  font-family: ${({ fontFamily }) =>
    fontFamily ? fontFamily : "JetBrains Mono"};
  color: ${({ color }) => (color ? color : "var(--black)")};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "normal"};
`
