import styled from "styled-components"

import { StyledInTouchColumn } from "./StyledInTouchColumn"

export const StyledMenuColumn = styled(StyledInTouchColumn)`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 413px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  p {
    margin: 0;
    max-width: unset;
  }
`
