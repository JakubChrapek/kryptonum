import React from "react"

import { StyledWorkflowComponentWrapper } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentWrapper"
import { StyledWorkflowComponentHeading } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentHeading"
import { StyledWorkflowComponentGreenSpan } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentGreenSpan"

import { StyledIdeaBox } from "../../../atoms/Services/Think/StyledIdeaBox"
import { StyledIdeaBoxP } from "../../../atoms/Services/Think/StyledIdeaBoxP"
import { StyledThinkTextWrapper } from "../../../atoms/Services/Think/StyledThinkTextWrapper"
import { StyledThinkTextWrapperH3 } from "../../../atoms/Services/Think/StyledThinkTextWrapperH3"
import { TextStyles } from "../../../atoms/Text/Text"
import { StyledThinkTextParagraph } from "../../../atoms/Services/Think/StyledThinkTextParagraph"
import { ThinkWrapper } from "./ThinkWrapper"

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
      <ThinkWrapper>
        <StyledWorkflowComponentGreenSpan
          fontFamily="JetBrains Mono"
          fontSize="18px"
          lineHeight="1.28"
          color="var(--accent)"
          letterSpacing="2.57px"
          fontWeight="500"
        >
          (02)
        </StyledWorkflowComponentGreenSpan>
        <StyledWorkflowComponentHeading
          fontFamily="LibreBaskerville"
          fontSize="88px"
          lineHeight="1.24"
          color="var(--gray)"
          fontWeight="500"
          fontStretch="normal"
          declaredDisplay="block"
        >
          Think
        </StyledWorkflowComponentHeading>
      </ThinkWrapper>
      <StyledIdeaBox>
        <StyledIdeaBoxP
          fontFamily="Poppins"
          fontSize="40px"
          lineHeight="2.48"
          color="var(--black)"
        >
          Idea
        </StyledIdeaBoxP>
      </StyledIdeaBox>
      <StyledThinkTextWrapper>
        <StyledThinkTextWrapperH3
          fontFamily="LibreBaskerville"
          fontSize="45px"
          lineHeight="1.25"
          color="var(--gray)"
          letterSpacing="-0.94px"
        >
          Thinking <span>Process</span>
        </StyledThinkTextWrapperH3>

        <StyledThinkTextParagraph
          fontFamily="Poppins"
          fontSize="12px"
          lineHeight="1.5"
          color="var(--black)"
          letterSpacing="2px"
          declaredMargin="27px 0 0 0"
          declaredDisplay="block"
        >
          Our ultimate goal with every project us to come up with a solution
          based design approach to help our clients solve real cases and achieve
          business needs.
        </StyledThinkTextParagraph>
        <StyledThinkTextParagraph
          fontFamily="Poppins"
          fontSize="12px"
          lineHeight="1.5"
          color="var(--black)"
          letterSpacing="2px"
          declaredMargin="27px 0 0 0"
          declaredDisplay="block"
        >
          For this to happen, many ideas and hypotheses need to be generated and
          integrated upon. Creative thinking inspires ideas while ideas empower
          change.
        </StyledThinkTextParagraph>
      </StyledThinkTextWrapper>
    </StyledWorkflowComponentWrapper>
  )
}

export default Think
