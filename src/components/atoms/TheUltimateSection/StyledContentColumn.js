import styled from "styled-components"

export const StyledContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  margin-right: 40px;
  @media only screen and (max-width: 860px) {
    margin-right: 20px;
  }
  @media only screen and (max-width: 760px) {
    align-items: center;
    margin-right: 0;
  }
`
