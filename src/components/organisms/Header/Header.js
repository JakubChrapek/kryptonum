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
import styled from "styled-components"

const LinesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding: 9px;
  width: 47px;
  height: 47px;
`

const Header = ({ theme }) => {
  let pathname = useLocation().pathname || "/"
  const dispatch = useMenuDispatch()
  const dispatchCursor = useCursorDispatchContext()
  const { show, disabled } = useMenuState()
  const width = useWindowSize()
  const [burgerLoading, setBurgerLoading] = useState(false)

  const getColorForBurgerMenuFromThemeAndNavState = (theme, show) => {
    if (theme === "light" && !show) {
      return "var(--white)"
    }
    if (theme === "light" && show) {
      return "var(--white)"
    }
    if (theme === "dark" && !show) {
      return "var(--black)"
    }
    if (theme === "dark" && show) {
      return "var(--white)"
    }
  }

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

  const handleOnMouseLeaveForLink = () => {
    if (pathname === "/") {
      dispatchCursor({
        type: "CHANGE_CURSOR_TYPE",
        cursorType: CURSOR_TYPES.FULL_CURSOR,
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
        type: "CHANGE_CURSOR_SIZE",
        cursorSize: CURSOR_SIZES.SMALLER,
      })
    }
  }

  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  return (
    <StyledHeaderWrapper>
      <StyledHeader bg={pathname === "/" ? "transparent" : "var(--white)"}>
        <StyledHeaderLink
          onMouseEnter={handleOnMouseEnterForLink}
          onMouseLeave={handleOnMouseLeaveForLink}
          to="/"
          color={theme === "light" ? "var(--white)" : "var(--black)"}
        >
          <Logo
            sygnetVariant={theme}
            color={theme === "light" ? "var(--white)" : "var(--black)"}
          />
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
                    type: "CHANGE_CURSOR_SIZE",
                    cursorSize: CURSOR_SIZES.SMALLER,
                  })
                } else {
                  dispatchCursor({
                    type: "CHANGE_CURSOR_TYPE",
                    cursorType: CURSOR_TYPES.FULL_CURSOR,
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
                  type: "CHANGE_CURSOR_SIZE",
                  cursorSize: CURSOR_SIZES.SMALLER,
                })
              }
              setBurgerLoading(false)
            }, 100)
          }}
          disabled={disabled}
          className={show ? "active" : null}
          color={getColorForBurgerMenuFromThemeAndNavState(theme, show)}
          onMouseEnter={handleOnMouseEnterForLink}
          onMouseLeave={() => {
            dispatchCursor({
              type: "CHANGE_CURSOR_SIZE",
              cursorSize: CURSOR_SIZES.SMALLER,
            })
          }}
        >
          <span className="hamburger--menu">menu</span>
          <LinesWrapper>
            <StyledNavBurgerSpan mobile={show} />
            <StyledNavBurgerSpan mobile={show} />
          </LinesWrapper>
        </StyledNavBurger>
        <AnimatePresence>
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
