import React from "react"
import { IoIosArrowRoundDown } from "react-icons/io"
import {
  WorkflowComponentWrapper,
  StyledGreenSpan,
  StyledHeading,
} from "../StyledWorkflowComponents"
import {
  ElipseWrapper,
  LearnWrapper,
  LearnTextWrapper,
  HeadingWrapper,
  ArrowWrapper,
} from "./StyledLearn"

const Learn = () => {
  return (
    <WorkflowComponentWrapper
      mediaQueriesAlign={true}
      mediaQueriesDirection={true}
    >
      <LearnWrapper>
        <HeadingWrapper>
          <StyledGreenSpan>(01)</StyledGreenSpan>
          <StyledHeading>Learn</StyledHeading>
        </HeadingWrapper>
        <LearnTextWrapper>
          <h3>
            <span>Briefing</span> Research
          </h3>

          <ul>
            <li>Project Goals</li>
            <li>Target Audience</li>
            <li>Market</li>
            <li>Competitors</li>
            <li>Functional Specifications</li>
            <li>Content Requirements</li>
          </ul>
        </LearnTextWrapper>
        <ElipseWrapper>
          <span>
            <span></span>
          </span>
        </ElipseWrapper>
      </LearnWrapper>
      <ArrowWrapper>
        <IoIosArrowRoundDown
          size="82px"
          title="Arrow pointing down"
          color="#f7f7f7"
        />
      </ArrowWrapper>
    </WorkflowComponentWrapper>
  )
}

export default Learn
