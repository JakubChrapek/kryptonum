import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
  font-size: ${({ declaredFontSize }) =>
    declaredFontSize ? declaredFontSize : "14px"};
  text-decoration: none;
  padding: ${({ declaredPadding }) =>
    declaredPadding ? declaredPadding : "6px 8px"};
  margin-right: ${({ declaredMarginRight }) =>
    declaredMarginRight ? declaredMarginRight : "23px"};
  line-height: ${({ declaredLineHeight }) =>
    declaredLineHeight ? declaredLineHeight : "1.31em"};
  font-family: ${({ declaredFontFamily }) =>
    declaredFontFamily ? declaredFontFamily : "JetBrains Mono"};
  color: ${({ declaredFontColor }) =>
    declaredFontColor ? declaredFontColor : "var(--lightest-gray)"};
  position: relative;
  @media only screen and (min-width: 1920px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 684px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 475px) {
    padding-right: 0;
  }

  &:before {
    content: "";
    position: absolute;
    left: 8px;
    bottom: 3px;
    height: 1px;
    width: calc(100% - 16px);
    background-color: var(--white);
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  &:hover,
  &:active,
  &:focus {
    &:before {
      transform: scaleY(1);
    }
  }
`
