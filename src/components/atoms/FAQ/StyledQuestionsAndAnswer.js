import styled, { css } from "styled-components"

export const StyledQuestionsAndAnswerWrapper = styled.div`
  width: 100%;
  padding-top: 30px;
  @media (max-width: 767px) {
    padding-top: 50px;
  }
  ${({ variant }) =>
    variant === "offer" &&
    css`
      padding-top: 0;
      @media (max-width: 767px) {
        padding-top: 0;
      }
    `}
`
