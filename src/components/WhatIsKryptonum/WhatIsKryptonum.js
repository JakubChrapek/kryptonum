import React from "react"
import styled from "styled-components"
import tmp from "../../images/home-bg.jpg"
const SectionStyles = styled.section`
  background-color: var(--black);
`
const Wrapper = styled.div`
  display: grid;
  max-width: 1366px;
  margin: 0 auto;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  h2 {
    grid-column: 2/5;
    grid-row: 2/4;
    color: var(--white);
  }

  p {
    grid-column: 3/7;
    grid-row: 7/10;
    color: var(--white);
    z-index: 1;
  }

  .img-wrapper {
    grid-column: 5/9;
    grid-row: 4/8;
    z-index: 0;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--accent);
  z-index: 1;
  span {
    font-family: "Libre Baskerville";
    font-size: 130px;
    color: transparent;
    -webkit-text-stroke: 1px var(--black);
    font-weight: normal;
    align-self: flex-end;
  }
  h3 {
    text-transform: uppercase;
  }
  p {
    font-family: "JetBrains Mono";
    font-size: 12px;
    line-height: 1.67;
    letter-spacing: 4.29px;
  }
`

const Passion = styled(GridItem)`
  grid-column: 8/10;
  grid-row: 1/5;
`

const Creativity = styled(GridItem)`
  grid-column: 9/11;
  grid-row: 10/13;
  margin-bottom: -120px;
  padding-bottom: 70px;
`

const Focus = styled(GridItem)`
  grid-column: 10/13;
  grid-row: 5/9;
`

const Works = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WhatIsKryptonum = () => {
  return (
    <SectionStyles>
      <Wrapper>
        <h2>What is Kryptonum</h2>
        <p>
          First of all, Kryptonum is a collective work of passion and
          professionalism. We’re a unique team of like-minded professionals from
          all over the world, all the best specialists in their respected
          fields. Kryptonum is your best choice when it comes to complex website
          design. See for yourself!
        </p>
        <div className="img-wrapper">
          <img src={tmp} alt="" />
        </div>
        <Passion>
          <span>Pa</span>
          <div>
            <h3>Passion</h3>
            <p>We treat our job as art. With love and passion.</p>
          </div>
        </Passion>
        <Focus>
          <span>Fo</span>
          <div>
            <h3>Focus</h3>
            <p style={{ marginRight: "42px" }}>
              We set the goals and always reach them.
            </p>
          </div>
        </Focus>
        <Creativity>
          <span>Cr</span>
          <div>
            <h3>Creativity</h3>
            <p style={{ marginRight: "42px" }}>Boredom is our worst enemy.</p>
          </div>
        </Creativity>
        <Works>
          <span>Works</span>
          &darr;
        </Works>
      </Wrapper>
    </SectionStyles>
  )
}

export default WhatIsKryptonum
