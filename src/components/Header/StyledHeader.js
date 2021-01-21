import styled from "styled-components"
import { motion } from "framer-motion"

export const NavBurger = styled(motion.button)`
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
  z-index: 2;
  mix-blend-mode: difference;

  @media only screen and (max-width: 800px) {
    position: absolute;
    right: 22px;
    top: 18px;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &::focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #000;
  }

  span {
    width: 100%;
    height: 2px;
    background-color: ${({ color }) => (color ? color : "var(--black)")};
    transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    &:first-child {
      transform: translateY(-3px);
    }
    &:last-child {
      transform: translateY(3px);
    }
  }

  &.active {
    span {
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

export const HeaderStyles = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 62px 32px 70px;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 800px) {
    padding: 30px;
    justify-content: center;
  }
`
