import styled from "styled-components"
import { GridItem } from "./GridItem"

export const Creativity = styled(GridItem)`
  justify-self: flex-end;
  width: 275px;
  margin-right: 10%;
  h3 {
    margin-top: 90px;
  }
  p {
    margin: 10px 61px 70px 16px;
  }
  @media (max-width: 912px) {
    display: none;
  }
`
