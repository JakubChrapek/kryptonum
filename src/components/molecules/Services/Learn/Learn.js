import React from "react"
import { IoIosArrowRoundDown } from "react-icons/io"

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
          <StyledWorkflowComponentGreenSpan>
            (01)
          </StyledWorkflowComponentGreenSpan>
          <StyledWorkflowComponentHeading>Learn</StyledWorkflowComponentHeading>
        </StyledHeadingWrapper>
        <StyledLearnTextWrapper>
          <StyledLearnTextWrapperH3>
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
        <StyledElipseWrapper>
          <StyledElipseWrapperSpan>
            <span></span>
          </StyledElipseWrapperSpan>
        </StyledElipseWrapper>
      </StyledLearnWrapper>
      <StyledArrowWrapper>
        <IoIosArrowRoundDown
          size="82px"
          title="Arrow pointing down"
          color="#f7f7f7"
        />
      </StyledArrowWrapper>
    </StyledWorkflowComponentWrapper>
  )
}

export default Learn
