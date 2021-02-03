import { useStaticQuery } from "gatsby"
import React from "react"

import { StyledFeaturedWrapper } from "../../molecules/FeaturedSection/FeaturedWrapper/StyledFeaturedWrapper"
import { Cards } from "./StyledCards"
import { StyledHowWeWorkSection } from "../../atoms/HowWeWorkSection/HowWeWorkSectionStyles"
import { TextStyles } from "../../atoms/Text/Text"

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
      <TextStyles
        fontSize="8px"
        lineHeight="1.5em"
        letterSpacing="1.33px"
        fontFamily="Poppins"
        textTransform="uppercase"
        fontWeight="bold"
        howWeWorkSection={true}
      >
        How we work
      </TextStyles>
      <div>
        <StyledFeaturedWrapper firstSpanLength="100%" secondSpanLength="72%">
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
            <TextStyles
              fontSize="28px"
              lineHeight="1.5em"
              letterSpacing="normall"
              fontFamily="Poppins"
              color="#090909"
            >
              {card.cardTitle}
            </TextStyles>
            <p>{card.cardDescription}</p>
          </li>
        ))}
      </Cards>
    </StyledHowWeWorkSection>
  )
}

export default HowWeWorkSection
