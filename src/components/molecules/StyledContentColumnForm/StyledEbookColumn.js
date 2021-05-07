import styled from "styled-components"
import { StyledContentColumn } from "../../atoms/TheUltimateSection/StyledContentColumn"

export const StyledEbookColumn = styled(StyledContentColumn)`
  flex: 2;
  margin-top: -44px;
  margin-right: 0;
  align-items: flex-end;
  @media only screen and (max-width: 767px) {
    align-items: center;
    margin-top: 46px;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-width: 377px;
    @media only screen and (max-width: 912px) {
      width: 400px;
    }
    @media only screen and (max-width: 767px) {
      width: 320px;
    }
    @media only screen and (max-width: 767px) {
      width: 377px;
    }
    @media only screen and (max-width: 406px) {
      width: 100%;
    }
  }
  img,
  picture {
    object-fit: contain;
    @media only screen and (max-width: 912px) {
      object-fit: fill;
    }
    @media only screen and (max-width: 767px) {
      object-fit: contain;
    }
  }
`
