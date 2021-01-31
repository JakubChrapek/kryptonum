import React from "react"

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

const Implementation = () => {
  return (
    <StyledWorkflowComponentWrapper
      mediaQueriesDirection={true}
      hasAlignItems={true}
      hasPaddingTop={78}
      mediaQueriesAlign={true}
    >
      <div>
        <StyledWorkflowComponentGreenSpan implementation={true}>
          (01)
        </StyledWorkflowComponentGreenSpan>
        <StyledWorkflowComponentHeading hasMediaQueryFont={true}>
          Implementation
        </StyledWorkflowComponentHeading>
      </div>
      <StyledListWrapper>
        <StyledImplementationUl>
          <li>UX Architecture </li>
          <li>Visual concepts</li>
          <li>Interactions</li>
          <li>Development</li>
          <li>Testing</li>
          <li>Project Birth</li>
        </StyledImplementationUl>
      </StyledListWrapper>
      <StyledImplementationContentWrapper>
        <StyledCommunicationWithTheClient>
          <StyledCommunicationWithTheClientP>
            Communication with the client during whole process
          </StyledCommunicationWithTheClientP>
        </StyledCommunicationWithTheClient>
        <StyledLongLastingWrapper>
          <StyledArrowWrapper>
            <StyledArrow
              size="92px"
              title="Arrow pointing down"
              color="#00EF8B"
            />
            <StyledArrow
              size="92px"
              title="Arrow pointing down"
              color="#00EF8B"
            />
            <StyledArrow
              size="92px"
              title="Arrow pointing down"
              color="#00EF8B"
            />
          </StyledArrowWrapper>
          <StyledLongLastingWrapperP>
            Long-lasting Collaboration
          </StyledLongLastingWrapperP>
        </StyledLongLastingWrapper>
      </StyledImplementationContentWrapper>
    </StyledWorkflowComponentWrapper>
  )
}

export default Implementation
