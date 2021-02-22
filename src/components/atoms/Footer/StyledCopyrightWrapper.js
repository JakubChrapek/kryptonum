import styled from "styled-components"

export const StyledCopyrightWrapper = styled.div`
  padding: 82px 0 0 57px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 880px) {
    padding: 82px 0 0 8px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 550px) {
    margin: 0 auto;
  }
`
