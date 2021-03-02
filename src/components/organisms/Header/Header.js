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

const Header = ({ theme }) => {
  let pathname = useLocation().pathname
  const dispatch = useMenuDispatch()
  const { show } = useMenuState()
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
          onClick={() => {
            dispatch({ type: "TOGGLE_MENU" })
          }}
          className={show ? "active" : null}
          whileTap={{ scale: 0.9 }}
        >
          <StyledNavBurgerSpan
            color={theme && pathname !== "/projects" ? "light" : "dark"}
            mobile={show}
          />
          <StyledNavBurgerSpan
            color={theme && pathname !== "/projects" ? "light" : "dark"}
            mobile={show}
          />
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
