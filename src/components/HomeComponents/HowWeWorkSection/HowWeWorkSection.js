import { useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

const SectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 129px 82px 133px;
  max-width: 1366px;
  margin: 0 auto;

  @media only screen and (max-width: 1366px) {
    padding: 129px 60px 133px;
  }
  @media only screen and (max-width: 1090px) {
    padding: 100px 40px 110px 80px;
  }

  h2 {
    text-transform: uppercase;
    font-size: 8px;
    line-height: 1.5em;
    letter-spacing: 1.33px;
    font-family: "Poppins";
    margin-left: 57px;
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 50px;
    width: 100%;
    margin-left: 57px;
  }

  h3 {
    font-size: 13px;
    line-height: 3.62;
    letter-spacing: 19.5px;
    text-transform: uppercase;
    font-family: "JetBrains Mono";
  }

  span {
    font-size: 52px;
    line-height: 1.35em;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: calc(100%);
      background-color: var(--black);
      height: 4px;
      z-index: -1;
    }
  }
`

const FeaturedWrapper = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: flex-start !important;
  margin: 0 !important;
  width: 50% !important;
`

const Cards = styled.ul`
  margin: 78px 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(258px, 1fr));
  grid-gap: 56px;
  width: 100%;

  li {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 92px 1fr;
    background-color: var(--light-gray);
    padding: 56px 36px;

    h3 {
      font-family: "Poppins";
      font-size: 28px;
      font-weight: normal;
      line-height: 1.36;
      letter-spacing: normal;
      color: #090909;
      text-transform: none;
    }

    p {
      font-family: 16px;
      line-height: 1.38;
    }
  }
`

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
    <SectionStyles>
      <h2>How we work</h2>
      <div>
        <FeaturedWrapper>
          <span>Our design</span>
          <span>process</span>
        </FeaturedWrapper>
      </div>
      <Cards>
        {datoCmsPageHome.cards.map(card => (
          <li key={card.cardTitle}>
            <h3>{card.cardTitle}</h3>
            <p>{card.cardDescription}</p>
          </li>
        ))}
      </Cards>
    </SectionStyles>
  )
}

export default HowWeWorkSection
