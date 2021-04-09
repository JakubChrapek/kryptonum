import styled from "styled-components"
import { TextStyles } from "../Text/Text"

export const StyledOurVisionLogoTextH2 = styled(TextStyles)`
  display: flex;
  @media only screen and (max-width: 1080px) {
    font-size: 42px;
  }
  @media only screen and (max-width: 980px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 50px;
    width: 100%;
    max-width: 440px;
  }
  @media only screen and (max-width: 481px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 401px) {
    font-size: 32px;
  }
`
