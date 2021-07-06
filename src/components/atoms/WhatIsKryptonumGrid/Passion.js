import styled from "styled-components"
import { GridItem } from "./GridItem"

export const Passion = styled(GridItem)`
  max-width: 204px;

  @media only screen and (max-width: 1035px) {
    max-width: 160px;
    margin-left: 3rem;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`
