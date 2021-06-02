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
  imagesData,
  whatWeDoTitle,
  whatWeDoParagraph,
  websitesTitle,
  websitesParagraph,
  marketingTitle,
  marketingParagraph,
  strategyTitle,
  strategyParagraph,
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
      <StyledWhatWeDoInfoTextWrapper>
        <StyledH3Wrapper>
          <StyledWhatWeDoH3
            fontFamily="Poppins"
            fontSize="40px"
            lineHeight="1.28"
            letterSpacing="2px"
            color="var(--black)"
            declaredDisplay="block"
            letterSpacing="normal"
          >
            {whatWeDoTitle}
          </StyledWhatWeDoH3>
        </StyledH3Wrapper>
        <StyledWhatWeDoP data={whatWeDoParagraph} />
      </StyledWhatWeDoInfoTextWrapper>
      <StyledWhatWeDoContentWrapper>
        <WhatWeDoElement
          id="strony-internetowe"
          title={websitesTitle}
          image={imagesData.designImage}
          content={websitesParagraph}
          swap={false}
          design
        />
        <WhatWeDoElement
          id="marketing"
          title={marketingTitle}
          image={imagesData.developmentImage}
          content={marketingParagraph}
          swap={true}
        />
        <WhatWeDoElement
          id="social-media"
          title={strategyTitle}
          image={imagesData.marketingImage}
          content={strategyParagraph}
          swap={false}
        />
      </StyledWhatWeDoContentWrapper>
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
