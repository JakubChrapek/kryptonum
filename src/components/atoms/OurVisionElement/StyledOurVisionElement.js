import styled from "styled-components"

export const StyledOurVisionElement = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 122px;
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    place-items: center;
    grid-gap: 42px;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (max-width: 660px) {
    margin-bottom: 120px;
    &:last-of-type {
      margin-bottom: 84px;
    }
  }
  @media only screen and (max-width: 586px) {
    max-width: 100%;
  }
`
