import React from "react"
import { StructuredText } from "react-datocms"

import { StyledWorkflowComponentWrapper } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentWrapper"
import { StyledWorkflowComponentHeading } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentHeading"
import { StyledWorkflowComponentGreenSpan } from "../../../atoms/Services/WorkflowComponent/StyledWorkflowComponentGreenSpan"

import { StyledBsTriangle } from "../../../atoms/Services/Create/StyledBsTriangle"
import { StyledCreateTextH3 } from "../../../atoms/Services/Create/StyledCreateTextH3"
import { StyledCreateTextP } from "../../../atoms/Services/Create/StyledCreateTextP"
import { StyledCreateTextWrapper } from "../../../atoms/Services/Create/StyledCreateTextWrapper"
import { StyledSpanElipse } from "../../../atoms/Services/Create/StyledSpanElipse"
import { StyledSpanElipseP } from "../../../atoms/Services/Create/StyledSpanElipseP"
import { StyledSpanElipseWrapper } from "../../../atoms/Services/Create/StyledSpanElipseWrapper"
import { CreateWrapper } from "./CreateWrapper"

const Create = ({
  howWeWorkCreatingNumber,
  howWeWorkCreatingTitle,
  howWeWorkCreatingParagraph,
  howWeWorkCreatingTitleOverParagraph,
}) => {
  return (
    <StyledWorkflowComponentWrapper
      notFlexDirection={true}
      hasAlignItems={true}
      hasPaddingTop={165}
      hasJustifyContent={true}
      mediaQueriesDirection={true}
      mediaQueriesAlign={true}
    >
      <CreateWrapper>
        <StyledWorkflowComponentGreenSpan
          fontSize="14px"
          lineHeight="2.12"
          color="var(--accent)"
          letterSpacing="0.35em"
          fontWeight="400"
        >
          ({howWeWorkCreatingNumber})
        </StyledWorkflowComponentGreenSpan>
        <StyledWorkflowComponentHeading
          fontSize="76px"
          hasMediaQueryFont
          lineHeight="1.24"
          color="var(--dark-bg)"
          fontWeight="400"
          declaredDisplay="block"
        >
          <StructuredText data={howWeWorkCreatingTitle} />
        </StyledWorkflowComponentHeading>
      </CreateWrapper>
      <StyledCreateTextWrapper>
        <StyledCreateTextH3
          fontSize="40px"
          lineHeight="1.5"
          declaredDisplay="block"
        >
          <StructuredText data={howWeWorkCreatingTitleOverParagraph} />
          <span>
            <StyledBsTriangle hasMarginLeft={12}></StyledBsTriangle>
          </span>
          <span>
            <StyledBsTriangle hasMarginLeft={4}></StyledBsTriangle>
          </span>
        </StyledCreateTextH3>

        <StyledCreateTextP
          declaredpadding="24px 0 0 0"
          fontFamily="Poppins"
          fontSize="12px"
          lineHeight="1.5"
          letterSpacing="2px"
          color="var(--black)"
          declaredDisplay="block"
        >
          <StructuredText data={howWeWorkCreatingParagraph} />
        </StyledCreateTextP>
        <StyledSpanElipseWrapper>
          <StyledSpanElipse />
          <StyledSpanElipseP
            fontFamily="Poppins"
            fontSize="28px"
            lineHeight="1.71"
            color="#090909"
          >
            Product creation
          </StyledSpanElipseP>
        </StyledSpanElipseWrapper>
      </StyledCreateTextWrapper>
    </StyledWorkflowComponentWrapper>
  )
}

export default Create
