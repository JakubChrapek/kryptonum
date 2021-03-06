import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Header from "../components/organisms/Header/Header"
import { Panels } from "../components/organisms/Header/Navigation/Navigation"
import SEO from "../components//SEO"
import GlobalStyles from "../components/Styles/GlobalStyles"
import SkipNavLink from "../components/atoms/SkipNavLink/SkipNavLink"
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import { MenuProvider } from "../contexts/menuContext"
import Footer from "../components/organisms/Footer/Footer"
import ScrollToTop from "../components/organisms/ScrollToTop/ScrollToTop"
import useMousePosition from "../utils/useMousePosition"
import useWindowSize from "../utils/getWindowSize"
import {
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
  useCursorStateContext,
} from "../contexts/cursorContext"
import Cursor from "../components/organisms/Cursor/Cursor"
import { StyledNavigationOverlay } from "../components/atoms/Header/Navigation/StyledNavigationOverlay"

const StyledMain = styled(motion.main)`
  min-height: 100vh;
`

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

const Layout = ({ children }) => {
  const {
    cursorText,
    cursorShow,
    cursorType,
    cursorColor,
    cursorSize,
  } = useCursorStateContext()
  const dispatchCursor = useCursorDispatchContext()
  let pathname = useLocation().pathname
  const [routeChange, setRouteChange] = useState(false)
  const [panelComplete, setPanelComplete] = useState(false)

  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setRouteChange(!routeChange)
    setPanelComplete(false)
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.SMALLER,
    })
  }, [pathname])
  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  // const smoothScroll = new ASScroll({
  //   ease: 0.075,
  //   disableNativeScrollbar: false,
  // })

  const getThemeFromPathname = name => {
    if (name === "/") {
      return "light"
    } else {
      return "dark"
    }
  }

  return (
    <MenuProvider>
      <GlobalStyles />
      <Cursor
        text={cursorText}
        show={cursorShow}
        type={cursorType}
        color={cursorColor}
        size={cursorSize}
      />
      <SkipNavLink />
      <SEO />
      <ScrollToTop />
      <Header theme={getThemeFromPathname(pathname) || "light"} />
      {/* {routeChange && (
          <Panels
            panelComplete={routeChange}
            setPanelComplete={setRouteChange}
          />
        )} */}
      {/* {routeChange && (
          <StyledNavigationOverlay
            initial={{ height: 0 }}
            animate={{
              height: [0, window.innerHeight, 0],
              bottom: [0, 0, window.innerHeight],
            }}
            exit={{
              height: [0, window.innerHeight, 0],
              bottom: [null, 0, 0],
            }}
            transition={{
              ...transition,
              duration: 2,
              delay: 1,
              times: [0, 0.5, 1],
            }}
            style={{ zIndex: 98, background: panelComplete ? "#fff" : "#000" }}
            onAnimationComplete={() => {
              setPanelComplete(!panelComplete)
              // setRouteChange(!routeChange)
            }}
          />
        )} */}
      <StyledMain
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.2,
        }}
        key={pathname || "/"}
      >
        {children}
        {pathname !== "/projekty" && <Footer />}
      </StyledMain>
    </MenuProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
