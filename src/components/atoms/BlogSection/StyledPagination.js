import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const PaginationStyles = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 34px;
  ${({ feedback }) =>
    feedback &&
    css`
      padding-top: 56px;
      grid-column: 1/3;
    `}
`
