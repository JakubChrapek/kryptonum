import React from "react"
import { VscArrowDown } from "react-icons/vsc"
import { StructuredText } from "react-datocms"

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
import { StyledLearnHeadingWrapper } from "./StyledLearnHeadingWrapper"

const Learn = ({
  howWeWorkList,
  howWeWorkLearnTitle,
  howWeWorkLearnNumber,
  howWeWorkLearnTitleOverList,
}) => {
  return (
    <StyledWorkflowComponentWrapper
      mediaQueriesAlign={true}
      mediaQueriesDirection={true}
    >
      <StyledLearnWrapper>
        <StyledLearnHeadingWrapper>
          <StyledWorkflowComponentGreenSpan
            fontSize="14px"
            lineHeight="2.12"
            color="var(--accent)"
            letterSpacing="0.35em"
            fontWeight="400"
          >
            ({howWeWorkLearnNumber})
          </StyledWorkflowComponentGreenSpan>
          <StyledWorkflowComponentHeading
            fontSize="76px"
            hasMediaQueryFont
            lineHeight="1.24"
            color="var(--dark-bg)"
            fontWeight="400"
            declaredDisplay="block"
          >
            <StructuredText data={howWeWorkLearnTitle} />
          </StyledWorkflowComponentHeading>
        </StyledLearnHeadingWrapper>
        <StyledLearnTextWrapper>
          <StyledLearnTextWrapperH3
            fontSize="40px"
            lineHeight="1.5"
            declaredpadding="43px 0 0 0"
          >
            <span>
              <StructuredText data={howWeWorkLearnTitleOverList} />
            </span>
          </StyledLearnTextWrapperH3>

          <StyledLearnTextWrapperUl>
            <StructuredText data={howWeWorkList} />
          </StyledLearnTextWrapperUl>
        </StyledLearnTextWrapper>
      </StyledLearnWrapper>
    </StyledWorkflowComponentWrapper>
  )
}

export default Learn
