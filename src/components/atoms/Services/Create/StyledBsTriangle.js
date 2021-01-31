import styled from "styled-components"
import { BsTriangle } from "react-icons/bs"

export const StyledBsTriangle = styled(BsTriangle)`
  width: 9px;
  height: 14px;
  transform: rotate(90deg);
  color: var(--accent);
  margin-left: ${({ hasMarginLeft }) =>
    hasMarginLeft ? `${hasMarginLeft}px` : 0};
`
