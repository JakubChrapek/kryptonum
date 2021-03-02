import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledHeader = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  width: 100%;
  margin: 0 auto;
  max-width: 1366px;
  margin: 0 auto;
  padding: 32px 62px 32px 62px;
  z-index: 3;

  @media only screen and (max-width: 800px) {
    padding: 23px;
    justify-content: center;
  }
`
