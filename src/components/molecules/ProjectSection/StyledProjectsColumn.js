import styled from "styled-components"

export const StyledProjectsColumn = styled.ul`
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 124px;
  padding-right: 40px;
  @media only screen and (max-width: 1041px) {
    padding-right: 0;
  }
  @media only screen and (max-width: 971px) {
    width: 45%;
    padding-left: 20px;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
  li {
    font-family: "Libre Baskerville";
    font-size: 70px;
    line-height: 1.24em;
    font-weight: normal;
    letter-spacing: -1.75px;
    position: relative;
    padding-left: 8px;
    margin-bottom: 48px;
    text-transform: uppercase;
    cursor: pointer;
    color: #030303;
    @media only screen and (max-width: 1357px) {
      font-size: 64px;
    }
    @media only screen and (max-width: 1292px) {
      font-size: 60px;
    }
    @media only screen and (max-width: 1217px) {
      font-size: 54px;
    }
    @media only screen and (max-width: 994px) {
      font-size: 48px;
    }
    @media only screen and (max-width: 902px) {
      font-size: 36px;
    }
    &.active {
      color: var(--accent);
    }
  }

  span {
    font-size: 14px;
    font-weight: normal;
    line-height: 2.14;
    letter-spacing: 5px;
    position: absolute;
    left: -16px;
    top: -32px;
    font-family: "JetBrains Mono";
  }

  a {
    margin: 25px 0 0;
    left: -12px;
    @media only screen and (max-width: 902px) {
      padding: 20px;
    }
  }
`
