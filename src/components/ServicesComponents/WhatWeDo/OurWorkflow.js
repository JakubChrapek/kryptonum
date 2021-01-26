import React from "react"

import { OurWorkflowWrapper } from "./StyledOurWorkflow"

import Learn from "./WorkflowComponents/Learn/Learn"
import Think from "./WorkflowComponents/Think/Think"
import Create from "./WorkflowComponents/Create/Create"
import Implementation from "./WorkflowComponents/Implementation/Implementation"

const OurWorkflow = () => {
  return (
    <OurWorkflowWrapper>
      <h2>Our workflow</h2>
      <div>
        <Learn />
        <Think />
        <Create />
        <Implementation />
      </div>
    </OurWorkflowWrapper>
  )
}

export default OurWorkflow
