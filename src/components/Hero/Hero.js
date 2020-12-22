import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -88px;
  height: 100vh;
  padding-top: 77px;
  z-index: 0;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
  h1 {
    font-size: 98px;
    line-height: 0.82;
    color: var(--lightest-gray);
    z-index: 1;
  }
`

const StyledImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`

const HeroFooterStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 2;
  padding: 0 112px 32px 97px;
  a {
    color: var(--lightest-gray);
    text-decoration: none;
    margin-right: 23px;
    padding: 6px 8px;
    font-size: 13px;
    line-height: 1.31em;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 8px;
      bottom: 3px;
      height: 1px;
      width: calc(100% - 16px);
      background-color: var(--white);
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    }

    &:hover,
    &:active,
    &:focus {
      &:before {
        transform: scaleY(1);
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

const HeroFooter = () => {
  return (
    <HeroFooterStyles>
      <div>
        <a
          href="https://facebook.com/kryptonum"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com/kryptonum.studio"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
      <Link to="/blog">Blog</Link>
    </HeroFooterStyles>
  )
}

const SvgStyles = styled.svg`
  width: 600px;
  height: 600px;
  position: absolute;
  left: 0px;
  top: 0;
`

const GrayLine = () => (
  <SvgStyles xmlns="http://www.w3.org/2000/svg">
    <g fill="#00ef8b">
      <path
        xmlns="http://www.w3.org/2000/svg"
        id="svg_1"
        d="m2.5,250.45313l162,-249"
        stroke-width="3"
        stroke="#00ef8b"
        fill="#00ef8b"
      />
    </g>
  </SvgStyles>
)

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  border: 1px solid var(--white);
  z-index: 1;
  h1 {
    grid-column: 1/7;
    grid-row: 3/6;
  }
`

const Hero = ({ bg }) => {
  return (
    <HeroSection>
      <Wrapper>
        <h1>
          Join the league
          <br />
          of business superheroes
        </h1>
        <GrayLine />
      </Wrapper>
      <HeroFooter />
      <StyledImage src={bg} />
    </HeroSection>
  )
}

export default Hero
