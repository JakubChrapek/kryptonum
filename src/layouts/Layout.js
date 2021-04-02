import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Header from "../components/organisms/Header/Header"
import SEO from "../components//SEO"
import GlobalStyles from "../components/Styles/GlobalStyles"
import SkipNavLink from "../components/atoms/SkipNavLink/SkipNavLink"
import { motion } from "framer-motion"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import { MenuProvider } from "../contexts/menuContext"
import Footer from "../components/organisms/Footer/Footer"
import ScrollToTop from "../components/organisms/ScrollToTop/ScrollToTop"
import useMousePosition from "../utils/useMousePosition"
import useWindowSize from "../utils/getWindowSize"
import {
  useCursorDispatchContext,
  useCursorStateContext,
} from "../contexts/cursorContext"
import Cursor from "../components/organisms/Cursor/Cursor"

const StyledMain = styled(motion.main)`
  min-height: 100vh;
`

const Layout = ({ children }) => {
  const {
    cursorShow,
    cursorType,
    cursorColor,
    cursorSize,
  } = useCursorStateContext()
  let pathname = useLocation().pathname
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
        show={cursorShow}
        type={cursorType}
        color={cursorColor}
        size={cursorSize}
      />
      <SkipNavLink />
      <SEO />
      <ScrollToTop />
      <Header theme={getThemeFromPathname(pathname)} />
      <StyledMain key={pathname}>
        {children}
        {pathname !== "/projects" && <Footer />}
      </StyledMain>
    </MenuProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
