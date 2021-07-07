import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledCreateTextP = styled(TextStyles)`
  width: 72%;

  @media only screen and (max-width: 1024px) {
    padding: 24px 0 54px 0;
  }
  @media only screen and (max-width: 767px) {
    margin: 0 auto;
    text-align: center;
    max-width: 279px;
    width: 100%;
  }
  @media only screen and (max-width: 528px) {
    max-width: 253px;
    width: 100%;
  }
`
