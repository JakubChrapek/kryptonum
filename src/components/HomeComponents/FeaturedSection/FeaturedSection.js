import React from "react"
import styled from "styled-components"

const SectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 123px 133px 141px;
  max-width: 1366px;
  margin: 0 auto;

  @media only screen and (max-width: 1366px) {
    padding: 0 93px 133px 111px;
  }
  @media only screen and (max-width: 1090px) {
    padding: 0 60px 110px 80px;
  }

  h2 {
    text-transform: uppercase;
    font-size: 8px;
    line-height: 1.5em;
    letter-spacing: 1.33px;
    font-family: "Poppins";
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 50px;
    width: 100%;
  }

  ul {
    margin-top: 12px;
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
      width: calc(100% - 19px);
      background-color: var(--black);
      height: 4px;
      z-index: -1;
    }
    &:last-child {
      &:after {
        width: calc(100% + 80px);
      }
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

const FeaturedSection = () => {
  return (
    <SectionStyles>
      <h2>Works</h2>
      <div>
        <FeaturedWrapper>
          <span>Featured</span>
          <span>Projects</span>
        </FeaturedWrapper>
        <ul>
          <li>
            <h3>Design</h3>
          </li>
          <li>
            <h3>Development</h3>
          </li>
          <li>
            <h3>Strategy</h3>
          </li>
        </ul>
      </div>
    </SectionStyles>
  )
}

export default FeaturedSection
