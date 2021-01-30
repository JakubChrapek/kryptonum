import styled from "styled-components"

export const StyledContentColumnSpan = styled.span`
  justify-self: flex-start;
  color: var(--black);
  font-size: 14px;
  line-height: 1.58em;
  padding: 4px 17px;
  width: 100%;
  max-width: 310px;
  background-color: var(--accent);
  margin-bottom: 24px;
  @media only screen and (max-width: 760px) {
    max-width: 374px;
  }
  @media only screen and (max-width: 760px) {
    max-width: none;
  }
`
