import styled from "styled-components"
import { TextStyles } from "../../atoms/Text/Text"

export const StyledContentColumnH2 = styled(TextStyles)`
  @media only screen and (max-width: 960px) {
    font-size: 47px;
  }
  @media only screen and (max-width: 760px) {
    max-width: 374px;
  }
  @media only screen and (max-width: 570px) {
    padding: 0 20px;
  }
`
