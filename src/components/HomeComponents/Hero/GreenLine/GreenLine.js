import React, { useState } from "react"

import { LineStyles, AccentLineStyles } from "./StyledGreenLine"

const GreenLine = () => {
  // const [showSword, setShowSword] = useState(false)

  return (
    <LineStyles>
      <AccentLineStyles
        // animate={{ rotate: 360, scale: [1, 0.6, 1] }}
        // transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        // animate={showSword ? { width: "100%" } : { width: "10%" }}
        xmlns="http://www.w3.org/2000/svg"
        style={{ originX: 0.5, originY: 0.5 }}
      >
        <line x1="100%" y1="0%" x2="0%" y2="100%" />
      </AccentLineStyles>

      {/* <button type="button" onClick={() => setShowSword(!showSword)}>
          Laser sword
        </button> */}
    </LineStyles>
  )
}

export default GreenLine
