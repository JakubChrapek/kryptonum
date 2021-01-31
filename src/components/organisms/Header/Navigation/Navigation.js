import React from "react"
import { motion } from "framer-motion"
import { containerTransition } from "../../../Styles/Animations"

import { StyledNavigationStyles } from "../../../atoms/Header/Navigation/StyledNavigationStyles"
import { StyledItem } from "../../../atoms/Header/Navigation/StyledItem"
import { StyledLink } from "../../../atoms/Header/Navigation/StyledLink"
import { StyledList } from "../../../molecules/Header/Navigation/StyledList"
import { StyledNavigationFlexDiv } from "../../../atoms/Header/Navigation/StyledNavigationFlexDiv"
import { StyledNavigationMenuFlex } from "../../../atoms/Header/Navigation/StyledNavigationMenuFlex"
import { StyledNavigationStylesP } from "../../../atoms/Header/Navigation/StyledNavigationStylesP"
import { StyledOutLink } from "../../../atoms/Header/Navigation/StyledOutLink"
import { StyledSocialList } from "../../../molecules/Header/Navigation/StyledSocialList"
import { StyledTextP } from "../../../atoms/Header/Navigation/StyledTextP"

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
  return (
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
        <StyledNavigationStylesP>Menu</StyledNavigationStylesP>
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
  )
}

export default Navigation
