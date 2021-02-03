import styled from "styled-components"
import { TextStyles } from "../../atoms/Text/Text"

export const StyledContentColumnLastParagraph = styled(TextStyles)`
  width: 75%;
  @media only screen and (max-width: 960px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 760px) {
    max-width: 374px;
    width: 100%;
  }
  @media only screen and (max-width: 570px) {
    padding: 0 20px;
  }
`
