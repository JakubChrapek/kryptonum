import React from "react"

import WhatWeDoElement from "./WhatWeDoElement"
import OurWorkflow from "./OurWorkflow"

import { StyledWhatWeDoSection } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoSection"
import { StyledWhatWeDoP } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoP"
import { StyledWhatWeDoH3 } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoH3"
import { StyledWhatWeDoInfoTextWrapper } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoInfoTextWrapper"
import { StyledWhatWeDoContentWrapper } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoContentWrapper"

const WhatWeDo = () => {
  return (
    <StyledWhatWeDoSection>
      <StyledWhatWeDoInfoTextWrapper>
        <StyledWhatWeDoH3>What we do</StyledWhatWeDoH3>
        <StyledWhatWeDoP>
          A strategic and tactical approach is essential for long-term goals,
          but what’s even more important is keeping deadlines and promises. Our
          work gets results and we never hide behind paperwork.
        </StyledWhatWeDoP>
      </StyledWhatWeDoInfoTextWrapper>
      <StyledWhatWeDoContentWrapper>
        <WhatWeDoElement
          title="Design"
          image="images"
          content="A strategic and tactical approach is essential 
          for long-term goals, but what’s even more important is 
          keeping deadlines and promises. Our work gets results and 
          we never hide behind paperwork."
          swap={false}
        />
        <WhatWeDoElement
          title="Development"
          image="images"
          content="Developing websites is about so 
          much more than marketing. It’s also about 
          aesthetics. For us, your site is the face of 
          your company. Let’s make it stunning."
          swap={true}
        />
        <WhatWeDoElement
          title="Marketing"
          image="images"
          content="Developing websites is about 
          so much more than marketing. It’s also about aesthetics
          . For us, your site is the face of your company. Let’s make it stunning."
          swap={false}
        />
        <WhatWeDoElement
          title="Strategy"
          image="images"
          content="Developing websites is about so much more than marketing. 
          It’s also about aesthetics. For us, your site is the face of your company. 
          Let’s make it stunning."
          swap={true}
        />
      </StyledWhatWeDoContentWrapper>
      <OurWorkflow />
    </StyledWhatWeDoSection>
  )
}

export default WhatWeDo
