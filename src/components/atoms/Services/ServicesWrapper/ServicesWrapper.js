import styled from "styled-components"

export const ServicesWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  @media only screen and (max-width: 874px) {
    max-width: 796px;
    align-self: center;
  }
  li {
    margin: 27px 70px 0 0;
    @media only screen and (max-width: 1366px) {
      margin: 27px 50px 0 0;
    }
    @media only screen and (max-width: 1090px) {
      margin: 27px 40px 0 0;
    }
    @media only screen and (max-width: 480px) {
      margin: 27px 20px 0 0;
    }
    &:last-child {
      margin: 27px 0 0 0;
    }
  }
  h3 {
    font-size: 60px;
    @media only screen and (max-width: 1366px) {
      font-size: 50px;
    }
    @media only screen and (max-width: 1090px) {
      font-size: 42px;
    }
    @media only screen and (max-width: 614px) {
      font-size: 30px;
    }
    line-height: 1.23;
    letter-spacing: -1.56px;
    color: var(--gray);
    font-family: "Libre Baskerville";
    font-weight: normal;
    &.underline {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: calc(100% - 15px);
        height: 3px;
        background-color: var(--accent);
        /* z-index: -1; */
      }
    }
  }
`
