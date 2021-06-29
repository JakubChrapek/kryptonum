import React from "react"

import WhatWeDoElement from "./WhatWeDoElement"
import OurWorkflow from "./OurWorkflow"

import { StyledWhatWeDoSection } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoSection"
import { StyledWhatWeDoP } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoP"
import { StyledWhatWeDoH3 } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoH3"
import { StyledH3Wrapper } from "../../atoms/Services/WhatWeDo/StyledH3Wrapper"
import { StyledWhatWeDoInfoTextWrapper } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoInfoTextWrapper"
import { StyledWhatWeDoContentWrapper } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoContentWrapper"

const WhatWeDo = ({
  howWeWorkSectionTitle,
  howWeWorkList,
  howWeWorkThinkingParagraph,
  howWeWorkThinkingNumber,
  howWeWorkThinkingTitle,
  howWeWorkThinkingTextInCircle,
  howWeWorkThinkingTitleOverText,
  howWeWorkLearnTitle,
  howWeWorkLearnNumber,
  howWeWorkLearnTitleOverList,
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
  return (
    <StyledWhatWeDoSection>
      <OurWorkflow
        howWeWorkSectionTitle={howWeWorkSectionTitle}
        howWeWorkList={howWeWorkList}
        howWeWorkThinkingParagraph={howWeWorkThinkingParagraph}
        howWeWorkThinkingNumber={howWeWorkThinkingNumber}
        howWeWorkThinkingTitle={howWeWorkThinkingTitle}
        howWeWorkThinkingTextInCircle={howWeWorkThinkingTextInCircle}
        howWeWorkThinkingTitleOverText={howWeWorkThinkingTitleOverText}
        howWeWorkLearnTitle={howWeWorkLearnTitle}
        howWeWorkLearnNumber={howWeWorkLearnNumber}
        howWeWorkLearnTitleOverList={howWeWorkLearnTitleOverList}
        howWeWorkCreatingNumber={howWeWorkCreatingNumber}
        howWeWorkCreatingTitle={howWeWorkCreatingTitle}
        howWeWorkCreatingParagraph={howWeWorkCreatingParagraph}
        howWeWorkCreatingTitleOverParagraph={
          howWeWorkCreatingTitleOverParagraph
        }
        howWeWorkImplementationNumber={howWeWorkImplementationNumber}
        howWeWorkImplementationTitle={howWeWorkImplementationTitle}
        howWeWorkImplementationCtaText={howWeWorkImplementationCtaText}
        howWeWorkImplementationShortParagraph={
          howWeWorkImplementationShortParagraph
        }
        howWeWorkImplementationList={howWeWorkImplementationList}
      />
    </StyledWhatWeDoSection>
  )
}

export default WhatWeDo
