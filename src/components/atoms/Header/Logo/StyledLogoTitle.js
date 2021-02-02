import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledLogoTitle = styled(motion.h1)`
  text-transform: uppercase;
  color: ${({ color }) => (color ? color : "var(--black)")};
  padding: 6px 0;
  font-size: 20px;
  line-height: 1.2em;
  font-weight: 500;
  font-family: "Libre Baskerville";
  transform: translateX(-34%);
  @media only screen and (max-width: 800px) {
    transform: translateX(0);
  }
`
