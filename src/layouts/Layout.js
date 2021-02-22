import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/organisms/Header/Header"
import SEO from "../components//SEO"
import GlobalStyles from "../Components/Styles/GlobalStyles"
import SkipNavLink from "../components/atoms/SkipNavLink/SkipNavLink"
import { motion } from "framer-motion"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import { MenuProvider } from "../contexts/menuContext"
import Footer from "../components/organisms/Footer/Footer"
import Scroll from "../components/locomotiveScroll"

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
    if (name === "/" || name === "/projects") {
      return "light"
    } else {
      return "dark"
    }
  }
  return (
    <MenuProvider>
      <GlobalStyles />
      <Scroll />
      <SkipNavLink />
      <SEO />
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
