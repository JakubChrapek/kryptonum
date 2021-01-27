import styled from "styled-components"

export const LearnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 816px) {
    justify-content: center;
    flex-direction: column;
  }
`

export const HeadingWrapper = styled.div`
  align-self: flex-start;
`

export const LearnTextWrapper = styled.div`
  padding-left: 140px;
  @media only screen and (max-width: 1204px) {
    padding-left: 42px;
  }
  @media only screen and (max-width: 816px) {
    padding-bottom: 79px;
  }
  @media only screen and (max-width: 510px) {
    padding-left: 0;
  }
  h3 {
    padding-top: 43px;
    font-family: LibreBaskerville;
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: -0.94px;
    text-align: left;
    color: var(--gray);
    @media only screen and (max-width: 510px) {
      text-align: center;
    }
    span {
      display: block;
      color: var(--accent);
    }
  }
  ul {
    @media only screen and (max-width: 510px) {
      text-align: center;
    }
    li {
      max-width: 198px;
      font-family: Poppins;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: 2px;
      color: var(--black);
      &:first-child {
        padding-top: 38px;
      }
    }
  }
`

export const ElipseWrapper = styled.div`
  padding-right: 110px;
  width: 49px;
  @media only screen and (max-width: 1204px) {
    padding-right: 0;
  }
  @media only screen and (max-width: 816px) {
    transform: translateX(80px);
  }
  @media only screen and (max-width: 710px) {
    margin-bottom: 54px;
  }
  span {
    display: block;
    width: 49px;
    height: 49px;
    border: 1px solid var(--black);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      display: block;
      width: 11px;
      height: 11px;
      background-color: var(--dark-bg);
      border-radius: 50%;
    }
  }
`
export const ArrowWrapper = styled.div`
  margin-top: 54px;
  @media only screen and (max-width: 710px) {
    display: none;
  }
`
