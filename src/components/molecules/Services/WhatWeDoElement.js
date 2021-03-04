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
      <StyledWhatWeDoElementH2
        fontFamily="Poppins"
        fontSize="76px"
        textAlign="center"
        lineHeight="1.51"
        color="var(--black)"
        declaredMargin="0 0 114px 0"
        letterSpacing="normal"
        declaredDisplay="block"
      >
        {title}
      </StyledWhatWeDoElementH2>
      <StyledWhatWeDoElementImageWrapper>
        <StyledWhatWeDoElementLeftBar swap={swap}>
          <img src={image} />
        </StyledWhatWeDoElementLeftBar>
        <StyledWhatWeDoElementRightBar swap={swap}>
          <StyledWhatWeDoElementRightBarH3
            swap={swap}
            fontFamily="Poppins"
            fontSize="28px"
            lineHeight="1.71"
            color="var(--black)"
            letterSpacing="normal"
            declaredDisplay="block"
          >
            {content}
          </StyledWhatWeDoElementRightBarH3>
        </StyledWhatWeDoElementRightBar>
      </StyledWhatWeDoElementImageWrapper>
    </StyledWhatWeDoElementWrapper>
  )
}

export default WhatWeDoElement