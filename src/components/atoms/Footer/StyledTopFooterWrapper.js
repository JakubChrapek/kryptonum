import styled from "styled-components"

export const StyledTopFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 795px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 520px) {
    align-items: flex-start;
  }
`
