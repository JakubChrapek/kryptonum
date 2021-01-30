import styled from "styled-components"

export const StyledTextContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 1063px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 759px) {
    align-items: flex-start;
  }
`
