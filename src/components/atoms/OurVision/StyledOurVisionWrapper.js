import styled from "styled-components"

export const StyledOurVisionWrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  > div {
    flex: 1 1 50%;
  }
`
