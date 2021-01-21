import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"

export const NavigationStyles = styled(motion.nav)`
  position: absolute;
  right: 0vw;
  top: 0;
  height: 100vh;
  max-width: 100%;
  background-color: var(--white);
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 94px 116px 38px 104px;
  p {
    font-size: 15px;
    line-height: 1.47em;
    color: var(--text-gray);
    margin-left: 8px;
  }

  @media only screen and (max-width: 800px) {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    padding: 90px 60px 0 40px;
    justify-content: flex-start;
  }
  @media only screen and (max-width: 540px) {
    padding: 60px 50px 0 30px;
  }
`

export const Flex = styled(motion.div)`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  margin: ${({ margin }) => (margin ? margin : 0)};
`

export const MenuFlex = styled(Flex)`
  @media only screen and (max-width: 800px) {
    margin: 0;
  }
`

export const StyledOutLink = styled(motion.a)`
  font-size: 15px;
  line-height: 1.47em;
  color: var(--black);
  padding: 6px 8px;
  position: relative;
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

export const SocialList = styled(motion.ul)`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  li {
    display: inline-flex;
  }
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 32px 0 0;
  li {
    display: inline-flex;
  }

  @media only screen and (max-width: 800px) {
    justify-content: flex-start;
    height: unset;
    margin: 24px 0 50px;
  }
`

export const StyledItem = styled.li`
  position: relative;
  transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
`

export const StyledLink = styled(Link)`
  font-size: 56px;
  line-height: 1.07;
  color: var(--black);
  padding: 12px 8px;
  margin-bottom: 12px;
  height: 100%;
  position: relative;

  @media only screen and (max-width: 540px) {
    font-size: 38px;
    margin-bottom: 2px;
    padding: 4px 8px;
  }

  &.active li,
  &:hover li {
    transform: translateX(32px);
  }

  &::after {
    content: "${({ number }) => (number ? number : "")}";
    left: 0;
    position: absolute;
    top: 18px;
    font-size: 16px;
    line-height: 1.38;
    color: var(--black);
    transform: translateX(-4px);
    opacity: 0;
    transition: opacity 0.2s 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      transform 0.2s 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }
  &.active::after,
  &:hover::after {
    opacity: 1;
    transform: translateX(2px);
  }
`

export const Text = styled.p`
  margin: ${({ margin }) => (margin ? margin : "0")};
`
