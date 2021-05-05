import styled from "styled-components"

import { StyledInTouchColumn } from "./StyledInTouchColumn"

export const StyledMenuColumn = styled(StyledInTouchColumn)`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding-left: 0;
  margin-left: 16%;
  @media (max-width: 1500px) {
    margin-left: 13%;
  }
  @media (max-width: 1300px) {
    margin-left: 8%;
  }
  @media (max-width: 1200px) {
    margin-left: 6%;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  p {
    margin: 0;
    max-width: unset;
  }
`
