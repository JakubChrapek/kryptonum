import styled from "styled-components"

export const StyledInTouchColumn = styled.div`
  > p {
    margin-left: 169px;
    max-width: 270px;
    width: 100%;
    @media (max-width: 1060px) {
      margin-left: 80px;
    }
    @media (max-width: 912px) {
      margin-left: 44px;
    }
    @media (max-width: 857px) {
      margin-left: 0;
      padding: 0 8px;
      max-width: 340px;
    }
  }
`
