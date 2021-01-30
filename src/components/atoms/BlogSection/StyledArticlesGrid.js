import styled from "styled-components"
import { motion } from "framer-motion"

export const ArticlesStyles = styled(motion.section)`
  margin-top: 73px;
  display: flex;
  justify-content: center;
  width: 100%;
  @media only screen and (max-width: 740px) {
    flex-direction: column;
    align-items: center;
  }
`
