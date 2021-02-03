import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
  font-size: ${({ declaredFontSize }) =>
    declaredFontSize ? declaredFontSize : "14px"};
  text-decoration: none;
  padding: ${({ declaredPadding }) =>
    declaredPadding ? declaredPadding : "6px 8px"};
  margin-right: ${({ declaredMarginRightg }) =>
    declaredMarginRightg ? declaredMarginRightg : "23px"};
  margin-right: ${({ declaredLineHeight }) =>
    declaredLineHeight ? declaredLineHeight : "1.31em"};
  margin-right: ${({ declaredFontFamily }) =>
    declaredFontFamily ? declaredFontFamily : "JetBrains Mono"};
  color: ${({ declaredFontColor }) =>
    declaredFontColor ? declaredFontColor : "var(--lightest-gray)"};
  position: relative;

  @media only screen and (max-width: 340px) {
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
