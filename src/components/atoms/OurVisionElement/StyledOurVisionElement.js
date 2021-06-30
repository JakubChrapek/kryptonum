import styled from "styled-components"

export const StyledOurVisionElement = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 170px 1fr;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "142px"};
`
