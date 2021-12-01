import styled from "styled-components"
import { StyledAddIcon } from "./StyledAddIcon"

export const StyledQuestionAndAnswerElement = styled.div`
  width: 100%;
  max-width: 600px;
  border-top: solid 1px var(--accent);
  margin: 0 auto;

  :hover {
    ${StyledAddIcon} {
      > span:before,
      > span:after {
        background-color: var(--accent);
      }
    }
  }
`
