import React from "react"

import {
  WorkflowComponentWrapper,
  StyledHeading,
  StyledGreenSpan,
} from "../StyledWorkflowComponents"
import {
  StyledCreateTextWrapper,
  StyledSpanElipse,
  SpanElipseWrapper,
  StyledBsTriangle,
} from "./StyledCreate"

const Create = () => {
  return (
    <WorkflowComponentWrapper
      notFlexDirection={true}
      hasAlignItems={true}
      hasPaddingTop={156}
      hasJustifyContent={true}
      mediaQueriesDirection={true}
      mediaQueriesAlign={true}
    >
      <div>
        <StyledGreenSpan>(01)</StyledGreenSpan>
        <StyledHeading>Create</StyledHeading>
      </div>
      <StyledCreateTextWrapper>
        <h3>
          Digital, Brand, Content, UX Strategy
          <span>
            <StyledBsTriangle hasMarginLeft={12}></StyledBsTriangle>
          </span>
          <span>
            <StyledBsTriangle hasMarginLeft={4}></StyledBsTriangle>
          </span>
        </h3>

        <p>
          To succeed, every digital product has to be aesthetically appealing,
          functional, robust, distinctive and memorable. To ensure that the
          right balance of these components is maintained we alway stain in
          close contact with the client and address every project holistically.
        </p>
        <SpanElipseWrapper>
          <StyledSpanElipse></StyledSpanElipse>
          <p>Product creating</p>
        </SpanElipseWrapper>
      </StyledCreateTextWrapper>
    </WorkflowComponentWrapper>
  )
}

export default Create
