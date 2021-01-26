import React from "react"

import WhatWeDoElement from "./WhatWeDoElement"
import OurWorkflow from "./OurWorkflow"

import {
  StyledSection,
  SectionInfoTextWrapper,
  ContentWrapper,
} from "./StyledWhatWeDo"

const WhatWeDo = () => {
  return (
    <StyledSection>
      <SectionInfoTextWrapper>
        <h3>What we do</h3>
        <p>
          A strategic and tactical approach is essential for long-term goals,
          but what’s even more important is keeping deadlines and promises. Our
          work gets results and we never hide behind paperwork.
        </p>
      </SectionInfoTextWrapper>
      <ContentWrapper>
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
      </ContentWrapper>
      <OurWorkflow />
    </StyledSection>
  )
}

export default WhatWeDo
