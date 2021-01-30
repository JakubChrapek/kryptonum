import styled from "styled-components"
import { GridItem } from "./GridItem"

export const Focus = styled(GridItem)`
  margin: 4% 0 0;
  max-width: 260px;
  @media (max-width: 912px) {
    display: none;
  }
`
