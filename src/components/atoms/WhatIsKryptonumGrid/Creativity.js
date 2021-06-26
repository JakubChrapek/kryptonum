import styled, { css } from "styled-components"
import { GridItem } from "./GridItem"

export const Creativity = styled(GridItem)`
  justify-self: flex-end;
  width: 275px;
  margin-right: 10%;
  padding: 1rem 0 0;
  > span {
    margin-bottom: 4rem;
  }
  h3 {
    margin-top: 90px;
  }
  ${({ bottomSection }) =>
    bottomSection &&
    css`
      h3 {
        margin-top: 0;
      }
    `}
  p {
    margin: 10px 61px 70px 16px;
    @media only screen and (max-width: 1035px) {
      margin: 10px 61px 40px 16px;
    }
  }
  @media only screen and (max-width: 1111px) {
    transform: ${({ hasDeclaredTransform }) =>
      hasDeclaredTransform ? "translateY(110px)" : "none"};
  }
  @media only screen and (max-width: 1035px) {
    width: 225px;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`
