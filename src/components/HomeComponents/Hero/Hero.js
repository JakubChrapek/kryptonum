import { motion } from "framer-motion"
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
    font-family: "JetBrains Mono";
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

const SvgStyles = styled(motion.svg)`
  position: absolute;
  left: 0;
  top: 55%;
  width: 100%;
  height: 2px;
  line {
    stroke: var(--white);
    stroke-width: 1px;
  }
`

const GrayLine = () => (
  <SvgStyles xmlns="http://www.w3.org/2000/svg">
    <line x1="100%" y1="0%" x2="0%" y2="100%" />
  </SvgStyles>
)

const AccentLineStyles = styled(SvgStyles)`
  left: calc((100vw - 1010px) / 2 + 105px);
  top: 30%;
  width: 14%;
  height: 57%;
  z-index: 1;
  line {
    stroke: var(--accent);
    stroke-width: 4px;
  }
`

const GreenLine = () => (
  <AccentLineStyles
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 60 }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="100%" y1="0%" x2="0%" y2="100%" />
  </AccentLineStyles>
)

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 90%;
  max-width: 1010px;
  margin-top: 12%;
  h1 {
    font-family: "Libre Baskerville";
    font-size: 80px;
    font-weight: normal;
    line-height: 1;
    color: var(--lightest-gray);
  }
  a {
    display: flex;
    flex-wrap: wrap;
    align-self: flex-end;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    margin-top: -100px;
    margin-right: -50px;
    width: 296px;
    height: 296px;
    padding-left: 70px;
    text-decoration: none;
    z-index: 1;

    p {
      text-align: left;
      text-transform: uppercase;
      font-size: 14px;
      line-height: 1.29;
      letter-spacing: 3.64px;
      font-weight: 500;
      color: var(--white);
      font-family: "JetBrains Mono";
    }
    span {
      color: var(--white);
    }
  }
`

const Hero = ({ bg }) => {
  return (
    <HeroSection>
      <GrayLine />
      <GreenLine />
      <Wrapper>
        <h1>
          Join the league
          <br />
          of business superheroes
        </h1>
        <motion.a
          href="#services"
          whileHover={{
            borderColor: "var(--accent)",
            outline: "none",
          }}
          whileTap={{ scale: 0.98 }}
          whileFocus={{ borderColor: "var(--accent)", outline: "none" }}
        >
          <motion.p whileHover={{ scale: 1.05, cursor: "pointer" }}>
            See what
            <br />
            we're up to
            <br />
            <motion.span style={{ fontSize: "32px", lineHeight: "0.7" }}>
              &rarr;
            </motion.span>
          </motion.p>
        </motion.a>
      </Wrapper>
      <HeroFooter />
      <StyledImage src={bg} />
    </HeroSection>
  )
}

export default Hero
