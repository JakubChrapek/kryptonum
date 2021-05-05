import styled from "styled-components"

export const StyledTextContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  width: 100%;
  @media (max-width: 1080px) {
    grid-gap: 50px;
    grid-template-columns: 2fr 3fr;
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`
