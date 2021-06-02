import React from "react"

import Learn from "./Learn/Learn"
import Think from "./Think/Think"
import Create from "./Create/Create"
import Implementation from "./Implementation/Implementation"
import { StructuredText } from "react-datocms"

import { StyledOurWorkflowWrapper } from "../../atoms/Services/OurWorkflow/StyledOurWorkflowWrapper"
import { StyledOurWorkflowWrapperDiv } from "../../atoms/Services/OurWorkflow/StyledOurWorkflowWrapperDiv"
import { StyledOurWorkflowWrapperH2 } from "../../atoms/Services/OurWorkflow/StyledOurWorkflowWrapperH2"
import {
  CURSOR_COLORS,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import styled from "styled-components"

const OurWorkflow = ({
  howWeWorkSectionTitle,
  howWeWorkList,
  howWeWorkLearnTitle,
  howWeWorkLearnNumber,
  howWeWorkLearnTitleOverList,
  howWeWorkThinkingParagraph,
  howWeWorkThinkingNumber,
  howWeWorkThinkingTitle,
  howWeWorkThinkingTextInCircle,
  howWeWorkThinkingTitleOverText,
  howWeWorkCreatingNumber,
  howWeWorkCreatingTitle,
  howWeWorkCreatingParagraph,
  howWeWorkCreatingTitleOverParagraph,
  howWeWorkImplementationNumber,
  howWeWorkImplementationTitle,
  howWeWorkImplementationCtaText,
  howWeWorkImplementationShortParagraph,
  howWeWorkImplementationList,
}) => {
  const dispatchCursor = useCursorDispatchContext()
  const handleOnMouseEnter = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.DARK,
    })
  }
  return (
    <StyledOurWorkflowWrapper onMouseEnter={handleOnMouseEnter}>
      <StyledOurWorkflowWrapperH2
        fontFamily="Poppins"
        fontSize="40px"
        lineHeight="1.28"
        color="var(--black)"
        declaredMargin="0 0 124px 0"
      >
        <StructuredText data={howWeWorkSectionTitle} />
      </StyledOurWorkflowWrapperH2>
      <StyledOurWorkflowWrapperDiv>
        <Learn
          howWeWorkList={howWeWorkList}
          howWeWorkLearnTitle={howWeWorkLearnTitle}
          howWeWorkLearnNumber={howWeWorkLearnNumber}
          howWeWorkLearnTitleOverList={howWeWorkLearnTitleOverList}
        />
        <Think
          howWeWorkThinkingParagraph={howWeWorkThinkingParagraph}
          howWeWorkThinkingNumber={howWeWorkThinkingNumber}
          howWeWorkThinkingTitle={howWeWorkThinkingTitle}
          howWeWorkThinkingTextInCircle={howWeWorkThinkingTextInCircle}
          howWeWorkThinkingTitleOverText={howWeWorkThinkingTitleOverText}
        />
        <Create
          howWeWorkCreatingNumber={howWeWorkCreatingNumber}
          howWeWorkCreatingTitle={howWeWorkCreatingTitle}
          howWeWorkCreatingParagraph={howWeWorkCreatingParagraph}
          howWeWorkCreatingTitleOverParagraph={
            howWeWorkCreatingTitleOverParagraph
          }
        />
        <Implementation
          howWeWorkImplementationNumber={howWeWorkImplementationNumber}
          howWeWorkImplementationTitle={howWeWorkImplementationTitle}
          howWeWorkImplementationCtaText={howWeWorkImplementationCtaText}
          howWeWorkImplementationShortParagraph={
            howWeWorkImplementationShortParagraph
          }
          howWeWorkImplementationList={howWeWorkImplementationList}
        />
      </StyledOurWorkflowWrapperDiv>
    </StyledOurWorkflowWrapper>
  )
}

export default OurWorkflow
