import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledLongLastingWrapperP = styled(TextStyles)`
  margin-top: -12px;
  align-self: flex-end;
  @media only screen and (max-width: 1336px) {
    font-size: 34px;
  }
  @media only screen and (max-width: 1264px) {
    padding: 0px 0 163px 0;
    text-align: center;
    align-self: center;
  }
  @media only screen and (max-width: 592px) {
    font-size: 30px;
    line-height: 1.67;
  }
`
