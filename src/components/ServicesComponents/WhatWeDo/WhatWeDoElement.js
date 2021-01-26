import React from "react"

import {
  StyledWhatWeDoElementWrapper,
  TextAndImageWrapper,
  RightBar,
  LeftBar,
} from "./StyledWhatWeDoElement"

const WhatWeDoElement = ({ title, image, content, swap }) => {
  return (
    <StyledWhatWeDoElementWrapper>
      <h2>{title}</h2>
      <TextAndImageWrapper>
        <LeftBar swap={swap}>
          <img src={image} />
        </LeftBar>
        <RightBar swap={swap}>
          <h3>{content}</h3>
        </RightBar>
      </TextAndImageWrapper>
    </StyledWhatWeDoElementWrapper>
  )
}

export default WhatWeDoElement
