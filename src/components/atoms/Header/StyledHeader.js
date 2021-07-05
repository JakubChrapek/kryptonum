import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledHeader = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  width: 100%;
  margin: 0 auto;
  padding: 38px 40px 38px 60px;
  z-index: 6;

  /* @media only screen and (max-width: 767px) {
    justify-content: flex-start;
  } */

  @media only screen and (max-width: 640px) {
    padding: 23px 28px;
  }
`
