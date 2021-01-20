import React from "react"
import { Link as ScrollLink } from "react-scroll"
import useWindowSize from "../../../utils/getWindowSize"
import { motion } from "framer-motion"

import HeroFooter from "./HeroFooter/HeroFooter"
import GreenLine from "./GreenLine/GreenLine"
import GrayLine from "./GrayLine/GrayLine"

import { HeroSection, StyledImage, Wrapper } from "./StyledHeroSection"

const Hero = ({ bg }) => {
  const width = useWindowSize()
  return (
    <HeroSection>
      {width >= 683 && <GrayLine />}
      <GreenLine />
      <Wrapper>
        <h1>
          Join the league
          <br />
          of business superheroes
        </h1>

        {width >= 683 && (
          <ScrollLink
            activeClass="active"
            to="whatwereupto"
            spy={true}
            smooth={true}
            duration={800}
          >
            {/* <motion.a
              whileHover={{
                borderColor: "var(--accent)",
                outline: "none",
              }}
              whileTap={{ scale: 0.98 }}
              whileFocus={{ borderColor: "var(--accent)", outline: "none" }}
            > */}
            <motion.p whileHover={{ scale: 1.05, cursor: "pointer" }}>
              See what
              <br />
              we're up to
              <br />
              <motion.span style={{ fontSize: "32px", lineHeight: "0.7" }}>
                &rarr;
              </motion.span>
            </motion.p>
            {/* </motion.a> */}
          </ScrollLink>
        )}
      </Wrapper>
      <HeroFooter />

      {width >= 683 && <StyledImage src={bg} />}
    </HeroSection>
  )
}

export default Hero
