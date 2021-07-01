import styled from "styled-components"

export const StyledCopyrightWrapper = styled.div`
  padding: 82px 0 0 112px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 913px) {
    padding: 82px 0 0;
  }
  @media (max-width: 865px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 550px) {
    margin: 0 auto;
  }
`
