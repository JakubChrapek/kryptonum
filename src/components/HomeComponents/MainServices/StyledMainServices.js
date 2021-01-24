import styled from "styled-components"

export const ServicesStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 88px 123px 133px 141px;
  max-width: 1366px;
  margin: 0 auto;

  @media only screen and (max-width: 1366px) {
    padding: 36px 93px 133px 111px;
  }
  @media only screen and (max-width: 1090px) {
    padding: 36px 60px 110px 80px;
  }
  @media only screen and (max-width: 874px) {
    padding: 36px 0 110px 0;
    overflow: hidden;
  }
  @media only screen and (max-width: 540px) {
    padding: 36px 0 77px 0;
    overflow: hidden;
  }
  h2 {
    text-align: center;
    font-size: 14px;
    line-height: 1.25;
    letter-spacing: 2.29px;
    font-family: "JetBrains Mono";
    color: var(--black);
    text-transform: uppercase;
    padding-bottom: 20px;
    @media only screen and (max-width: 480px) {
      font-size: 8px;
    }
  }
`

export const ServicesWrapper = styled.ul`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 874px) {
    max-width: 796px;
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
        z-index: -1;
      }
    }
  }
`
