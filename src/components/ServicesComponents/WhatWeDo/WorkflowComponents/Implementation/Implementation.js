import React from "react"

import {
  WorkflowComponentWrapper,
  StyledGreenSpan,
  StyledHeading,
} from "../StyledWorkflowComponents"

import {
  StyledImplementationUl,
  StyledListWrapper,
  StyledImplementationContentWrapper,
  ArrowWrapper,
  CommunicationWithTheClientWrapper,
  StyledArrow,
  LongLastingWrapper,
} from "./StyledImplementation"

const Implementation = () => {
  return (
    <WorkflowComponentWrapper hasAlignItems={true} hasPaddingTop={78}>
      <div>
        <StyledGreenSpan>(01)</StyledGreenSpan>
        <StyledHeading>Implementation</StyledHeading>
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
        <CommunicationWithTheClientWrapper>
          <p>Communication with the client during whole process</p>
        </CommunicationWithTheClientWrapper>
        <LongLastingWrapper>
          <ArrowWrapper>
            <StyledArrow
              size="82px"
              title="Arrow pointing down"
              color="#00EF8B"
            />
            <StyledArrow
              size="82px"
              title="Arrow pointing down"
              color="#00EF8B"
            />
            <StyledArrow
              size="82px"
              title="Arrow pointing down"
              color="#00EF8B"
            />
          </ArrowWrapper>
          <p>Long-lasting Collaboration</p>
        </LongLastingWrapper>
      </StyledImplementationContentWrapper>
    </WorkflowComponentWrapper>
  )
}

export default Implementation
