import styled from "styled-components"

export const StyledProjectsColumn = styled.ul`
  flex: 1 1 55%;
  width: 55%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  padding-right: 60px;
  @media (max-width: 1142px) {
    flex: 1 1 50%;
    width: 50%;
    padding-right: 40px;
  }
  @media (max-width: 1024px) {
    padding-right: 0;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
  li {
    font-size: clamp(48px, 2vw, 50px);
    line-height: 1.5em;
    font-weight: 400;
    position: relative;
    padding-left: 8px;
    margin-bottom: 24px;
    text-transform: uppercase;
    cursor: pointer;
    color: var(--text-light-gray);
    @media only screen and (max-width: 1357px) {
      font-size: 54px;
    }
    @media only screen and (max-width: 1292px) {
      font-size: 50px;
    }
    @media only screen and (max-width: 1217px) {
      font-size: 44px;
    }
    @media only screen and (max-width: 994px) {
      font-size: 42px;
    }
    @media only screen and (max-width: 902px) {
      font-size: 34px;
    }
    &.active {
      color: var(--accent);
      font-weight: 500;
      span {
        color: var(--accent);
      }
    }
  }

  span {
    font-size: 14px;
    font-weight: normal;
    line-height: 2.14;
    letter-spacing: 0.35em;
    position: absolute;
    left: -16px;
    top: -32px;
    color: var(--black-font);
  }

  a {
    margin: 25px 0 0;
    left: -12px;
    &.btn {
      margin-top: 120px;
    }
    @media only screen and (max-width: 902px) {
      padding: 20px;
    }
    @media only screen and (max-width: 1024px) {
      left: 0;
      &.btn {
        margin-top: 40px;
      }
    }
  }
`
