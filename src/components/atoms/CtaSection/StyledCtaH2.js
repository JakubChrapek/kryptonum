import styled from "styled-components"
import { TextStyles } from "../Text/Text"

export const StyledCtaH2 = styled(TextStyles)`
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
  mark {
    background-color: transparent;
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
        left: 4px;
        bottom: -4px;
        width: 95%;
        height: 2px;
        background-color: var(--accent);
      }
    }

    :last-child {
      display: inline;
    }
  }
`
