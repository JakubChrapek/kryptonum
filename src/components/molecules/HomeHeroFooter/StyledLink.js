import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LinkStyles = styled(Link)`
  font-size: ${({ declaredFontSize }) =>
    declaredFontSize ? declaredFontSize : "14px"};
  text-decoration: none;
  padding: ${({ declaredpadding }) =>
    declaredpadding ? declaredpadding : "6px 8px"};
  margin-right: ${({ declaredMarginRight }) =>
    declaredMarginRight ? declaredMarginRight : "4px"};
  line-height: ${({ declaredLineHeight }) =>
    declaredLineHeight ? declaredLineHeight : "1.31em"};
  color: ${({ declaredFontColor }) =>
    declaredFontColor ? declaredFontColor : "var(--lightest-gray)"};
  position: relative;

  @media only screen and (min-width: 1920px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 684px) {
    padding-left: 0;
    margin-right: ${({ declaredMarginRight }) =>
      declaredMarginRight ? declaredMarginRight : "16px"};
  }
  @media only screen and (max-width: 475px) {
    padding-right: 0;
  }

  &:focus-visible {
    outline-offset: 1px;
    outline: 2px solid
      ${({ declaredFontColor }) =>
        declaredFontColor ? declaredFontColor : "var(--black)"};
  }
`

const StyledLink = ({
  props,
  children,
  href,
  declaredFontSize,
  declaredFontColor,
  declaredFontFamily,
  declaredLineHeight,
  declaredMarginRight,
  declaredpadding,
  onMouseEnter,
  onMouseLeave,
  to,
}) => {
  return (
    <LinkStyles
      {...props}
      to={to}
      href={href}
      declaredFontSize={declaredFontSize}
      declaredFontColor={declaredFontColor}
      declaredFontFamily={declaredFontFamily}
      declaredLineHeight={declaredLineHeight}
      declaredMarginRight={declaredMarginRight}
      declaredpadding={declaredpadding}
      onPointerEnter={onMouseEnter}
      onPointerLeave={onMouseLeave}
    >
      {children}
    </LinkStyles>
  )
}

export default StyledLink
