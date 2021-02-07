import styled from "styled-components"
import { GridItem } from "./GridItem"

export const Creativity = styled(GridItem)`
  justify-self: flex-end;
  width: 275px;
  margin-right: 10%;
  h3 {
    margin-top: 90px;
  }
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
