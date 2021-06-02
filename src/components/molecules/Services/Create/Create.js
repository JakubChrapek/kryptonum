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
      hasPaddingTop={156}
      hasJustifyContent={true}
      mediaQueriesDirection={true}
      mediaQueriesAlign={true}
    >
      <CreateWrapper>
        <StyledWorkflowComponentGreenSpan
          fontFamily="JetBrains Mono"
          fontSize="18px"
          lineHeight="1.28"
          color="var(--accent)"
          letterSpacing="2.57px"
          fontWeight="500"
        >
          (0{howWeWorkCreatingNumber})
        </StyledWorkflowComponentGreenSpan>
        <StyledWorkflowComponentHeading
          fontFamily="LibreBaskerville"
          fontSize="88px"
          hasMediaQueryFont
          lineHeight="1.24"
          color="var(--gray)"
          letterSpacing="-1.75px"
          fontWeight="500"
          fontStretch="normal"
          declaredDisplay="block"
        >
          <StructuredText data={howWeWorkCreatingTitle} />
        </StyledWorkflowComponentHeading>
      </CreateWrapper>
      <StyledCreateTextWrapper>
        <StyledCreateTextH3
          fontFamily="LibreBaskerville"
          declaredpadding="0 0 42px 0"
          fontSize="45px"
          lineHeight="1.2"
          letterSpacing="-0.94px"
          color="var(--gray)"
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
          declaredpadding="0 0 58px 0"
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
