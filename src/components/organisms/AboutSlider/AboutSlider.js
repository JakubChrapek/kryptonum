import React from "react"

import { StyledFeaturedWrapper } from "../../molecules/FeaturedSection/FeaturedWrapper/StyledFeaturedWrapper"
import { StyledAboutSliderWrapper } from "../../atoms/AboutSlider/StyledAboutSliderWrapper"
import { StyledTextContentWrapper } from "../../atoms/AboutSlider/StyledTextContentWrapper"
import { StyledAboutSliderHeroParagraph } from "../../atoms/AboutSlider/StyledAboutSliderHeroParagraph"
import { StyledAboutSliderHeroText } from "../../atoms/AboutSlider/StyledAboutSliderHeroText"
import TeamSlider from "./TeamSlider"
import { useStaticQuery, graphql } from "gatsby"

const AboutSlider = () => {
  const data = useStaticQuery(graphql`
    query AboutTeamSlider {
      allDatoCmsAuthor(filter: { locale: { eq: "pl" } }) {
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
    <StyledAboutSliderWrapper>
      <StyledTextContentWrapper>
        <StyledFeaturedWrapper
          firstSpanLength="100%"
          secondSpanLength="110%"
          hasMarginLeft={false}
          hasSmalFontSize={true}
          style={{ paddingLeft: "0" }}
        >
          <span style={{ maxWidth: "max-content" }}>To maraton,</span>
          <span style={{ maxWidth: "max-content" }}>nie sprint</span>
        </StyledFeaturedWrapper>
        <StyledAboutSliderHeroText>
          <StyledAboutSliderHeroParagraph
            color="var(--dark-bg)"
            fontSize="18px"
            fontWeight="500"
            lineHeight="1.28"
            letterSpacing="2.57px"
            declaredDisplay="block"
          >
            Każdy superbohater ma jakąś słabość. U&nbsp;Supermana był to
            kryptonit, a&nbsp;u&nbsp;każdego z&nbsp;nas - coś innego. Dlatego
            głęboko wierzymy w&nbsp;to, że nie warto zmuszać nikogo do pracy,
            w&nbsp;której nie czuje się dobrze i&nbsp;staramy się rozwijać nasze
            strefy geniuszu. Dlatego nie zaczniemy pracy nad projektem, zanim
            nie zajaramy się jak pochodnie!
          </StyledAboutSliderHeroParagraph>
        </StyledAboutSliderHeroText>
      </StyledTextContentWrapper>
      <TeamSlider members={data.allDatoCmsAuthor.nodes} />
    </StyledAboutSliderWrapper>
  )
}

export default AboutSlider
