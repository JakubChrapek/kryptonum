import styled from "styled-components"
import { GridItem } from "./GridItem"

export const Focus = styled(GridItem)`
  margin: 4% 0 0;
  max-width: 260px;
  @media only screen and (max-width: 1035px) {
    max-width: 200px;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`
