import React from "react"

import { ContactStyles } from "./StyledContact"

const Contact = ({ color }) => (
  <ContactStyles color={color} to="/contact">
    Contact
  </ContactStyles>
)

export default Contact
