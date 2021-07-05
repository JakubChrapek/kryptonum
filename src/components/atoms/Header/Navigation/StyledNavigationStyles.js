import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledNavigationStyles = styled(motion.nav)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  max-width: 100%;
  background-color: ${({ pointerEvents }) =>
    pointerEvents ? "var(--black)" : "var(--white)"};
  z-index: 3;
  display: flex;
  justify-content: space-between;
  padding: 108px 116px 38px 67px;
  pointer-events: ${({ pointerEvents }) => pointerEvents};

  @media only screen and (max-width: 640px) {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    padding: 90px 60px 90px 60px;
    justify-content: center;
    align-items: flex-start;
  }
  @media only screen and (max-width: 540px) {
    padding: 90px 40px 90px 40px;
  }
  @media only screen and (max-width: 374px) {
    padding: 100px 30px 100px 30px;
  }
`
