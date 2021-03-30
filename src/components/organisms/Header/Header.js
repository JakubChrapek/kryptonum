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
import { StyledHeaderWrapper } from "../../atoms/Header/StyledHeaderWrapper"
import { useCursorDispatchContext } from "../../../contexts/cursorContext"

const Header = ({ theme }) => {
  let pathname = useLocation().pathname
  const dispatch = useMenuDispatch()
  const dispatchCursor = useCursorDispatchContext()
  const { show, disabled } = useMenuState()
  const width = useWindowSize()

  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        {width > 800 && (
          <Contact
            color={
              pathname === "/projects"
                ? "var(--black)"
                : theme === "light"
                ? "var(--lightest-gray)"
                : "var(--black)"
            }
          />
        )}
        <StyledHeaderLink to="/">
          <Logo color={theme === "light" ? "var(--white)" : "var(--black)"} />
        </StyledHeaderLink>
        <StyledNavBurger
          id="menuHamburgerBtn"
          onClick={() => {
            dispatch({ type: "TOGGLE_MENU" })
          }}
          disabled={disabled}
          className={show ? "active" : null}
          whileTap={{ scale: 0.9 }}
          color={theme === "light" ? "var(--white)" : "var(--black)"} // !!!!!!!!!!!!!!
        >
          <StyledNavBurgerSpan color={theme} mobile={show} />
          <StyledNavBurgerSpan color={theme} mobile={show} />
        </StyledNavBurger>
        <AnimatePresence exitBeforeEnter>
          {show && <Navigation width={width} />}
        </AnimatePresence>
      </StyledHeader>
    </StyledHeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
