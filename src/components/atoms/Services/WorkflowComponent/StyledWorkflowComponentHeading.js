import styled from "styled-components"

export const StyledWorkflowComponentHeading = styled.h1`
  font-family: LibreBaskerville;
  font-size: 70px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: -1.75px;
  color: var(--gray);
  @media only screen and (max-width: 816px) {
    font-size: ${({ hasMediaQueryFont }) =>
      hasMediaQueryFont ? "44px" : "70px"};
  }
`
