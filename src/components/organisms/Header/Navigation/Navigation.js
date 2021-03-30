import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  containerTransition,
  itemTransition,
  overlayTransition,
} from "../../../Styles/Animations"

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
} from "../../../../contexts/cursorContext"

const Navigation = ({ mobile, width }) => {
  const dispatchCursor = useCursorDispatchContext()
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
  useOutsideRefClick(menuWrapperRef, () => dispatch({ type: "CLOSE_MENU" }))

  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === "Escape") {
        dispatch({ type: "CLOSE_MENU" })
      }
    }
    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [])

  return (
    <>
      <StyledNavigationOverlay
        variants={overlayTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <StyledNavigationStyles
        onMouseOver={() => {
          dispatchCursor({
            type: "CHANGE_CURSOR_TYPE",
            cursorType: CURSOR_TYPES.FULL_CURSOR,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_COLOR",
            cursorColor: CURSOR_COLORS.DARK,
          })
        }}
        onMouseOut={() => {
          dispatchCursor({
            type: "CHANGE_CURSOR_TYPE",
            cursorType: CURSOR_TYPES.OUTLINED_CURSOR,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_COLOR",
            cursorColor: CURSOR_COLORS.LIGHT,
          })
        }}
        ref={menuWrapperRef}
        variants={containerTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {width > 800 && (
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
                  <StyledOutLink href="https://facebook.com/kryptonum">
                    Facebook
                  </StyledOutLink>
                </motion.li>
                <motion.li>
                  <StyledOutLink href="https://instagram.com/kryptonum.studio">
                    Instagram
                  </StyledOutLink>
                </motion.li>
              </StyledSocialList>
            </div>
            <div>
              <StyledTextP margin="0 0 9px 0">Get in touch</StyledTextP>
              <StyledOutLink href="mailto:kuba@kryptonumstudio.com">
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
              >
                <StyledItem key={item.name}>{item.name}</StyledItem>
              </StyledLink>
            ))}
          </StyledList>
          {width <= 800 && (
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
