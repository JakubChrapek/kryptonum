import React from "react"

import { StyledBestWayWrapper } from "./StyledBestWay"

const BestWay = ({ textContent }) => {
  return (
    <StyledBestWayWrapper>
      <h2>{textContent}</h2>
    </StyledBestWayWrapper>
  )
}

export default BestWay
