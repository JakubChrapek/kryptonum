import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { containerTransition } from "../../../Styles/Animations"

import { useLocation } from "@reach/router"
import { StyledNavigationStyles } from "../../../atoms/Header/Navigation/StyledNavigationStyles"
import { StyledItem } from "../../../atoms/Header/Navigation/StyledItem"
import { StyledLink } from "../../../atoms/Header/Navigation/StyledLink"
import { StyledList } from "../../../molecules/Header/Navigation/StyledList"
import { StyledNavigationFlexDiv } from "../../../atoms/Header/Navigation/StyledNavigationFlexDiv"
import { StyledNavigationMenuFlex } from "../../../atoms/Header/Navigation/StyledNavigationMenuFlex"
import { StyledOutLink } from "../../../atoms/Header/Navigation/StyledOutLink"
import { StyledSocialList } from "../../../molecules/Header/Navigation/StyledSocialList"
import { StyledTextP } from "../../../atoms/Header/Navigation/StyledTextP"
import { StyledNavigationOverlay } from "../../../atoms/Header/Navigation/StyledNavigationOverlay"
import { TextStyles } from "../../../atoms/Text/Text"

//Contexts
import { useMenuDispatch, useMenuState } from "../../../../contexts/menuContext"

//Helpers
import useOutsideRefClick from "../../../../utils/useOutsideRefClick"
//Contexts
import {
  useCursorDispatchContext,
  CURSOR_TYPES,
  CURSOR_COLORS,
  CURSOR_SIZES,
} from "../../../../contexts/cursorContext"
import styled from "styled-components"

// Transition Animation
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }
// Stagger on menu link
const parent = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 1 } },
}
// Menu Title Slide Up
const titleSlideUp = {
  initial: { y: 200 },
  animate: { y: 0 },
}
// Menu lines grow
const lineGrow = {
  initial: { width: "100%" },
  animate: { width: 0 },
}

const NavigationWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  height: 100vh;
  top: 0;
`

const Navigation = ({ mobile, width, pointerEvents }) => {
  const dispatchCursor = useCursorDispatchContext()
  let pathname = useLocation().pathname
  const navItems = [
    {
      number: "01",
      name: "Projekty",
      link: "/projekty",
    },
    {
      number: "02",
      name: "Oferta",
      link: "/oferta",
    },
    {
      number: "03",
      name: "O nas",
      link: "/o-nas",
    },
    {
      number: "04",
      name: "Blog",
      link: "/blog",
    },
    {
      number: "05",
      name: "Kontakt",
      link: "/kontakt",
    },
  ]

  const dispatch = useMenuDispatch()
  const menuWrapperRef = useRef(null)
  useOutsideRefClick(menuWrapperRef, () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.SMALLER,
    })
    dispatch({ type: "CLOSE_MENU" })
  })

  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === "Escape") {
        dispatch({ type: "CLOSE_MENU" })
      }
    }
    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [])

  const handleOnMouseEnterForLink = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.BIGGER,
    })
  }

  const handleOnMouseEnterForBiggerLink = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.HUGE,
    })
  }

  const handleOnMouseLeaveForLink = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.SMALLER,
    })
  }
  const [panelComplete, setPanelComplete] = useState(false)

  return (
    <NavigationWrapper>
      {/* <Panels
        panelComplete={panelComplete}
        setPanelComplete={setPanelComplete}
      /> */}
      <StyledNavigationOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        transition={{ ...transition, duration: 0.4 }}
      />
      <StyledNavigationStyles
        pointerEvents={pointerEvents}
        onMouseEnter={() => {
          dispatchCursor({
            type: "CHANGE_CURSOR_TYPE",
            cursorType: CURSOR_TYPES.FULL_CURSOR,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_SIZE",
            cursorSize: CURSOR_SIZES.SMALLER,
          })
        }}
        onMouseLeave={() => {
          dispatchCursor({
            type: "CHANGE_CURSOR_TYPE",
            cursorType: CURSOR_TYPES.FULL_CURSOR,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_SIZE",
            cursorSize: CURSOR_SIZES.SMALLER,
          })
        }}
        ref={menuWrapperRef}
        variants={containerTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* <motion.div
          style={{
            background: panelComplete ? "#fff" : "#191919",
          }}
          initial={{ height: 0 }}
          animate={{
            height: [0, window.innerHeight, 0],
            bottom: [0, 0, window.innerHeight],
          }}
          exit={{
            height: [0, window.innerHeight, 0],
            bottom: [null, 0, 0],
          }}
          transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
          onAnimationComplete={() => {
            setPanelComplete(!panelComplete)
          }}
        /> */}
        {width && width > 640 && (
          <StyledNavigationFlexDiv
            direction="column"
            alignItems="flex-start"
            justifyContent="space-between"
            margin="16px 0 0"
          >
            <div>
              <TextStyles
                fontSize="15px"
                lineHeight="1.47em"
                color="var(--text-gray)"
              >
                Sociale
              </TextStyles>
              <StyledSocialList>
                <motion.li>
                  <StyledOutLink
                    onPointerEnter={handleOnMouseEnterForLink}
                    onPointerLeave={handleOnMouseLeaveForLink}
                    href="https://www.facebook.com/kryptonumPL"
                    target="_blank"
                    rel="me noopener noreferrer"
                  >
                    Facebook
                  </StyledOutLink>
                </motion.li>
                <motion.li>
                  <StyledOutLink
                    onPointerEnter={handleOnMouseEnterForLink}
                    onPointerLeave={handleOnMouseLeaveForLink}
                    href="https://www.instagram.com/kryptonum_pl/"
                    target="_blank"
                    rel="me noopener noreferrer"
                  >
                    Instagram
                  </StyledOutLink>
                </motion.li>
              </StyledSocialList>
            </div>
            <div>
              <StyledTextP margin="0 0 9px 0">Weź zagadaj</StyledTextP>
              <StyledOutLink
                onPointerEnter={handleOnMouseEnterForLink}
                onPointerLeave={handleOnMouseLeaveForLink}
                href="mailto:michal@kryptonum.eu"
              >
                michal@kryptonum.eu
              </StyledOutLink>
            </div>
          </StyledNavigationFlexDiv>
        )}
        <StyledNavigationMenuFlex
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          margin="0 0 0 56px"
        >
          <StyledList>
            {navItems.map(item => (
              <StyledLink
                number={item.number}
                activeClassName="active"
                to={item.link}
                key={item.name}
                onClick={() => dispatch({ type: "CLOSE_MENU" })}
                onPointerEnter={handleOnMouseEnterForBiggerLink}
                onPointerLeave={handleOnMouseLeaveForLink}
              >
                <StyledItem key={item.name}>{item.name}</StyledItem>
              </StyledLink>
            ))}
          </StyledList>
          {width && width <= 640 && (
            <>
              <StyledTextP margin="0 0 9px 0">Napisz do nas</StyledTextP>
              <StyledOutLink href="mailto:michal@kryptonum.eu">
                michal@kryptonum.eu
              </StyledOutLink>
            </>
          )}
        </StyledNavigationMenuFlex>
      </StyledNavigationStyles>
    </NavigationWrapper>
  )
}

const PanelStyles = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 97;
  pointer-events: none;
  > div:nth-of-type(1) {
    height: 100vh;
    width: 100vw;
    position: absolute;
  }
`

export const Panels = ({ panelComplete, setPanelComplete }) => {
  return (
    <PanelStyles>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          top: [null, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        style={{ background: "#000" }}
        // onAnimationComplete={() => setPanelComplete(!panelComplete)}
      ></motion.div>
    </PanelStyles>
  )
}

export default Navigation
