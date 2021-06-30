import React from "react"
import { StructuredText } from "react-datocms"

import { StyledWorkflowComponentWrapper } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentWrapper"
import { StyledWorkflowComponentHeading } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentHeading"
import { StyledWorkflowComponentGreenSpan } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentGreenSpan"

import { StyledArrow } from "../../../atoms/Services/Implementation/StyledArrow"
import { StyledArrowWrapper } from "../../../atoms/Services/Implementation/StyledArrowWrapper"
import { StyledCommunicationWithTheClient } from "../../../atoms/Services/Implementation/StyledCommunicationWithTheClient"
import { StyledCommunicationWithTheClientP } from "../../../atoms/Services/Implementation/StyledCommunicationWithTheClientP"
import { StyledImplementationContentWrapper } from "../../../atoms/Services/Implementation/StyledImplementationContentWrapper"
import { StyledImplementationUl } from "../../../atoms/Services/Implementation/StyledImplementationUl"
import { StyledListWrapper } from "../../../atoms/Services/Implementation/StyledListWrapper"
import { StyledLongLastingWrapper } from "../../../atoms/Services/Implementation/StyledLongLastingWrapper"
import { StyledLongLastingWrapperP } from "../../../atoms/Services/Implementation/StyledLongLastingWrapperP"
import { ArrowDown } from "../../../atoms/icons/Icons"

const Implementation = ({
  howWeWorkImplementationNumber,
  howWeWorkImplementationTitle,
  howWeWorkImplementationCtaText,
  howWeWorkImplementationShortParagraph,
  howWeWorkImplementationList,
}) => {
  return (
    <StyledWorkflowComponentWrapper
      mediaQueriesDirection={true}
      hasAlignItems={true}
      hasPaddingTop={112}
      mediaQueriesAlign={true}
    >
      <div>
        <StyledWorkflowComponentGreenSpan
          fontSize="14px"
          lineHeight="2.12"
          color="var(--accent)"
          letterSpacing="0.35em"
          fontWeight="400"
        >
          ({howWeWorkImplementationNumber})
        </StyledWorkflowComponentGreenSpan>
        <StyledWorkflowComponentHeading
          fontSize="76px"
          hasMediaQueryFont
          lineHeight="1.24"
          color="var(--dark-bg)"
          fontWeight="400"
          declaredDisplay="block"
        >
          <StructuredText data={howWeWorkImplementationTitle} />
        </StyledWorkflowComponentHeading>
      </div>
      <StyledListWrapper>
        <StructuredText data={howWeWorkImplementationList} />
      </StyledListWrapper>
      <StyledImplementationContentWrapper>
        <StyledCommunicationWithTheClient>
          <StyledCommunicationWithTheClientP
            fontFamily="Poppins"
            fontSize="28px"
            lineHeight="1.5"
            color="var(--dark-bg)"
            declaredDisplay="block"
          >
            <StructuredText data={howWeWorkImplementationShortParagraph} />
          </StyledCommunicationWithTheClientP>
        </StyledCommunicationWithTheClient>
        <StyledLongLastingWrapper>
          <StyledArrowWrapper>
            <ArrowDown margin="0 13px 0 0" title="Arrow pointing down" />
            <ArrowDown margin="0 13px" title="Arrow pointing down" />
            <ArrowDown margin="0 0 0 13px" title="Arrow pointing down" />
          </StyledArrowWrapper>
          <StyledLongLastingWrapperP
            fontFamily="Poppins"
            fontSize="40px"
            lineHeight="1.5"
            color="var(--dark-bg)"
            declaredDisplay="block"
          >
            <StructuredText data={howWeWorkImplementationCtaText} />
          </StyledLongLastingWrapperP>
        </StyledLongLastingWrapper>
      </StyledImplementationContentWrapper>
    </StyledWorkflowComponentWrapper>
  )
}

export default Implementation
