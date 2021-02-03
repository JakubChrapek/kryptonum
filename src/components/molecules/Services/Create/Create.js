import React from "react"

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

const Create = () => {
  return (
    <StyledWorkflowComponentWrapper
      notFlexDirection={true}
      hasAlignItems={true}
      hasPaddingTop={156}
      hasJustifyContent={true}
      mediaQueriesDirection={true}
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
        >
          (01)
        </StyledWorkflowComponentGreenSpan>
        <StyledWorkflowComponentHeading
          fontFamily="LibreBaskerville"
          fontSize="70px"
          lineHeight="1.24"
          color="var(--gray)"
          letterSpacing="-1.75px"
          fontWeight="500"
          fontStretch="normal"
          declaredDisplay="block"
        >
          Create
        </StyledWorkflowComponentHeading>
      </div>
      <StyledCreateTextWrapper>
        <StyledCreateTextH3
          fontFamily="LibreBaskerville"
          declaredPadding="0 84px 42px 0"
          fontSize="36px"
          lineHeight="1.25"
          letterSpacing="-0.94px"
          color="var(--gray)"
          declaredMargin="0 auto"
          declaredDisplay="block"
        >
          Digital, Brand, Content, UX Strategy
          <span>
            <StyledBsTriangle hasMarginLeft={12}></StyledBsTriangle>
          </span>
          <span>
            <StyledBsTriangle hasMarginLeft={4}></StyledBsTriangle>
          </span>
        </StyledCreateTextH3>

        <StyledCreateTextP
          declaredPadding="0 60px 58px 0"
          fontFamily="Poppins"
          fontSize="12px"
          lineHeight="1.5"
          letterSpacing="2px"
          color="var(--black)"
          declaredDisplay="block"
        >
          To succeed, every digital product has to be aesthetically appealing,
          functional, robust, distinctive and memorable. To ensure that the
          right balance of these components is maintained we alway stain in
          close contact with the client and address every project holistically.
        </StyledCreateTextP>
        <StyledSpanElipseWrapper>
          <StyledSpanElipse></StyledSpanElipse>
          <StyledSpanElipseP
            fontFamily="Poppins"
            fontSize="28px"
            lineHeight="1.71"
            color="#090909"
          >
            Product creating
          </StyledSpanElipseP>
        </StyledSpanElipseWrapper>
      </StyledCreateTextWrapper>
    </StyledWorkflowComponentWrapper>
  )
}

export default Create
