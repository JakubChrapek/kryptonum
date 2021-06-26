import React from "react"
import { StructuredText } from "react-datocms"

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

const Think = ({
  howWeWorkThinkingParagraph,
  howWeWorkThinkingNumber,
  howWeWorkThinkingTitle,
  howWeWorkThinkingTextInCircle,
  howWeWorkThinkingTitleOverText,
}) => {
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
          fontSize="18px"
          lineHeight="1.28"
          color="var(--accent)"
          letterSpacing="2.57px"
          fontWeight="500"
        >
          (0{howWeWorkThinkingNumber})
        </StyledWorkflowComponentGreenSpan>
        <StyledWorkflowComponentHeading
          fontSize="88px"
          hasMediaQueryFont
          lineHeight="1.24"
          color="var(--gray)"
          fontWeight="500"
          fontStretch="normal"
          declaredDisplay="block"
        >
          <StructuredText data={howWeWorkThinkingTitle} />
        </StyledWorkflowComponentHeading>
      </ThinkWrapper>
      <StyledIdeaBox>
        <StyledIdeaBoxP
          fontFamily="Poppins"
          fontSize="40px"
          lineHeight="2.48"
          color="var(--black)"
        >
          {howWeWorkThinkingTextInCircle}
        </StyledIdeaBoxP>
      </StyledIdeaBox>
      <StyledThinkTextWrapper>
        <StyledThinkTextWrapperH3
          fontSize="45px"
          lineHeight="1.2"
          color="var(--gray)"
          letterSpacing="-0.94px"
        >
          <StructuredText data={howWeWorkThinkingTitleOverText} />
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
          <StructuredText data={howWeWorkThinkingParagraph} />
        </StyledThinkTextParagraph>
      </StyledThinkTextWrapper>
    </StyledWorkflowComponentWrapper>
  )
}

export default Think
