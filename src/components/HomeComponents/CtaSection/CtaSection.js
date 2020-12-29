import { Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Button from "../../Button/Button"

const Wrapper = styled.section`
  background-color: var(--dark-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`

const SectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 102px 151px;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  @media only screen and (max-width: 1366px) {
    padding: 102px 114px;
  }
  @media only screen and (max-width: 1090px) {
    padding: 102px 90px;
  }

  h2 {
    font-family: "Libre Baskerville";
    font-size: 70px;
    font-weight: normal;
    line-height: 1.38;
    letter-spacing: -1.75px;
    color: var(--white);

    span {
      color: var(--accent);
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 97%;
        height: 2px;
        background-color: var(--accent);
      }
    }
  }
  a {
    margin: 48px 0 0;
    display: inline-block;
    button {
      min-width: 290px;
    }
  }
`

const CtaSection = () => {
  return (
    <Wrapper>
      <SectionStyles>
        <h2>
          Let's make a wonderful <span>website</span> together
        </h2>
        <Link to="/contact" className="btn btn__small btn__light">
          Contact us
        </Link>
      </SectionStyles>
    </Wrapper>
  )
}

export default CtaSection
