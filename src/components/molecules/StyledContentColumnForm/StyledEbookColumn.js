import styled from "styled-components"
import { StyledContentColumn } from "../../atoms/TheUltimateSection/StyledContentColumn"

export const StyledEbookColumn = styled(StyledContentColumn)`
  flex: 2;
  margin-top: -44px;
  margin-right: 0;
  align-items: flex-end;

  @media only screen and (max-width: 760px) {
    align-items: center;
    margin-top: 46px;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-width: 377px;
  }
  img,
  picture {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
  }
`
