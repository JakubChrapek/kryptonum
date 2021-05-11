import styled from "styled-components"

export const StyledContactFormWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1066px;
  margin: 0 auto;
  @media only screen and (max-width: 870px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`
