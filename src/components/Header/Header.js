import PropTypes from "prop-types"
import React, { useState } from "react"
import { useLocation } from "@reach/router"
import { motion } from "framer-motion"
import styled from "styled-components"
import { Link } from "gatsby"

const NavBurger = styled(motion.button)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 47px;
  height: 27px;
  padding: 8px;
  position: relative;
  border: none;
  background-color: transparent;
  z-index: 2;
  mix-blend-mode: difference;

  span {
    width: 100%;
    height: 2px;
    background-color: ${({ color }) => (color ? color : "var(--black)")};

    &:first-child {
    }
    &:last-child {
    }
  }
`

const NavigationStyles = styled(motion.nav)`
  position: absolute;
  right: 0vw;
  top: 0;
  height: 100%;
  width: 40vw;
  background-color: var(--dark-bg);
  z-index: 1;
`

const Navigation = () => {
  return (
    <>
      <NavigationStyles></NavigationStyles>
    </>
  )
}

const LogoTitle = styled(motion.span)`
  text-transform: uppercase;
  color: ${({ color }) => (color ? color : "var(--black)")};
  padding: 6px 8px;
  font-size: 20px;
  line-height: 1.2em;
  font-weight: 500;
  font-family: "Montserrat";
`

const Logo = () => <LogoTitle>Kryptonum</LogoTitle>

const HeaderStyles = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 62px 32px 70px;
  a {
    text-decoration: none;
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
`
const Contact = () => <ContactStyles to="/contact">Contact</ContactStyles>

const Header = () => {
  let pathname = useLocation().pathname
  const [showNav, setShowNav] = useState(false)

  return (
    <HeaderStyles>
      <Contact />
      <Link to="/">
        <Logo />
      </Link>
      <NavBurger
        color={showNav ? "var(--white)" : "var(--black)"}
        onClick={() => setShowNav(!showNav)}
      >
        <motion.span />
        <motion.span />
      </NavBurger>
      {showNav && <Navigation />}
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
