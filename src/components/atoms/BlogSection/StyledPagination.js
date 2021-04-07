import styled from "styled-components"
import { motion } from "framer-motion"

export const PaginationStyles = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 40px;
  grid-area: ${({ gridArea }) => gridArea};
`
