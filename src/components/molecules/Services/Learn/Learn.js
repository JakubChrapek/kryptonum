import React from "react"
import { VscArrowDown } from "react-icons/vsc"

import { StyledWorkflowComponentWrapper } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentWrapper"
import { StyledWorkflowComponentHeading } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentHeading"
import { StyledWorkflowComponentGreenSpan } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentGreenSpan"

import { StyledLearnWrapper } from "../../../atoms/Services/Learn/StyledLearnWrapper"
import { StyledArrowWrapper } from "../../../atoms/Services/Learn/StyledArrowWrapper"
import { StyledElipseWrapper } from "../../../atoms/Services/Learn/StyledElipseWrapper"
import { StyledElipseWrapperSpan } from "../../../atoms/Services/Learn/StyledElipseWrapperSpan"
import { StyledHeadingWrapper } from "../../../atoms/Services/Learn/StyledHeadingWrapper"
import { StyledLearnTextWrapper } from "../../../atoms/Services/Learn/StyledLearnTextWrapper"
import { StyledLearnTextWrapperH3 } from "../../../atoms/Services/Learn/StyledLearnTextWrapperH3"
import { StyledLearnTextWrapperUl } from "../../../atoms/Services/Learn/StyledLearnTextWrapperUl"

const Learn = () => {
  return (
    <StyledWorkflowComponentWrapper
      mediaQueriesAlign={true}
      mediaQueriesDirection={true}
    >
      <StyledLearnWrapper>
        <StyledHeadingWrapper>
          <StyledWorkflowComponentGreenSpan
            fontFamily="JetBrains Mono"
            fontSize="18px"
            lineHeight="1.28"
            color="var(--accent)"
            letterSpacing="2.57px"
            fontWeight="500"
          >
            (01)
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
            Learn
          </StyledWorkflowComponentHeading>
        </StyledHeadingWrapper>
        <StyledLearnTextWrapper>
          <StyledLearnTextWrapperH3
            fontFamily="LibreBaskerville"
            fontSize="45px"
            lineHeight="1.25"
            color="var(--gray)"
            declaredPadding="43px 0 0 0"
            letterSpacing="-0.94px"
          >
            <span>Briefing</span> Research
          </StyledLearnTextWrapperH3>

          <StyledLearnTextWrapperUl>
            <li>Project Goals</li>
            <li>Target Audience</li>
            <li>Market</li>
            <li>Competitors</li>
            <li>Functional Specifications</li>
            <li>Content Requirements</li>
          </StyledLearnTextWrapperUl>
        </StyledLearnTextWrapper>
        {/* <StyledElipseWrapper>
          <StyledElipseWrapperSpan>
            <span></span>
          </StyledElipseWrapperSpan>
        </StyledElipseWrapper> */}
      </StyledLearnWrapper>
      <StyledArrowWrapper>
        <VscArrowDown size="92px" title="Arrow pointing down" color="#f7f7f7" />
      </StyledArrowWrapper>
    </StyledWorkflowComponentWrapper>
  )
}

export default Learn
