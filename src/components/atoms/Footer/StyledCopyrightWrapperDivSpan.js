import styled from "styled-components"
import { TextStyles } from "../Text/Text"

export const StyledCopyrightWrapperDivSpan = styled(TextStyles)`
  position: relative;
  text-align: center;
  > p {
    display: inline;
  }
  &.withAfter::after {
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
