import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledSpanElipseP = styled(TextStyles)`
  transform: translateX(-58px);
  @media only screen and (max-width: 400px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 366px) {
    font-size: 24px;
    transform: translateX(-48px);
  }
  @media only screen and (max-width: 340px) {
    font-size: 22px;
    transform: translateX(-40px);
  }
`
