import styled from "styled-components"

export const StyledWhatWeDoElementRightBar = styled.div`
  flex: 1 1 50%;
  order: ${({ swap }) => (swap ? 1 : 2)};
  margin-right: ${({ swap }) => (swap ? "63px" : "0")};
  @media (max-width: 767px) {
    margin: 0;
  }
  @media only screen and (max-width: 674px) {
    order: ${({ swap }) => (swap ? 2 : 1)};
  }
`
