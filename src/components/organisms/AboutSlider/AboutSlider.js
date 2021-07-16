import React from "react"
import { StructuredText } from "react-datocms"

import { StyledFeaturedWrapper } from "../../molecules/FeaturedSection/FeaturedWrapper/StyledFeaturedWrapper"
import { StyledAboutSliderWrapper } from "../../atoms/AboutSlider/StyledAboutSliderWrapper"
import { StyledTextContentWrapper } from "../../atoms/AboutSlider/StyledTextContentWrapper"
import { StyledAboutSliderHeroParagraph } from "../../atoms/AboutSlider/StyledAboutSliderHeroParagraph"
import { StyledAboutSliderHeroText } from "../../atoms/AboutSlider/StyledAboutSliderHeroText"
import TeamSlider from "./TeamSlider"
import { useStaticQuery, graphql } from "gatsby"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import { BgColourWrapper } from "../../atoms/Wrapper/Wrapper"
import styled from "styled-components"

const AboutBgWrapper = styled(BgColourWrapper)`
  padding: 152px 112px 128px;
  @media only screen and (max-width: 1242px) {
    padding: 112px 60px 102px;
  }
  @media only screen and (max-width: 1140px) {
    padding: 112px 40px 102px;
  }
  @media only screen and (max-width: 600px) {
    padding: 84px 28px 80px 28px;
  }
`

const AboutSlider = ({ marathonTitle, marathonFirstParagraph }) => {
  const dispatchCursor = useCursorDispatchContext()
  const data = useStaticQuery(graphql`
    query AboutTeamSlider {
      allDatoCmsAuthor(
        filter: { locale: { eq: "pl" }, showInSlider: { eq: true } }
      ) {
        nodes {
          name
          specialty
          biography
          id
          photo {
            alt
            fluid(maxWidth: 518, maxHeight: 326) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  return (
    <AboutBgWrapper
      onMouseEnter={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.FULL_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.SMALLER,
        })
      }}
      bg="var(--white)"
    >
      <StyledAboutSliderWrapper>
        <StyledTextContentWrapper>
          <StyledFeaturedWrapper
            firstSpanLength="100%"
            secondSpanLength="75%"
            hasMarginLeft={false}
            hasSmalFontSize={true}
            style={{ paddingLeft: "0" }}
            aboutSlider
          >
            <StructuredText data={marathonTitle} />
            {/* <span style={{ maxWidth: "max-content" }}>To maraton,</span>
            <span style={{ maxWidth: "max-content" }}>nie sprint</span> */}
          </StyledFeaturedWrapper>
          <StyledAboutSliderHeroText>
            <StyledAboutSliderHeroParagraph
              color="var(--dark-bg)"
              fontSize="13px"
              lineHeight="2.3"
              fontWeight="400"
              letterSpacing="0.1em"
              declaredDisplay="block"
            >
              <StructuredText data={marathonFirstParagraph} />
            </StyledAboutSliderHeroParagraph>
          </StyledAboutSliderHeroText>
        </StyledTextContentWrapper>
        <TeamSlider members={data.allDatoCmsAuthor.nodes} />
      </StyledAboutSliderWrapper>
    </AboutBgWrapper>
  )
}

export default AboutSlider
