import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledCreateTextP = styled(TextStyles)`
  max-width: 413px;

  @media only screen and (max-width: 1000px) {
    padding: 0 0 58px 0;
  }
  @media only screen and (max-width: 767px) {
    margin: 0 auto;
    text-align: center;
  }
  @media only screen and (max-width: 500px) {
    max-width: 253px;
  }
`
