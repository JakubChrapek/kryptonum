import styled from "styled-components"

export const LearnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeadingWrapper = styled.div`
  align-self: flex-start;
`

export const LearnTextWrapper = styled.div`
  padding-left: 140px;
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
    span {
      display: block;
      color: var(--accent);
    }
  }
  ul {
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
`
