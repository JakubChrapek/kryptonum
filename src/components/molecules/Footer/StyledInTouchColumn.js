import styled from "styled-components"

export const StyledInTouchColumn = styled.div`
  @media only screen and (max-width: 767px) {
    max-width: 370px;
  }
  > p {
    margin-left: 169px;
    max-width: 270px;
    width: 100%;
    @media only screen and (max-width: 1090px) {
      margin-left: 80px;
    }
    @media only screen and (max-width: 1028px) {
      margin-left: 44px;
    }
    @media only screen and (max-width: 880px) {
      margin-left: 0;
      padding: 0 8px;
      max-width: 336px;
    }
    @media only screen and (max-width: 767px) {
      padding: 0;
    }
  }
`
