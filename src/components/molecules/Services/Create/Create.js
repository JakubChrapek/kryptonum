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
        <StyledWorkflowComponentGreenSpan>
          (01)
        </StyledWorkflowComponentGreenSpan>
        <StyledWorkflowComponentHeading>Create</StyledWorkflowComponentHeading>
      </div>
      <StyledCreateTextWrapper>
        <StyledCreateTextH3>
          Digital, Brand, Content, UX Strategy
          <span>
            <StyledBsTriangle hasMarginLeft={12}></StyledBsTriangle>
          </span>
          <span>
            <StyledBsTriangle hasMarginLeft={4}></StyledBsTriangle>
          </span>
        </StyledCreateTextH3>

        <StyledCreateTextP>
          To succeed, every digital product has to be aesthetically appealing,
          functional, robust, distinctive and memorable. To ensure that the
          right balance of these components is maintained we alway stain in
          close contact with the client and address every project holistically.
        </StyledCreateTextP>
        <StyledSpanElipseWrapper>
          <StyledSpanElipse></StyledSpanElipse>
          <StyledSpanElipseP>Product creating</StyledSpanElipseP>
        </StyledSpanElipseWrapper>
      </StyledCreateTextWrapper>
    </StyledWorkflowComponentWrapper>
  )
}

export default Create
