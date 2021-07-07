import styled from "styled-components"

export const StyledOurVisionElement = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 170px 1fr;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "142px"};

  @media (max-width: 1024px) {
    grid-gap: 24px;
  }
  @media (max-width: 942px) {
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? marginBottom : "102px"};
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? marginBottom : "64px"};
    span > p {
      display: inline;
    }
  }
`
