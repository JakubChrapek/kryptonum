import styled from "styled-components"
import { TextStyles } from "../Text/Text"

export const StyledOurVisionHeroTextP = styled(TextStyles)`
  @media only screen and (max-width: 660px) {
    font-size: 28px;
    line-height: 1.43;
    color: var(--white);
  }
  @media only screen and (max-width: 401px) {
    font-size: 24px;
  }
`
