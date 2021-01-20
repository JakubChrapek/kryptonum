import PropTypes from "prop-types"
import React, { useState } from "react"
import { useLocation } from "@reach/router"
import { AnimatePresence, motion } from "framer-motion"
import styled from "styled-components"
import { Link } from "gatsby"
import { useMenuDispatch, useMenuState } from "../../contexts/menuContext"
import useWindowSize from "../../utils/getWindowSize"
import { containerTransition, itemTransition } from "../Styles/Animations"

const NavBurger = styled(motion.button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 47px;
  padding: 8px;
  position: relative;
  border: none;
  background-color: transparent;
  z-index: 2;
  mix-blend-mode: difference;

  @media only screen and (max-width: 800px) {
    position: absolute;
    right: 22px;
    top: 18px;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &::focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #000;
  }

  span {
    width: 100%;
    height: 2px;
    background-color: ${({ color }) => (color ? color : "var(--black)")};
    transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    &:first-child {
      transform: translateY(-3px);
    }
    &:last-child {
      transform: translateY(3px);
    }
  }

  &.active {
    span {
      margin: 0;
      &:first-child {
        transform: rotate(45deg) translate(1px, 0px);
      }
      &:last-child {
        transform: rotate(-45deg) translate(1px, -1px);
      }
    }
  }
`

const NavigationStyles = styled(motion.nav)`
  position: absolute;
  right: 0vw;
  top: 0;
  height: 100vh;
  max-width: 100%;
  background-color: var(--white);
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 94px 116px 38px 104px;
  p {
    font-size: 15px;
    line-height: 1.47em;
    color: var(--text-gray);
    margin-left: 8px;
  }

  @media only screen and (max-width: 800px) {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    padding: 90px 60px 0 40px;
    justify-content: flex-start;
  }
  @media only screen and (max-width: 540px) {
    padding: 60px 50px 0 30px;
  }
`

const Flex = styled(motion.div)`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  margin: ${({ margin }) => (margin ? margin : 0)};
`

const MenuFlex = styled(Flex)`
  @media only screen and (max-width: 800px) {
    margin: 0;
  }
`

const StyledOutLink = styled(motion.a)`
  font-size: 15px;
  line-height: 1.47em;
  color: var(--black);
  padding: 6px 8px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 8px;
    bottom: 3px;
    height: 1px;
    width: calc(100% - 16px);
    background-color: var(--black);
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  &:hover,
  &:active,
  &:focus {
    &:before {
      transform: scaleY(1);
    }
  }
`

const SocialList = styled(motion.ul)`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  li {
    display: inline-flex;
  }
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 32px 0 0;
  li {
    display: inline-flex;
  }

  @media only screen and (max-width: 800px) {
    justify-content: flex-start;
    height: unset;
    margin: 24px 0 50px;
  }
`

const StyledItem = styled.li`
  position: relative;
  transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
`

const StyledLink = styled(Link)`
  font-size: 56px;
  line-height: 1.07;
  color: var(--black);
  padding: 12px 8px;
  margin-bottom: 12px;
  height: 100%;
  position: relative;

  @media only screen and (max-width: 540px) {
    font-size: 38px;
    margin-bottom: 2px;
    padding: 4px 8px;
  }

  &.active li,
  &:hover li {
    transform: translateX(32px);
  }

  &::after {
    content: "${({ number }) => (number ? number : "")}";
    left: 0;
    position: absolute;
    top: 18px;
    font-size: 16px;
    line-height: 1.38;
    color: var(--black);
    transform: translateX(-4px);
    opacity: 0;
    transition: opacity 0.2s 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      transform 0.2s 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }
  &.active::after,
  &:hover::after {
    opacity: 1;
    transform: translateX(2px);
  }
`

const Text = styled.p`
  margin: ${({ margin }) => (margin ? margin : "0")};
`

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

const LogoTitle = styled(motion.h1)`
  text-transform: uppercase;
  color: ${({ color }) => (color ? color : "var(--black)")};
  padding: 6px 8px;
  font-size: 20px;
  line-height: 1.2em;
  font-weight: 500;
  font-family: "Libre Baskerville";
`

const Logo = ({ color }) => <LogoTitle color={color}>Kryptonum</LogoTitle>

const HeaderStyles = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 62px 32px 70px;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 800px) {
    padding: 30px;
    justify-content: center;
  }
`
const ContactStyles = styled(Link)`
  color: ${({ color }) => (color ? color : "var(--black)")};
  letter-spacing: 10.5px;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.29em;
  font-weight: 500;
  padding: 6px 8px;
  font-family: "JetBrains Mono";
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 8px;
    width: calc(100% - 24px);
    height: 1px;
    transform-origin: center bottom;
    opacity: 0;
    transform: scaleY(0);
    transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    background-color: ${({ color }) => (color ? color : "var(--black)")};
  }

  &:hover:after {
    transform: scaleY(1);
    opacity: 1;
  }
`
const Contact = ({ color }) => (
  <ContactStyles color={color} to="/contact">
    Contact
  </ContactStyles>
)

const Header = ({ theme }) => {
  let pathname = useLocation().pathname
  const dispatch = useMenuDispatch()
  const { show: mobile } = useMenuState()
  const [show, setShow] = useState(false)
  const width = useWindowSize()

  return (
    <HeaderStyles>
      {width > 800 && (
        <Contact
          color={theme === "white" ? "var(--lightest-gray)" : "var(--black)"}
        />
      )}
      <Link to="/">
        <Logo color={theme === "white" ? "var(--white)" : "var(--black)"} />
      </Link>
      <NavBurger
        color={theme === "white" ? "var(--white)" : "var(--black)"}
        onClick={() => {
          setShow(!show)
          dispatch({ type: "TOGGLE_MENU" })
          console.log(mobile)
        }}
        className={show ? "active" : null}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span />
        <motion.span />
      </NavBurger>
      <AnimatePresence exitBeforeEnter>
        {show && <Navigation width={width} mobile={mobile} />}
      </AnimatePresence>
    </HeaderStyles>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
