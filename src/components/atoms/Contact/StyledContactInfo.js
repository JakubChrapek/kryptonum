import styled from "styled-components"

export const StyledContactInfo = styled.div`
  padding: 0 13px;
  max-width: 364px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 692px) {
    width: 320px;
    margin-bottom: 80px;
    padding: 32px 13px;
  }
`
