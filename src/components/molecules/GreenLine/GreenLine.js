import React from "react"

import {
  LineStyles,
  AccentLineStyles,
} from "../../atoms/GreenLine/StyledGreenLine"

const GreenLine = () => {
  return (
    <LineStyles>
      <AccentLineStyles
        xmlns="http://www.w3.org/2000/svg"
        style={{ originX: 0.5, originY: 0.5 }}
      >
        <line x1="100%" y1="0%" x2="0%" y2="100%" />
      </AccentLineStyles>
    </LineStyles>
  )
}

export default GreenLine
