import React from "react"

import Learn from "./Learn/Learn"
import Think from "./Think/Think"
import Create from "./Create/Create"
import Implementation from "./Implementation/Implementation"

import { StyledOurWorkflowWrapper } from "../../atoms/Services/OurWorkflow/StyledOurWorkflowWrapper"
import { StyledOurWorkflowWrapperDiv } from "../../atoms/Services/OurWorkflow/StyledOurWorkflowWrapperDiv"
import { StyledOurWorkflowWrapperH2 } from "../../atoms/Services/OurWorkflow/StyledOurWorkflowWrapperH2"
import {
  CURSOR_COLORS,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import styled from "styled-components"

const OurWorkflow = () => {
  const dispatchCursor = useCursorDispatchContext()
  const handleOnMouseEnter = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.DARK,
    })
  }
  return (
    <StyledOurWorkflowWrapper onMouseEnter={handleOnMouseEnter}>
      <StyledOurWorkflowWrapperH2
        fontFamily="Poppins"
        fontSize="40px"
        lineHeight="1.28"
        color="var(--black)"
        declaredMargin="0 0 124px 0"
      >
        Our workflow
      </StyledOurWorkflowWrapperH2>
      <StyledOurWorkflowWrapperDiv>
        <Learn />
        <Think />
        <Create />
        <Implementation />
      </StyledOurWorkflowWrapperDiv>
    </StyledOurWorkflowWrapper>
  )
}

export default OurWorkflow
