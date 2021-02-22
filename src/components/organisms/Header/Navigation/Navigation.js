import React, { useEffect } from "react"
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

const Navigation = ({ mobile, width }) => {
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
              <motion.p>Social</motion.p>
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
