import styled from "styled-components"

export const StyledTextContentWrapper = styled.div`
  display: flex;
  width: 100%;
  > div {
    flex: 1 1 50%;
    &:last-of-type {
      flex: 1 1 50%;
    }
  }
  @media (max-width: 1024px) {
    > div {
      flex: 1 1 40%;
      &:last-of-type {
        flex: 1 1 60%;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`
