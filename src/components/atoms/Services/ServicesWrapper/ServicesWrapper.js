import styled from "styled-components"

export const ServicesWrapper = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 0 40px;
  align-self: flex-start;
  @media only screen and (max-width: 874px) {
    max-width: 796px;
    align-self: center;
  }
  li {
    margin: 0 70px 0 0;
    &:last-child {
      margin: 0 0 0 0;
    }
    @media only screen and (max-width: 1366px) {
      margin: 0 50px 0 0;
    }
    @media only screen and (max-width: 1090px) {
      margin: 0 40px 0 0;
    }
    @media only screen and (max-width: 480px) {
      margin: 0 20px 0 0;
    }
  }
  h3 {
    font-size: clamp(60px, 5vw, 150px);
    line-height: 1.5;
    color: var(--black-font);
    font-weight: normal;
    white-space: nowrap;

    @media only screen and (max-width: 897px) {
      font-size: clamp(40px, 5vw, 60px);
    }

    @media only screen and (max-width: 614px) {
      font-size: 30px;
    }
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
  .box {
    text-align: center;
  }
`
