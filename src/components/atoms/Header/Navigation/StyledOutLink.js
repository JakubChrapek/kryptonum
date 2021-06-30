import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledOutLink = styled(motion.a)`
  font-size: 15px;
  line-height: 1.47em;
  color: var(--black);
  padding: 6px 0;
  position: relative;
  text-decoration: none;

  &:focus-visible {
    outline-offset: 2px;
    outline: 2px solid var(--black);
  }

  @media only screen and (max-width: 640px) {
    padding: 0 8px;
  }
`
