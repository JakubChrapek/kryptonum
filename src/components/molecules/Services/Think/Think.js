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
      hasPaddingTop={117}
      mediaQueriesDirection={true}
      mediaQueriesAlign={true}
    >
      <ThinkWrapper>
        <StyledWorkflowComponentGreenSpan
          fontSize="14px"
          lineHeight="2.12"
          color="var(--accent)"
          letterSpacing="0.35em"
          fontWeight="400"
        >
          ({howWeWorkThinkingNumber})
        </StyledWorkflowComponentGreenSpan>
        <StyledWorkflowComponentHeading
          fontSize="76px"
          hasMediaQueryFont
          lineHeight="1.24"
          color="var(--dark-bg)"
          fontWeight="400"
          declaredDisplay="block"
        >
          <StructuredText data={howWeWorkThinkingTitle} />
        </StyledWorkflowComponentHeading>
      </ThinkWrapper>
      <StyledIdeaBox>
        <StyledIdeaBoxP
          fontFamily="Poppins"
          fontSize="24px"
          lineHeight="1"
          color="var(--dark-bg)"
        >
          {howWeWorkThinkingTextInCircle}
        </StyledIdeaBoxP>
      </StyledIdeaBox>
      <StyledThinkTextWrapper>
        <StyledThinkTextWrapperH3
          fontSize="40px"
          lineHeight="1.5"
          color="var(--accent)"
        >
          <StructuredText data={howWeWorkThinkingTitleOverText} />
        </StyledThinkTextWrapperH3>

        <StyledThinkTextParagraph
          fontFamily="Poppins"
          fontSize="12px"
          lineHeight="1.5"
          color="var(--dark-bg)"
          letterSpacing="0.16em"
          declaredMargin="24px 0 0 0"
          declaredDisplay="block"
        >
          <StructuredText data={howWeWorkThinkingParagraph} />
        </StyledThinkTextParagraph>
      </StyledThinkTextWrapper>
    </StyledWorkflowComponentWrapper>
  )
}

export default Think
