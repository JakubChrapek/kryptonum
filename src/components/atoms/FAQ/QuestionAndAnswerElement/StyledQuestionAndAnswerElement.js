import styled from "styled-components"

export const StyledQuestionAndAnswerElement = styled.div`
  width: 100%;
  max-width: 600px;
  border-top: solid 1px var(--accent);
  padding: 28px 10px;
  margin: 0 auto;
  @media only screen and (max-width: 1138px) {
    padding: 28px 0;
  }
  @media only screen and (max-width: 974px) {
    padding: 28px 10px;
  }
  @media only screen and (max-width: 330px) {
    padding: 28px 0;
  }
`
