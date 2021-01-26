import React from "react"

import {
  WorkflowComponentWrapper,
  StyledGreenSpan,
  StyledHeading,
} from "../StyledWorkflowComponents"

import { StyledIdeaBox, ThinkTextWrapper } from "./StyledThink"

const Think = () => {
  return (
    <WorkflowComponentWrapper
      notFlexDirection={true}
      hasAlignItems={true}
      hasJustifyContent={true}
      hasPaddingTop={94}
    >
      <div>
        <StyledGreenSpan>(01)</StyledGreenSpan>
        <StyledHeading>Think</StyledHeading>
      </div>
      <StyledIdeaBox>
        <p>Idea</p>
      </StyledIdeaBox>
      <ThinkTextWrapper>
        <h3>
          Thinking <span>Process</span>
        </h3>

        <p>
          Our ultimate goal with every project us to come up with a solution
          based design approach to help our clients solve real cases and achieve
          business needs.
        </p>
        <p>
          For this to happen, many ideas and hypotheses need to be generated and
          integrated upon. Creative thinking inspires ideas while ideas empower
          change.
        </p>
      </ThinkTextWrapper>
    </WorkflowComponentWrapper>
  )
}

export default Think
