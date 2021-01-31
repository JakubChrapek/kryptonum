import React from "react"

import { StyledContactStyles } from "../../atoms/Header/StyledContactStyles"

const Contact = ({ color }) => (
  <StyledContactStyles color={color} to="/contact">
    Contact
  </StyledContactStyles>
)

export default Contact
