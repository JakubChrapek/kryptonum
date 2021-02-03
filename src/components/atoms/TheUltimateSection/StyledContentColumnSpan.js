import styled from "styled-components"
import { TextStyles } from "../../atoms/Text/Text"

export const StyledContentColumnSpan = styled(TextStyles)`
  justify-self: flex-start;
  width: 100%;
  max-width: 310px;
  background-color: var(--accent);
  @media only screen and (max-width: 760px) {
    max-width: 374px;
  }
  @media only screen and (max-width: 760px) {
    max-width: none;
  }
`
