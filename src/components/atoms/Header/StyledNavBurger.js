import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledNavBurger = styled(motion.button)`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  mix-blend-mode: difference;
  z-index: 99;

  @media only screen and (max-width: 640px) {
    position: absolute;
    right: 22px;
    top: 20px;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ color }) => color};
  }

  .hamburger--menu {
    color: ${({ color }) => color};
    font-size: 18px;
    line-height: 1;
    font-weight: 400;
    margin: 0 19px 1px;
    @media only screen and (max-width: 640px) {
      display: none;
    }
  }

  span:not(.hamburger--menu) {
    background-color: ${({ color }) => color};
    margin-bottom: 1px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &.active {
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px ${({ color }) => color};
    }
    span:not(.hamburger--menu) {
      margin: 0;
      background-color: ${({ color }) => color};
      &:first-of-type {
        transform: rotate(45deg) translate(1px, 0px);
      }
      &:last-of-type {
        transform: rotate(-45deg) translate(1px, -1px);
      }
    }
  }
`
