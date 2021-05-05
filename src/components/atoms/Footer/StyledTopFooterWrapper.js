import styled from "styled-components"

export const StyledTopFooterWrapper = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 767px) {
    flex-direction: column;
    max-width: 373px;
    margin: 0 auto;
  }
  @media (max-width: 520px) {
    /* align-items: flex-start; */
  }
`
