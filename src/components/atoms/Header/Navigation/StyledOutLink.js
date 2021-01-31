import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledOutLink = styled(motion.a)`
  font-size: 15px;
  line-height: 1.47em;
  color: var(--black);
  padding: 6px 0;
  position: relative;
  text-decoration: none;

  @media only screen and (max-width: 800px) {
    padding: 0 8px;
  }

  &:before {
    content: "";
    position: absolute;
    left: 8px;
    bottom: 3px;
    height: 1px;
    width: calc(100% - 16px);
    background-color: var(--black);
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  &:hover,
  &:active,
  &:focus {
    &:before {
      transform: scaleY(1);
    }
  }
`
