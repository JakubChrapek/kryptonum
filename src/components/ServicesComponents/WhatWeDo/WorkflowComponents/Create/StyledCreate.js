import styled from "styled-components"
import { BsTriangle } from "react-icons/bs"

export const StyledCreateTextWrapper = styled.div`
  @media only screen and (max-width: 1000px) {
    transform: translateX(40px);
  }
  @media only screen and (max-width: 892px) {
    transform: translateX(0);
  }
  @media only screen and (max-width: 816px) {
    text-align: center;
  }
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
    color: var(--gray);
    margin: 0 auto;
    @media only screen and (max-width: 816px) {
      padding-right: 0;
      margin-top: 57px;
    }
    @media only screen and (max-width: 500px) {
      max-width: 264px;
    }
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
    color: var(--black);
    @media only screen and (max-width: 1000px) {
      padding: 0 0 58px 0;
    }
    @media only screen and (max-width: 816px) {
      margin: 0 auto;
    }
    @media only screen and (max-width: 500px) {
      max-width: 253px;
    }
  }
`
export const SpanElipseWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 816px) {
    justify-content: center;
    margin-bottom: 37px;
  }
  @media only screen and (max-width: 500px) {
    transform: translateX(0);
  }
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
    @media only screen and (max-width: 400px) {
      font-size: 26px;
    }
    @media only screen and (max-width: 366px) {
      font-size: 24px;
      transform: translateX(-48px);
    }
    @media only screen and (max-width: 340px) {
      font-size: 22px;
      transform: translateX(-40px);
    }
  }
`
export const StyledSpanElipse = styled.span`
  display: block;
  width: 106px;
  height: 106px;
  background-color: var(--accent);
  border-radius: 50%;
  @media only screen and (max-width: 400px) {
    width: 92px;
    height: 92px;
  }
  @media only screen and (max-width: 366px) {
    width: 82px;
    height: 82px;
  }
  @media only screen and (max-width: 346px) {
    width: 76px;
    height: 76px;
  }
`
export const StyledBsTriangle = styled(BsTriangle)`
  width: 9px;
  height: 14px;
  transform: rotate(90deg);
  color: var(--accent);
  margin-left: ${({ hasMarginLeft }) =>
    hasMarginLeft ? `${hasMarginLeft}px` : 0};
`
