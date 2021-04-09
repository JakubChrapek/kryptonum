import styled from "styled-components"

export const StyledTextContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 706px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
