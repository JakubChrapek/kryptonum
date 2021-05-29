import React from "react"

import { StyledContactStyles } from "../../atoms/Header/StyledContactStyles"

const Contact = ({ color, onMouseEnter, onMouseLeave }) => (
  <StyledContactStyles
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    color={color}
    to="/kontakt"
  >
    Kontakt
  </StyledContactStyles>
)

export default Contact
