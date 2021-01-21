import React from "react"
import { motion } from "framer-motion"
import { containerTransition, itemTransition } from "../Styles/Animations"

import {
  NavigationStyles,
  Flex,
  MenuFlex,
  StyledOutLink,
  SocialList,
  StyledList,
  StyledItem,
  StyledLink,
  Text,
} from "./StyledNavigation"

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
    <NavigationStyles
      variants={containerTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {width > 800 && (
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div>
            <motion.p>Social</motion.p>
            <SocialList>
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
            </SocialList>
          </div>
          <div>
            <Text margin="0 0 9px 0">Get in touch</Text>
            <StyledOutLink href="mailto:kuba@kryptonumstudio.com">
              contact@kryptonum.co.uk
            </StyledOutLink>
          </div>
        </Flex>
      )}
      <MenuFlex
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        margin="0 0 0 56px"
      >
        <p>Menu</p>
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
            <Text margin="0 0 9px 0">Get in touch</Text>
            <StyledOutLink href="mailto:kuba@kryptonumstudio.com">
              contact@kryptonum.co.uk
            </StyledOutLink>
          </>
        )}
      </MenuFlex>
    </NavigationStyles>
  )
}

export default Navigation
