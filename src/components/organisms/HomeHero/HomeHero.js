import React from "react"
import { motion } from "framer-motion"

import useWindowSize from "../../../utils/getWindowSize"
import HeroFooter from "../../molecules/HomeHeroFooter/HeroFooter"
import GreenLine from "../../molecules/GreenLine/GreenLine"
import GrayLine from "../../atoms/GrayLine/GrayLine"

import { Wrapper } from "../../atoms/StyledHeroHomeWrapper/StyledHeroHomeWrapper"
import { HomeHeroSection } from "../../atoms/StyledHomeHeroSection/StyledHomeHeroSection"
import { StyledFullPageResponsieImage } from "../../atoms/StyledFullPageResponsieImage/StyledFullPageResponsieImage"
import { StyledScrollLink } from "../../atoms/StyledHeroLink/StyledHeroLink"
import {
  useCursorDispatchContext,
  CURSOR_TYPES,
  CURSOR_COLORS,
  CURSOR_SIZES,
} from "../../../contexts/cursorContext"

const HomeHero = ({ bg }) => {
  const width = useWindowSize()
  const dispatchCursor = useCursorDispatchContext()
  return (
    <HomeHeroSection
      onMouseEnter={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.OUTLINED_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_COLOR",
          cursorColor: CURSOR_COLORS.LIGHT,
        })
      }}
    >
      {width >= 683 && <GrayLine />}
      <GreenLine />
      <Wrapper>
        <span>
          Join the league
          <br />
          of business
          {width < 683 ? <br /> : null}
          superheroes
        </span>

        {width >= 683 && (
          <StyledScrollLink
            activeClass="active"
            to="whatwereupto"
            spy={true}
            smooth={true}
            duration={800}
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
          </StyledScrollLink>
        )}
      </Wrapper>
      <HeroFooter />

      {width >= 683 && <StyledFullPageResponsieImage src={bg} />}
    </HomeHeroSection>
  )
}

export default HomeHero
