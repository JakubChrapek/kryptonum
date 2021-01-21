import React from "react"

import { ButtonStyles } from "./StyledButton"

const Button = ({ children, margin, small, light, left }) => (
  <ButtonStyles
    margin={margin}
    small={small}
    light={light}
    left={left}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.3, ease: "backOut" },
    }}
    whileTap={{
      scale: 0.95,
      transition: { duration: 0.3 },
    }}
  >
    {children}
  </ButtonStyles>
)

export default Button
