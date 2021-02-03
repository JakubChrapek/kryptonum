import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledCommunicationWithTheClientP = styled(TextStyles)`
  max-width: 518px;
  @media only screen and (max-width: 1336px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 1264px) {
    margin: 0 auto;
    text-align: center;
  }
  @media only screen and (max-width: 522px) {
    font-size: 16px;
  }
`
