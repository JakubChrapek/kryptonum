import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledThinkTextParagraph = styled(TextStyles)`
  > p + p {
    margin-top: 20px;
  }
  @media (max-width: 1168px) {
    max-width: 320px;
  }
  @media (max-width: 767px) {
    max-width: 279px;
  }
`
