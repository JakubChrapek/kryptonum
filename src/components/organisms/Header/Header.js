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
import {
  useCursorDispatchContext,
  CURSOR_SIZES,
  CURSOR_COLORS,
  CURSOR_TYPES,
} from "../../../contexts/cursorContext"

const Header = ({ theme }) => {
  let pathname = useLocation().pathname
  const dispatch = useMenuDispatch()
  const dispatchCursor = useCursorDispatchContext()
  const { show, disabled } = useMenuState()
  const width = useWindowSize()
  const [burgerLoading, setBurgerLoading] = useState(false)

  const handleOnMouseEnterForLink = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.ACCENT_TRANSPARENT,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.BIGGER,
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
            onMouseEnter={handleOnMouseEnterForLink}
            onMouseLeave={handleOnMouseLeaveForLink}
          />
        )}
        <StyledHeaderLink
          onMouseEnter={handleOnMouseEnterForLink}
          onMouseLeave={handleOnMouseLeaveForLink}
          to="/"
          color={theme === "light" ? "var(--white)" : "var(--black)"}
        >
          <Logo color={theme === "light" ? "var(--white)" : "var(--black)"} />
        </StyledHeaderLink>
        <StyledNavBurger
          id="menuHamburgerBtn"
          onClick={() => {
            setBurgerLoading(true)
            dispatch({ type: "TOGGLE_MENU" })
            setTimeout(() => {
              if (show) {
                if (pathname !== "/") {
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
                } else {
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
                }
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
              setBurgerLoading(false)
            }, 100)
          }}
          disabled={disabled}
          className={show ? "active" : null}
          whileTap={{ scale: 0.9 }}
          color={theme === "light" ? "var(--white)" : "var(--black)"}
          onMouseEnter={handleOnMouseEnterForLink}
          onMouseLeave={() =>
            dispatchCursor({
              type: "CHANGE_CURSOR_COLOR",
              cursorColor: show ? CURSOR_COLORS.DARK : CURSOR_COLORS.LIGHT,
            })
          }
        >
          <StyledNavBurgerSpan color={theme} mobile={show} />
          <StyledNavBurgerSpan color={theme} mobile={show} />
        </StyledNavBurger>
        <AnimatePresence exitBeforeEnter>
          {show && (
            <Navigation
              pointerEvents={burgerLoading ? "none" : ""}
              width={width}
            />
          )}
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
