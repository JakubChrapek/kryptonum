import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledLogoTitle = styled(motion.h1)`
  text-transform: uppercase;
  color: ${({ color }) => (color ? color : "var(--black)")};
  padding: 6px 0;
  font-size: 18px;
  line-height: 1.2em;
  font-weight: 400;
  letter-spacing: 0.5px;
  font-family: "Libre Baskerville";
`
