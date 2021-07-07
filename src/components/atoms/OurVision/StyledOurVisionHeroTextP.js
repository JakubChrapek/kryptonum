import styled from "styled-components"
import { TextStyles } from "../Text/Text"

export const StyledOurVisionHeroTextP = styled(TextStyles)`
  @media (max-width: 1366px) {
    font-size: clamp(32px, 2.75vw, 40px);
  }
  @media only screen and (max-width: 660px) {
    font-size: 28px;
    line-height: 1.43;
  }
  @media only screen and (max-width: 351px) {
    font-size: 24px;
  }
`
