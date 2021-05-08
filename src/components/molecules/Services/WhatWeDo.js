import React from "react"

import WhatWeDoElement from "./WhatWeDoElement"
import OurWorkflow from "./OurWorkflow"

import { StyledWhatWeDoSection } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoSection"
import { StyledWhatWeDoP } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoP"
import { StyledWhatWeDoH3 } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoH3"
import { StyledH3Wrapper } from "../../atoms/Services/WhatWeDo/StyledH3Wrapper"
import { StyledWhatWeDoInfoTextWrapper } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoInfoTextWrapper"
import { StyledWhatWeDoContentWrapper } from "../../atoms/Services/WhatWeDo/StyledWhatWeDoContentWrapper"

const WhatWeDo = ({ imagesData }) => {
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
            What we do
          </StyledWhatWeDoH3>
        </StyledH3Wrapper>
        <StyledWhatWeDoP
          fontFamily="JetBrains Mono"
          fontSize="18px"
          lineHeight="1.28"
          letterSpacing="2px"
          color="var(--dark-bg)"
          letterSpacing="2.57px"
          fontWeight="500"
        >
          A strategic and tactical approach is essential for long-term goals,
          but what’s even more important is keeping deadlines and promises. Our
          work gets results and we never hide behind paperwork.
        </StyledWhatWeDoP>
      </StyledWhatWeDoInfoTextWrapper>
      <StyledWhatWeDoContentWrapper>
        <WhatWeDoElement
          id="design"
          title="Design"
          image={imagesData.designImage}
          content="A strategic and tactical approach is essential 
          for long-term goals, but what’s even more important is 
          keeping deadlines and promises. Our work gets results and 
          we never hide behind paperwork."
          swap={false}
          design
        />
        <WhatWeDoElement
          id="development"
          title="Development"
          image={imagesData.developmentImage}
          content="Developing websites is about so 
          much more than marketing. It’s also about 
          aesthetics. For us, your site is the face of 
          your company. Let’s make it stunning."
          swap={true}
        />
        <WhatWeDoElement
          id="marketing"
          title="Marketing"
          image={imagesData.marketingImage}
          content="Developing websites is about 
          so much more than marketing. It’s also about aesthetics
          . For us, your site is the face of your company. Let’s make it stunning."
          swap={false}
        />
        <WhatWeDoElement
          id="strategy"
          title="Strategy"
          image={imagesData.strategyImage}
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
