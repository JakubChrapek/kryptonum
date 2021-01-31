import React from "react"
import PropTypes from "prop-types"
import website from "../../../../config/website"
import styled from "styled-components"

const StyledLink = styled.a`
  position: absolute;
  left: 60px;
  top: 0;
  background-color: var(--white);
  color: var(--dark);
  padding: 16px 30px;
  font-size: 18px;
  font-weight: bold;
  border: 3px solid transparent;
  border-radius: 10px;
  text-decoration: none;
  transform: translateY(-100%);
  &:focus,
  &:active {
    outline: none;
    border-color: var(--dark);
    transform: translateY(0);
  }
`
const SkipNavLink = ({ children, ...props }) => (
  <StyledLink {...props} href={`#${website.skipNavId}`} data-reach-skip-link>
    {children}
  </StyledLink>
)

export default SkipNavLink

SkipNavLink.propTypes = {
  children: PropTypes.node,
}

SkipNavLink.defaultProps = {
  children: "Skip to content",
}
