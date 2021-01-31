import { useStaticQuery } from "gatsby"
import React from "react"

import { StyledFeaturedWrapper } from "../../molecules/FeaturedSection/FeaturedWrapper/StyledFeaturedWrapper"

import { Cards } from "../../atoms/HowWeWorkSection/StyledCards"
import { FeaturedSectionH2 } from "../../atoms/FeaturedSection/FeaturedSectionH2"
import { StyledHowWeWorkSection } from "../../atoms/HowWeWorkSection/HowWeWorkSectionStyles"
const query = graphql`
  query {
    datoCmsPageHome {
      cards {
        cardTitle
        cardDescription
        id
      }
    }
  }
`

const HowWeWorkSection = () => {
  const { datoCmsPageHome } = useStaticQuery(query)
  return (
    <StyledHowWeWorkSection howWeWorkSection={true}>
      <FeaturedSectionH2 howWeWorkSection={true}>How we work</FeaturedSectionH2>
      <div>
        <StyledFeaturedWrapper>
          <span>Our design</span>
          <span>process</span>
        </StyledFeaturedWrapper>
      </div>
      <Cards
        drag={"x"}
        dragConstraints={{ left: -960, right: 0 }}
        dragElastic={0.05}
      >
        {datoCmsPageHome.cards.map(card => (
          <li key={card.cardTitle}>
            <h3>{card.cardTitle}</h3>
            <p>{card.cardDescription}</p>
          </li>
        ))}
      </Cards>
    </StyledHowWeWorkSection>
  )
}

export default HowWeWorkSection
