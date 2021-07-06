import styled from "styled-components"
import { TextStyles } from "../Text/Text"

export const StyledCtaH2 = styled(TextStyles)`
  display: inline;
  @media only screen and (max-width: 1142px) {
    font-size: 6vw;
  }
  @media only screen and (max-width: 640px) {
    font-size: clamp(32px, 6vw, 46px);
  }
  p {
    display: inline;
  }
  mark {
    display: inline;
    background-color: transparent;
    @media only screen and (max-width: 570px) {
      line-height: 2em;
      min-width: 318px;
    }
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

    :last-child {
      display: inline;
    }
  }
  .service--parent {
    display: inline-block;
    position: relative;
    width: 34rem;
    height: 10rem;
    top: 28px;
    @media (max-width: 1142px) {
      top: 30px;
    }
    @media (max-width: 1040px) {
      top: 0;
      height: 8vw;
    }

    @media only screen and (max-width: 640px) {
      height: clamp(6.2rem, 8vw, 9rem);
      width: 100%;
    }
    overflow: hidden;
    mark {
      position: absolute;
      left: 0;
      top: 120px;
      @media (max-width: 767px) {
        min-width: unset;
        width: 100%;
      }
    }
  }
`
