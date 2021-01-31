import styled from "styled-components"

export const StyledContactFormWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1066px;
  margin: 0 auto;
  @media only screen and (max-width: 692px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`
