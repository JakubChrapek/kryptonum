import styled from "styled-components"

export const StyledWorkflowComponentGreenSpan = styled.span`
  font-family: JetBrainsMono;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: 2.57px;
  color: var(--accent);

  @media only screen and (max-width: 816px) {
    display: ${({ implementation }) => (implementation ? "block" : "inline")};
    text-align: ${({ implementation }) => (implementation ? "center" : "left")};
  }
`
