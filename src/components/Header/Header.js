import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { AnimatePresence } from "framer-motion"
import { useMenuDispatch, useMenuState } from "../../contexts/menuContext"
import useWindowSize from "../../utils/getWindowSize"
import { motion } from "framer-motion"

import { HeaderStyles, NavBurger } from "./StyledHeader"

import Navigation from "./Navigation"
import Contact from "./Contact"
import Logo from "./Logo"

const Header = ({ theme }) => {
  let pathname = useLocation().pathname
  const dispatch = useMenuDispatch()
  const { show: mobile } = useMenuState()
  const [show, setShow] = useState(false)
  const width = useWindowSize()

  return (
    <HeaderStyles>
      {width > 800 && (
        <Contact
          color={theme === "white" ? "var(--lightest-gray)" : "var(--black)"}
        />
      )}
      <Link to="/">
        <Logo color={theme === "white" ? "var(--white)" : "var(--black)"} />
      </Link>
      <NavBurger
        color={theme === "white" ? "var(--white)" : "var(--black)"}
        onClick={() => {
          setShow(!show)
          dispatch({ type: "TOGGLE_MENU" })
          console.log(mobile)
        }}
        className={show ? "active" : null}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span />
        <motion.span />
      </NavBurger>
      <AnimatePresence exitBeforeEnter>
        {show && <Navigation width={width} mobile={mobile} />}
      </AnimatePresence>
    </HeaderStyles>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
