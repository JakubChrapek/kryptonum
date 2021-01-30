import React from "react"

import { StyledBestWayWrapper } from "../../atoms/BestWay/StyledBestWayWrapper"
import { StyledBestWayH2 } from "../../atoms/BestWay/StyledBestWayH2"

const BestWay = ({ textContent }) => {
  return (
    <StyledBestWayWrapper>
      <StyledBestWayH2>{textContent}</StyledBestWayH2>
    </StyledBestWayWrapper>
  )
}

export default BestWay
