import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"
import SEO from "./SEO"
import GlobalStyles from "./Styles/GlobalStyles"
import SkipNavLink from "./SkipNavLink/SkipNavLink"
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import { MenuProvider } from "../contexts/menuContext"
import Footer from "./Footer/Footer"

const StyledMain = styled(motion.main)`
  min-height: 100vh;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  let pathname = useLocation().pathname
  const getThemeFromPathname = name => {
    if (pathname === "/") {
      return "white"
    }
  }
  return (
    <MenuProvider>
      <GlobalStyles />
      <SkipNavLink />
      <SEO />
      <Header theme={getThemeFromPathname(pathname)} />
      <StyledMain key={pathname}>
        {children}
        <Footer />
      </StyledMain>
    </MenuProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
