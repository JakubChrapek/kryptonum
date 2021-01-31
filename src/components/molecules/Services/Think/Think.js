import React from "react"

import { StyledWorkflowComponentWrapper } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentWrapper"
import { StyledWorkflowComponentHeading } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentHeading"
import { StyledWorkflowComponentGreenSpan } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentGreenSpan"

import { StyledIdeaBox } from "../../../atoms/Services/Think/StyledIdeaBox"
import { StyledIdeaBoxP } from "../../../atoms/Services/Think/StyledIdeaBoxP"
import { StyledThinkTextWrapper } from "../../../atoms/Services/Think/StyledThinkTextWrapper"
import { StyledThinkTextWrapperH3 } from "../../../atoms/Services/Think/StyledThinkTextWrapperH3"
import { StyledThinkTextWrapperP } from "../../../atoms/Services/Think/StyledThinkTextWrapperP"
const Think = () => {
  return (
    <StyledWorkflowComponentWrapper
      notFlexDirection={true}
      hasAlignItems={true}
      hasJustifyContent={true}
      hasPaddingTop={94}
      mediaQueriesDirection={true}
      mediaQueriesAlign={true}
    >
      <div>
        <StyledWorkflowComponentGreenSpan>
          (01)
        </StyledWorkflowComponentGreenSpan>
        <StyledWorkflowComponentHeading>Think</StyledWorkflowComponentHeading>
      </div>
      <StyledIdeaBox>
        <StyledIdeaBoxP>Idea</StyledIdeaBoxP>
      </StyledIdeaBox>
      <StyledThinkTextWrapper>
        <StyledThinkTextWrapperH3>
          Thinking <span>Process</span>
        </StyledThinkTextWrapperH3>

        <StyledThinkTextWrapperP>
          Our ultimate goal with every project us to come up with a solution
          based design approach to help our clients solve real cases and achieve
          business needs.
        </StyledThinkTextWrapperP>
        <StyledThinkTextWrapperP>
          For this to happen, many ideas and hypotheses need to be generated and
          integrated upon. Creative thinking inspires ideas while ideas empower
          change.
        </StyledThinkTextWrapperP>
      </StyledThinkTextWrapper>
    </StyledWorkflowComponentWrapper>
  )
}

export default Think
