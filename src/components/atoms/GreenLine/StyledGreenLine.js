import styled from "styled-components"
import { SvgStyles } from "../GrayLine/StyledGrayLine"

export const LineStyles = styled.div`
  z-index: 2;
  button {
    border: 2px solid white;
    width: 200px;
    height: 100px;
    z-index: 2;
  }
`

export const AccentLineStyles = styled(SvgStyles)`
  left: calc((100vw - 1010px) / 2 + 105px);
  top: 30%;
  width: 14%;
  height: 57%;
  z-index: 1;
  transform-origin: center center;

  @media (max-width: 1101px) {
    left: 20%;
  }

  @media (max-width: 683px) {
    left: 48px;
    top: 154px;
    width: 25%;
    height: 27%;
    z-index: -1;
  }
  @media (max-width: 565px) {
    top: 122px;
  }
  @media (max-width: 399px) {
    top: 172px;
  }
  line {
    stroke: var(--accent);
    stroke-width: 4px;
  }
`
