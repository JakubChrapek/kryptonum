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

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 3px;
    height: 1px;
    width: 100%;
    background-color: var(--black);
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  @media only screen and (max-width: 640px) {
    padding: 0 8px;
    &:before {
      width: calc(100% - 16px);
      left: 8px;
    }
  }

  &:hover,
  &:active,
  &:focus {
    &:before {
      transform: scaleY(1);
    }
  }
`
