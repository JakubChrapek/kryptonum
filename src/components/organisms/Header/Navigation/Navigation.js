import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  containerTransition,
  itemTransition,
  overlayTransition,
} from "../../../Styles/Animations"

import { useLocation } from "@reach/router"
import { StyledNavigationStyles } from "../../../atoms/Header/Navigation/StyledNavigationStyles"
import { StyledItem } from "../../../atoms/Header/Navigation/StyledItem"
import { StyledLink } from "../../../atoms/Header/Navigation/StyledLink"
import { StyledList } from "../../../molecules/Header/Navigation/StyledList"
import { StyledNavigationFlexDiv } from "../../../atoms/Header/Navigation/StyledNavigationFlexDiv"
import { StyledNavigationMenuFlex } from "../../../atoms/Header/Navigation/StyledNavigationMenuFlex"
import { StyledOutLink } from "../../../atoms/Header/Navigation/StyledOutLink"
import { StyledSocialList } from "../../../molecules/Header/Navigation/StyledSocialList"
import { StyledTextP } from "../../../atoms/Header/Navigation/StyledTextP"
import { StyledNavigationOverlay } from "../../../atoms/Header/Navigation/StyledNavigationOverlay"
import { TextStyles } from "../../../atoms/Text/Text"

//Contexts
import { useMenuDispatch, useMenuState } from "../../../../contexts/menuContext"

//Helpers
import useOutsideRefClick from "../../../../utils/useOutsideRefClick"
//Contexts
import {
  useCursorDispatchContext,
  CURSOR_TYPES,
  CURSOR_COLORS,
  CURSOR_SIZES,
} from "../../../../contexts/cursorContext"

const Navigation = ({ mobile, width, pointerEvents }) => {
  const dispatchCursor = useCursorDispatchContext()
  let pathname = useLocation().pathname
  const navItems = [
    {
      number: "01",
      name: "Projects",
      link: "/projects",
    },
    {
      number: "02",
      name: "Services",
      link: "/services",
    },
    {
      number: "03",
      name: "About",
      link: "/about",
    },
    {
      number: "04",
      name: "Blog",
      link: "/blog",
    },
    {
      number: "05",
      name: "FAQ",
      link: "/faq",
    },
    {
      number: "06",
      name: "Contact",
      link: "/contact",
    },
  ]

  const dispatch = useMenuDispatch()
  const menuWrapperRef = useRef(null)
  useOutsideRefClick(menuWrapperRef, () => {
    if (pathname === "/") {
      console.log(pathname)
      dispatchCursor({
        type: "CHANGE_CURSOR_COLOR",
        cursorColor: CURSOR_COLORS.LIGHT,
      })
    } else {
      console.log(pathname)
      dispatchCursor({
        type: "CHANGE_CURSOR_COLOR",
        cursorColor: CURSOR_COLORS.DARK,
      })
    }
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.SMALLER,
    })
    dispatch({ type: "CLOSE_MENU" })
  })

  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === "Escape") {
        dispatch({ type: "CLOSE_MENU" })
      }
    }
    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [])

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

  return (
    <>
      <StyledNavigationOverlay
        variants={overlayTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <StyledNavigationStyles
        pointerEvents={pointerEvents}
        onMouseEnter={() => {
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
        }}
        onMouseLeave={() => {
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
        }}
        ref={menuWrapperRef}
        variants={containerTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {width && width > 800 && (
          <StyledNavigationFlexDiv
            direction="column"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <div>
              <TextStyles
                fontSize="15px"
                lineHeight="1.47em"
                color="var(--text-gray)"
                declaredMargin="0 0 0 8px"
              >
                Social
              </TextStyles>
              <StyledSocialList>
                <motion.li>
                  <StyledOutLink
                    onPointerEnter={handleOnMouseEnterForLink}
                    onPointerLeave={handleOnMouseLeaveForLink}
                    href="https://facebook.com/kryptonum"
                  >
                    Facebook
                  </StyledOutLink>
                </motion.li>
                <motion.li>
                  <StyledOutLink
                    onPointerEnter={handleOnMouseEnterForLink}
                    onPointerLeave={handleOnMouseLeaveForLink}
                    href="https://instagram.com/kryptonum.studio"
                  >
                    Instagram
                  </StyledOutLink>
                </motion.li>
              </StyledSocialList>
            </div>
            <div>
              <StyledTextP margin="0 0 9px 0">Get in touch</StyledTextP>
              <StyledOutLink
                onPointerEnter={handleOnMouseEnterForLink}
                onPointerLeave={handleOnMouseLeaveForLink}
                href="mailto:kuba@kryptonumstudio.com"
              >
                contact@kryptonum.co.uk
              </StyledOutLink>
            </div>
          </StyledNavigationFlexDiv>
        )}
        <StyledNavigationMenuFlex
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          margin="0 0 0 56px"
        >
          <TextStyles
            fontSize="15px"
            lineHeight="1.47em"
            color="var(--text-gray)"
            declaredMargin="0 0 0 8px"
          >
            Menu
          </TextStyles>
          <StyledList>
            {navItems.map(item => (
              <StyledLink
                number={item.number}
                activeClassName="active"
                to={item.link}
                key={item.name}
                onClick={() => dispatch({ type: "CLOSE_MENU" })}
                onPointerDown={() => dispatch({ type: "CLOSE_MENU" })}
                onPointerEnter={handleOnMouseEnterForLink}
                onPointerLeave={handleOnMouseLeaveForLink}
              >
                <StyledItem key={item.name}>{item.name}</StyledItem>
              </StyledLink>
            ))}
          </StyledList>
          {width && width <= 800 && (
            <>
              <StyledTextP margin="0 0 9px 0">Get in touch</StyledTextP>
              <StyledOutLink href="mailto:kuba@kryptonumstudio.com">
                contact@kryptonum.co.uk
              </StyledOutLink>
            </>
          )}
        </StyledNavigationMenuFlex>
      </StyledNavigationStyles>
    </>
  )
}

export default Navigation
