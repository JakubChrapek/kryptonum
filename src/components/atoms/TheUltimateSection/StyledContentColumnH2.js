import styled from "styled-components"
import { TextStyles } from "../../atoms/Text/Text"

export const StyledContentColumnH2 = styled(TextStyles)`
  @media only screen and (max-width: 1170px) {
    font-size: 56px;
  }
  @media only screen and (max-width: 1036px) {
    font-size: 47px;
  }
  @media only screen and (max-width: 767px) {
    max-width: 374px;
  }
  @media only screen and (max-width: 570px) {
    padding: 0 20px;
  }
  @media only screen and (max-width: 334px) {
    font-size: 42px;
  }
`
