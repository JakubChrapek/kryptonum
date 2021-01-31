import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledNavigationFlexDiv = styled(motion.div)`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  margin: ${({ margin }) => (margin ? margin : 0)};
`
