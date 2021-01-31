import React from "react"

import Learn from "./Learn/Learn"
import Think from "./Think/Think"
import Create from "./Create/Create"
import Implementation from "./Implementation/Implementation"

import { StyledOurWorkflowWrapper } from "../../atoms/Services/OurWorkflow/StyledOurWorkflowWrapper"
import { StyledOurWorkflowWrapperDiv } from "../../atoms/Services/OurWorkflow/StyledOurWorkflowWrapperDiv"
import { StyledOurWorkflowWrapperH2 } from "../../atoms/Services/OurWorkflow/StyledOurWorkflowWrapperH2"

const OurWorkflow = () => {
  return (
    <StyledOurWorkflowWrapper>
      <StyledOurWorkflowWrapperH2>Our workflow</StyledOurWorkflowWrapperH2>
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
