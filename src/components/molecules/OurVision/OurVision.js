import React from "react"

import OurVisionElement from "../OurVisionElement/OurVisionElement"

import { StyledOurVisionH2 } from "../../atoms/OurVision/StyledOurVisionH2"
import { StyledOurVisionHeroTextP } from "../../atoms/OurVision/StyledOurVisionHeroTextP"
import { StyledOurVisionHeroTextWrapper } from "../../atoms/OurVision/StyledOurVisionHeroTextWrapper"
import { StyledOurVisionSection } from "../../atoms/OurVision/StyledOurVisionSection"
import { StyledOurVisionWrapper } from "../../atoms/OurVision/StyledOurVisionWrapper"

const OurVision = () => {
  return (
    <StyledOurVisionSection>
      <StyledOurVisionWrapper>
        <StyledOurVisionH2
          fontSize="40px"
          lineHeight="1.28"
          color="var(--white)"
          declaredPadding="0 0 2px 0"
          fontFamily="Poppins"
        >
          Nasze wartości
        </StyledOurVisionH2>
        <StyledOurVisionHeroTextWrapper>
          <StyledOurVisionHeroTextP
            fontFamily="Poppins"
            fontSize="40px"
            lineHeight="2.48"
            color="var(--white)"
            textAlign="center"
          >
            Czyli to, co sprawia, że wyskakujemy rano z&nbsp;łóżka myśląc
            o&nbsp;kolejnym dniu w&nbsp;pracy. Naprawdę!
          </StyledOurVisionHeroTextP>
        </StyledOurVisionHeroTextWrapper>
        <div>
          <OurVisionElement
            leftBoxText="Punktualność"
            rightBoxText="Stosujemy prostą zasadę - deadline rzecz święta. Rozumiemy, że własna strona internetowa jest ważnym narzędziem w&nbsp;twojej strategii marketingowej i&nbsp;że potrzebujesz jej jak najszybciej. Dlatego zawsze wywiązujemy się z&nbsp;terminów."
            elementNumber={1}
          />
          <OurVisionElement
            leftBoxText="Feedback. Więcej feedbacku!"
            rightBoxText="Wiemy, że nie każdy design lub projekt jest od samego początku idealny i&nbsp;jesteśmy ludźmi - czasem popełniamy błędy. Dlatego bardzo doceniamy Twoje komentarze. Dzięki nim każdy następny projekt strony internetowej jest jeszcze lepszy!"
            elementNumber={2}
          />
          <OurVisionElement
            leftBoxText="Powered by <br /> Creativity"
            rightBoxText="At Kryptonum, creativity is what drives the agency.
             It manifests itself through our management approach, 
             creation process and technological development.
              This is why each web project is unique, just like you."
            elementNumber={3}
          />
          <OurVisionElement
            leftBoxText="Obsessed with <br /> results"
            rightBoxText="We develop digital solutions, platforms and modules
             that have a real impact for our customers. We firmly believe that
              creating tailor-made digital projects is essential 
              to the success of tomorrow’s thriving businesses."
            elementNumber={4}
          />
        </div>
      </StyledOurVisionWrapper>
    </StyledOurVisionSection>
  )
}

export default OurVision
