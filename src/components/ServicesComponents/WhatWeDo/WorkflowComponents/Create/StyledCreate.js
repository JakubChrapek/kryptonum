import styled from "styled-components"
import { BsTriangle } from "react-icons/bs"

export const StyledCreateTextWrapper = styled.div`
  h3 {
    max-width: 484px;
    padding: 0 84px 24px 0;
    font-family: LibreBaskerville;
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: -0.94px;
    text-align: left;
    color: var(--gray);
  }
  > p {
    padding: 0 60px 58px 0;
    max-width: 413px;
    font-family: Poppins;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 2px;
    text-align: left;
    color: var(--black);
  }
`
export const SpanElipseWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    font-family: Poppins;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #090909;
    transform: translateX(-58px);
  }
`
export const StyledSpanElipse = styled.span`
  display: block;
  width: 106px;
  height: 106px;
  background-color: var(--accent);
  border-radius: 50%;
`
export const StyledBsTriangle = styled(BsTriangle)`
  width: 9px;
  height: 14px;
  transform: rotate(90deg);
  color: var(--accent);
  margin-left: ${({ hasMarginLeft }) =>
    hasMarginLeft ? `${hasMarginLeft}px` : 0};
`
