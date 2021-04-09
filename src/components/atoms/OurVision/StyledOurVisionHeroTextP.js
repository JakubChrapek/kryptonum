import styled from "styled-components"
import { TextStyles } from "../Text/Text"

export const StyledOurVisionHeroTextP = styled(TextStyles)`
  @media only screen and (max-width: 1080px) {
    font-size: 34px;
  }
  @media only screen and (max-width: 790px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 660px) {
    font-size: 28px;
    line-height: 1.43;
  }
  @media only screen and (max-width: 440px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 384px) {
    font-size: 20px;
  }
`
