import styled from "styled-components"

export const StyledTextContentWrapper = styled.div`
  display: flex;
  width: 100%;
  > div {
    flex: 1 1 52.5%;
    &:last-of-type {
      flex: 1 1 47.5%;
    }
  }
  @media (max-width: 1080px) {
    grid-gap: 50px;
    grid-template-columns: 2fr 3fr;
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`
