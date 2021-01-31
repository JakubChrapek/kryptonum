import styled from "styled-components"

export const StyledCopyrightWrapper = styled.div`
  padding: 82px 0 0 57px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 861px) {
    padding: 82px 0 0 0;
  }
  @media (max-width: 795px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 550px) {
    margin: 0 auto;
  }
`
