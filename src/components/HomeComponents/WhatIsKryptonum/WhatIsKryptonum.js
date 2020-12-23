import React from "react"
import styled from "styled-components"
import tmp from "../../../images/home-bg.jpg"
import { IoIosArrowRoundDown } from "react-icons/io"

const SectionStyles = styled.section`
  background-color: var(--black);
`
const CreativeSection = styled.div`
  background-color: var(--white);
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1366px;
  margin: 0 auto;

  h2 {
    grid-column: 7/22;
    grid-row: 5/13;
    color: var(--white);
    font-size: 14px;
    text-transform: uppercase;
    line-height: 76px;
    font-family: "JetBrains Mono";
    letter-spacing: 21px;
  }

  p {
    color: var(--white);
    z-index: 1;
    font-size: 16px;
    line-height: 1.88;
    letter-spacing: 5.71px;
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
    line-height: 0.95em;
    color: transparent;
    -webkit-text-stroke: 1px var(--black);
    font-weight: normal;
    align-self: flex-end;
  }
  h3 {
    text-transform: uppercase;
    font-family: "JetBrains Mono";
    font-size: 16px;
    line-height: 1em;
    margin: 20px 0 0 16px;
  }
  p {
    font-family: "JetBrains Mono";
    font-size: 12px;
    line-height: 1.67;
    letter-spacing: 4.29px;
    color: var(--black);
    margin: 6px 22px 16px 16px;
  }
`

const Passion = styled(GridItem)`
  max-width: 184px;
`

const Creativity = styled(GridItem)`
  justify-self: flex-end;
  width: 275px;
  margin-right: 10%;
  h3 {
    margin-top: 90px;
  }
  p {
    margin: 10px 61px 70px 16px;
  }
`

const Focus = styled(GridItem)`
  margin: 4% 0 0;
  max-width: 260px;
`

const Works = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    color: var(--accent);
    text-transform: uppercase;
    font-size: 8px;
    line-height: 1.5em;
    letter-spacing: 1.33px;
    margin-bottom: 12px;
  }
`

const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  padding-left: 9%;
`
const SecondRow = styled.div`
  display: flex;
  width: 100%;
  margin-top: -4%;
  justify-content: space-between;
  align-items: flex-start;

  > p {
    margin: 12% 0 0 18%;
    max-width: 386px;
  }
  .img-wrapper {
    z-index: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 25%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`

const ThirdRow = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: -7%;
`

const CreativeRow = styled(ThirdRow)`
  margin-top: 0;
`

const WhatIsKryptonum = () => {
  return (
    <>
      <SectionStyles>
        <Wrapper>
          <FirstRow>
            <h2>
              What is
              <br />
              Kryptonum
            </h2>
            <Passion>
              <span>Pa</span>
              <div>
                <h3>Passion</h3>
                <p>We treat our job as art. With love and passion.</p>
              </div>
            </Passion>
          </FirstRow>
          <SecondRow>
            <p>
              First of all, Kryptonum is a collective work of passion and
              professionalism. We’re a unique team of like-minded professionals
              from all over the world, all the best specialists in their
              respected fields. Kryptonum is your best choice when it comes to
              complex website design. See for yourself!
            </p>
            <div className="img-wrapper">
              <img src={tmp} alt="" />
            </div>
            <Focus>
              <span>Fo</span>
              <div>
                <h3>Focus</h3>
                <p>We set the goals and always reach them.</p>
              </div>
            </Focus>
          </SecondRow>
          <ThirdRow>
            <Works>
              <span>Works</span>
              <IoIosArrowRoundDown
                size="112px"
                title="Arrow pointing down"
                color="rgba(178,178,178,0.2)"
              />
            </Works>
            <Creativity>
              <span>Cr</span>
              <div>
                <h3>Creativity</h3>
              </div>
            </Creativity>
          </ThirdRow>
        </Wrapper>
      </SectionStyles>
      <CreativeSection>
        <Wrapper>
          <CreativeRow>
            <Creativity>
              <div>
                <p>Boredom is our worst enemy.</p>
              </div>
            </Creativity>
          </CreativeRow>
        </Wrapper>
      </CreativeSection>
    </>
  )
}

export default WhatIsKryptonum
