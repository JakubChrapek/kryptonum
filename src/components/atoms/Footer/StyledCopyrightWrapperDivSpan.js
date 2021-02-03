import styled from "styled-components"
import { TextStyles } from "../Text/Text"

export const StyledCopyrightWrapperDivSpan = styled(TextStyles)`
  position: relative;
  @media (max-width: 802px) {
    font-size: 10px;
  }
  @media (max-width: 795px) {
    font-size: 12px;
  }
  &::after {
    content: "";
    width: 50px;
    height: 2px;
    margin-left: 9px;
    background-color: var(--accent);
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`
