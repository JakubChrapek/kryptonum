import React, { useState } from "react"
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import { AnimatePresence } from "framer-motion"
import { useMenuDispatch, useMenuState } from "../../../contexts/menuContext"
import useWindowSize from "../../../utils/getWindowSize"

import Navigation from "./Navigation/Navigation"
import Contact from "../../molecules/Header/Contact"
import Logo from "../../molecules/Header/Logo/Logo"

import { StyledHeader } from "../../atoms/Header/StyledHeader"
import { StyledNavBurger } from "../../atoms/Header/StyledNavBurger"
import { StyledNavBurgerSpan } from "../../atoms/Header/StyledNavBurgerSpan"
import { StyledHeaderLink } from "../../atoms/Header/StyledHeaderLink"

const Header = ({ theme }) => {
  let pathname = useLocation().pathname
  const dispatch = useMenuDispatch()
  const { show: mobile } = useMenuState()
  const [show, setShow] = useState(false)
  const width = useWindowSize()

  return (
    <StyledHeader>
      {width > 800 && (
        <Contact
          color={theme === "/" ? "var(--lightest-gray)" : "var(--black)"}
        />
      )}
      <StyledHeaderLink to="/">
        <Logo color={theme === "/" ? "var(--white)" : "var(--black)"} />
      </StyledHeaderLink>
      <StyledNavBurger
        onClick={() => {
          setShow(!show)
          dispatch({ type: "TOGGLE_MENU" })
        }}
        className={show ? "active" : null}
        whileTap={{ scale: 0.9 }}
      >
        <StyledNavBurgerSpan color={theme} mobile={mobile} />
        <StyledNavBurgerSpan color={theme} mobile={mobile} />
      </StyledNavBurger>
      <AnimatePresence exitBeforeEnter>
        {show && <Navigation width={width} />}
      </AnimatePresence>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
