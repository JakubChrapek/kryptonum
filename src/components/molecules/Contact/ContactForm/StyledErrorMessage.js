import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

export const StyledErrorMessage = styled(motion.p)`
  color: red;
  font-size: 12px;
  position: absolute;
  bottom: 6px;
`

const ErrorMessage = ({ children, name, ...props }) => {
  return (
    <StyledErrorMessage
      {...props}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, y: 6, transition: { duration: 0.1 } }}
      key={`${name}-error-message`}
    >
      {children}
    </StyledErrorMessage>
  )
}

export default ErrorMessage
