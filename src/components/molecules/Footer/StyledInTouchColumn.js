import styled from "styled-components"

export const StyledInTouchColumn = styled.div`
  width: 48ch;
  max-width: 48ch;
  @media (max-width: 767px) {
    width: unset;
    max-width: 100%;
  }
  @media (max-width: 343px) {
    > p:first-of-type {
      font-size: 38px;
    }
  }
  mark {
    background-color: var(--accent);
    padding: 0.05rem 0.3rem;
    font-size: 0.9em;
  }
`
