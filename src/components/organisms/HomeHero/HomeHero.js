import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useLocation } from "@reach/router"
import { StructuredText } from "react-datocms"

import useWindowSize from "../../../utils/getWindowSize"
import HeroFooter from "../../molecules/HomeHeroFooter/HeroFooter"
import GreenLine from "../../molecules/GreenLine/GreenLine"
import GrayLine from "../../atoms/GrayLine/GrayLine"

import { Wrapper } from "../../atoms/StyledHeroHomeWrapper/StyledHeroHomeWrapper"
import { HomeHeroSection } from "../../atoms/StyledHomeHeroSection/StyledHomeHeroSection"
import { HomeHeroTitle, HomeHeroTitleStyles } from "../HomeHero/HomeHeroTitle"
import { StyledFullPageResponsieImage } from "../../atoms/StyledFullPageResponsieImage/StyledFullPageResponsieImage"
import { StyledScrollLink } from "../../atoms/StyledHeroLink/StyledHeroLink"
import {
  useCursorDispatchContext,
  CURSOR_TYPES,
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TEXT,
} from "../../../contexts/cursorContext"
import { RightArrow } from "../../atoms/Icons/arrows"
import website from "../../../../config/website"
import HeroCanvas from "./HeroCanvas"

const HomeHero = ({ heroTitle, heroTekstPrzycisku }) => {
  const width = useWindowSize()
  const dispatchCursor = useCursorDispatchContext()
  let pathname = useLocation().pathname
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  const handleOnMouseEnterForLink = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.TRANSPARENT_TEXT,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.DARK_TRANSPARENT,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.HUGE,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_TEXT",
      cursorText: CURSOR_TEXT.VIEW,
    })
  }

  const handleOnMouseLeaveForLink = () => {
    if (pathname === "/") {
      dispatchCursor({
        type: "CHANGE_CURSOR_TYPE",
        cursorType: CURSOR_TYPES.FULL_CURSOR,
      })
      dispatchCursor({
        type: "CHANGE_CURSOR_COLOR",
        cursorColor: CURSOR_COLORS.LIGHT,
      })
      dispatchCursor({
        type: "CHANGE_CURSOR_SIZE",
        cursorSize: CURSOR_SIZES.SMALLER,
      })
    } else {
      dispatchCursor({
        type: "CHANGE_CURSOR_TYPE",
        cursorType: CURSOR_TYPES.FULL_CURSOR,
      })
      dispatchCursor({
        type: "CHANGE_CURSOR_COLOR",
        cursorColor: CURSOR_COLORS.DARK,
      })
      dispatchCursor({
        type: "CHANGE_CURSOR_SIZE",
        cursorSize: CURSOR_SIZES.SMALLER,
      })
    }
  }
  return (
    <>
      <HeroCanvas />
      <HomeHeroSection
        id={website.skipNavId}
        onMouseEnter={() => {
          dispatchCursor({
            type: "CHANGE_CURSOR_TYPE",
            cursorType: CURSOR_TYPES.FULL_CURSOR,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_COLOR",
            cursorColor: CURSOR_COLORS.LIGHT,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_SIZE",
            cursorSize: CURSOR_SIZES.SMALLER,
          })
        }}
      >
        {/* <GreenLine /> */}
        <Wrapper>
          <HomeHeroTitleStyles>
            <HomeHeroTitle data={heroTitle} />
          </HomeHeroTitleStyles>

          {width >= 683 && (
            <StyledScrollLink
              activeClass="active"
              to="whatwereupto"
              spy={true}
              smooth={true}
              duration={800}
              onMouseEnter={handleOnMouseEnterForLink}
              onMouseLeave={handleOnMouseLeaveForLink}
            >
              <motion.button whileHover={{ scale: 1.05, cursor: "pointer" }}>
                <StructuredText data={heroTekstPrzycisku} />
                <motion.span style={{ fontSize: "32px", lineHeight: "0.7" }}>
                  <RightArrow />
                </motion.span>
              </motion.button>
            </StyledScrollLink>
          )}
        </Wrapper>
        <HeroFooter />
      </HomeHeroSection>
    </>
  )
}

export default HomeHero
