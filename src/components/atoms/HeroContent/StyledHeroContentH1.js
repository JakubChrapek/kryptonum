import styled from "styled-components"
import { TextStyles } from "../Text/Text"

export const StyledHeroContentH1 = styled(TextStyles)`
  max-width: 761px;
  @media only screen and (max-width: 992px) {
    font-size: 56px;
  }
  @media only screen and (max-width: 658px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 500px) {
    font-size: ${({ variant }) => (variant === "blog" ? "24px" : "")};
  }
  @media only screen and (max-width: 494px) {
    font-size: 32px;
  }
  /* @media only screen and (max-width: 390px) {
    font-size: 26px;
  } */
`
