import React from "react"
import { StructuredText } from "react-datocms"

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
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const StyledVisionElementsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const StyledFeedbackWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  max-width: 1366px;
  margin: 113px auto 0;
`

const TitleWrapper = styled.div`
  > p {
    color: var(--accent);
    font-size: 14px;
    line-height: 2.12;
    letter-spacing: 0.35em;
  }
`
const TextWrapper = styled.div`
  max-width: 664px;
  > p {
    color: var(--white);
    font-size: 16px;
    line-height: 1.5;
  }
`

const OurVision = ({
  ourValuesTitle,
  ourValuesFeature,
  ourValuesCenteredClaim,
  ourValuesPhoto,
}) => {
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
        <StyledOurVisionHeroTextWrapper>
          <StyledOurVisionHeroTextP
            fontFamily="Poppins"
            fontSize="40px"
            lineHeight="1.5"
            color="var(--light-gray)"
          >
            <StructuredText data={ourValuesCenteredClaim} />
          </StyledOurVisionHeroTextP>
        </StyledOurVisionHeroTextWrapper>
        <StyledVisionElementsWrapper>
          {ourValuesFeature
            .slice(0, ourValuesFeature.length - 1)
            .map((feature, i) => (
              <OurVisionElement
                leftBoxText={feature.wartoscTytul}
                rightBoxText={feature.wartoscTresc}
                elementNumber={i + 1}
                marginBottom={i === ourValuesFeature.length - 2 && "66px"}
              />
            ))}
          <GatsbyImage image={ourValuesPhoto.gatsbyImageData} />
        </StyledVisionElementsWrapper>
      </StyledOurVisionWrapper>
      <StyledFeedbackWrapper>
        <TitleWrapper>
          <StructuredText
            data={ourValuesFeature[ourValuesFeature.length - 1].wartoscTytul}
          />
        </TitleWrapper>
        <TextWrapper>
          <StructuredText
            data={ourValuesFeature[ourValuesFeature.length - 1].wartoscTresc}
          />
        </TextWrapper>
      </StyledFeedbackWrapper>
    </StyledOurVisionSection>
  )
}

export default OurVision
