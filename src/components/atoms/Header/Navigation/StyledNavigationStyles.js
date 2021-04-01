import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledNavigationStyles = styled(motion.nav)`
  position: absolute;
  right: 0vw;
  top: 0;
  height: 100vh;
  max-width: 100%;
  background-color: ${({ pointerEvents }) =>
    pointerEvents ? "var(--black)" : "var(--white)"};
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 94px 116px 38px 104px;
  pointer-events: ${({ pointerEvents }) => pointerEvents};

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
