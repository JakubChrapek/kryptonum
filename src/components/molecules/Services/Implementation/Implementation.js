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
      hasPaddingTop={183}
      mediaQueriesAlign={true}
    >
      <div>
        <StyledWorkflowComponentGreenSpan
          fontFamily="JetBrains Mono"
          fontSize="18px"
          lineHeight="1.28"
          color="var(--accent)"
          letterSpacing="2.57px"
          fontWeight="500"
          implementation={true}
        >
          (0{howWeWorkImplementationNumber})
        </StyledWorkflowComponentGreenSpan>
        <StyledWorkflowComponentHeading
          fontFamily="LibreBaskerville"
          fontSize="88px"
          lineHeight="1.24"
          color="var(--gray)"
          letterSpacing="-0.94px"
          fontWeight="500"
          fontStretch="normal"
          declaredDisplay="block"
          hasMediaQueryFont={true}
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
            lineHeight="1.71"
            color="#090909"
            declaredDisplay="block"
          >
            <StructuredText data={howWeWorkImplementationShortParagraph} />
          </StyledCommunicationWithTheClientP>
        </StyledCommunicationWithTheClient>
        <StyledLongLastingWrapper>
          <StyledArrowWrapper>
            <StyledArrow
              size="76px"
              title="Arrow pointing down"
              color="#00EF8B"
            />
            <StyledArrow
              size="76px"
              title="Arrow pointing down"
              color="#00EF8B"
            />
            <StyledArrow
              size="76px"
              title="Arrow pointing down"
              color="#00EF8B"
            />
          </StyledArrowWrapper>
          <StyledLongLastingWrapperP
            fontFamily="Poppins"
            fontSize="40px"
            lineHeight="2.48"
            color="var(--black)"
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
