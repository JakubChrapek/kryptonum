import React from "react"

import OurVisionElement from "../OurVisionElement/OurVisionElement"

import { StyledOurVisionH2 } from "../../atoms/OurVision/StyledOurVisionH2"
import { StyledOurVisionHeroTextP } from "../../atoms/OurVision/StyledOurVisionHeroTextP"
import { StyledOurVisionHeroTextWrapper } from "../../atoms/OurVision/StyledOurVisionHeroTextWrapper"
import { StyledOurVisionSection } from "../../atoms/OurVision/StyledOurVisionSection"
import { StyledOurVisionWrapper } from "../../atoms/OurVision/StyledOurVisionWrapper"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

const OurVision = () => {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <StyledOurVisionSection
      onMouseEnter={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.FULL_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_COLOR",
          cursorColor: CURSOR_COLORS.LIGHT,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.SMALLER,
        })
      }}
    >
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
            o&nbsp;kolejnym dniu
            <br />
            w&nbsp;pracy. Naprawdę!
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
            leftBoxText="Kreatywny flow"
            rightBoxText="Kochamy kreatywność i&nbsp;to ona napędza większość naszych działań. Bez kreatywności nie mielibyśmy pojęcia jak stworzyć stronę internetową. Siedzielibyśmy tylko nad pustą kartką papieru czy przed białym ekranem komputera. Ale - o&nbsp;kreatywność trzeba dbać, dlatego wciąż szukamy nowych inspiracji, które pozwalają nam wyjść poza naszą strefę komfortu."
            elementNumber={3}
          />
        </div>
      </StyledOurVisionWrapper>
    </StyledOurVisionSection>
  )
}

export default OurVision
