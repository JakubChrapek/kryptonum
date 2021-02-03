import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledLongLastingWrapperP = styled(TextStyles)`
  transform: translateY(-20px);
  @media only screen and (max-width: 1336px) {
    font-size: 34px;
    transform: translateY(-10px);
  }
  @media only screen and (max-width: 1264px) {
    padding: 0 0 163px 0;
  }
  @media only screen and (max-width: 522px) {
    font-size: 30px;
    text-align: center;
    line-height: 1.67;
  }
`
