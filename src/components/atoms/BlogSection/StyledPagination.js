import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const PaginationStyles = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 40px;
  grid-area: ${({ gridArea }) => gridArea};
  ${({ feedback }) =>
    feedback &&
    css`
      position: absolute;
      bottom: 120px;
      max-width: 1366px;
      margin: 0 auto;
      @media (max-width: 1644px) {
        max-width: calc(100vw - 278px);
      }
      @media only screen and (max-width: 1366px) {
        max-width: calc(100vw - 180px);
      }
      @media only screen and (max-width: 767px) {
        max-width: calc(100vw - 88px);
      }
    `}
`
