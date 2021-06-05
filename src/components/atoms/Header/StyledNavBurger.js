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
  position: absolute;
  top: 28px;
  right: 70px;
  border: none;
  background-color: transparent;
  mix-blend-mode: difference;
  z-index: 99;

  @media only screen and (max-width: 640px) {
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

  span {
    background-color: ${({ color }) => color};
  }

  &.active {
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px ${({ color }) => color};
    }
    span {
      margin: 0;
      background-color: ${({ color }) => color};
      &:first-child {
        transform: rotate(45deg) translate(1px, 0px);
      }
      &:last-child {
        transform: rotate(-45deg) translate(1px, -1px);
      }
    }
  }
`
