import styled from "styled-components"

export const StyledCtaH2 = styled.h2`
  font-family: "Libre Baskerville";
  font-size: 70px;
  font-weight: normal;
  line-height: 1.38;
  letter-spacing: -1.75px;
  color: var(--white);
  @media only screen and (max-width: 970px) {
    font-size: 6vw;
  }
  @media only screen and (max-width: 857px) {
    text-align: center;
  }
  @media only screen and (max-width: 670px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 360px) {
    font-size: 24px;
  }
  span {
    @media only screen and (max-width: 570px) {
      line-height: 2em;
      min-width: 318px;
    }
    :first-child {
      color: var(--accent);
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 105%;
        height: 2px;
        background-color: var(--accent);
      }
    }

    :last-child {
      @media only screen and (max-width: 570px) {
        display: block;
      }
    }
  }
`
