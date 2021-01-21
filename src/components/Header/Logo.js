import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const LogoTitle = styled(motion.h1)`
  text-transform: uppercase;
  color: ${({ color }) => (color ? color : "var(--black)")};
  padding: 6px 8px;
  font-size: 20px;
  line-height: 1.2em;
  font-weight: 500;
  font-family: "Libre Baskerville";
`

const Logo = ({ color }) => <LogoTitle color={color}>Kryptonum</LogoTitle>

export default Logo
