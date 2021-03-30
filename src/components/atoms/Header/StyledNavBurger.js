import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledNavBurger = styled(motion.button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 47px;
  padding: 8px;
  position: relative;
  border: none;
  background-color: transparent;
  z-index: 99;

  @media only screen and (max-width: 800px) {
    position: absolute;
    right: 22px;
    top: 18px;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ color }) => color};
  }

  &.active {
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px var(--black);
    }
    span {
      background-color: var(--black);
      margin: 0;
      &:first-child {
        transform: rotate(45deg) translate(1px, 0px);
      }
      &:last-child {
        transform: rotate(-45deg) translate(1px, -1px);
      }
    }
  }
`
