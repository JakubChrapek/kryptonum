import React from "react"

import { StyledWhatWeDoElementH2 } from "../../atoms/Services/WhatWeDoElement/StyledWhatWeDoElementH2"
import { StyledWhatWeDoElementImageWrapper } from "../../atoms/Services/WhatWeDoElement/StyledWhatWeDoElementImageWrapper"
import { StyledWhatWeDoElementLeftBar } from "../../atoms/Services/WhatWeDoElement/StyledWhatWeDoElementLeftBar"
import { StyledWhatWeDoElementRightBar } from "../../atoms/Services/WhatWeDoElement/StyledWhatWeDoElementRightBar"
import { StyledWhatWeDoElementRightBarH3 } from "../../atoms/Services/WhatWeDoElement/StyledWhatWeDoElementRightBarH3"
import { StyledWhatWeDoElementWrapper } from "../../atoms/Services/WhatWeDoElement/StyledWhatWeDoElementWrapper"

const WhatWeDoElement = ({ title, image, content, swap }) => {
  return (
    <StyledWhatWeDoElementWrapper>
      <StyledWhatWeDoElementH2>{title}</StyledWhatWeDoElementH2>
      <StyledWhatWeDoElementImageWrapper>
        <StyledWhatWeDoElementLeftBar swap={swap}>
          <img src={image} />
        </StyledWhatWeDoElementLeftBar>
        <StyledWhatWeDoElementRightBar swap={swap}>
          <StyledWhatWeDoElementRightBarH3>
            {content}
          </StyledWhatWeDoElementRightBarH3>
        </StyledWhatWeDoElementRightBar>
      </StyledWhatWeDoElementImageWrapper>
    </StyledWhatWeDoElementWrapper>
  )
}

export default WhatWeDoElement
