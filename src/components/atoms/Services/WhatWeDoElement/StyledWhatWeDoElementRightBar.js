import styled from "styled-components"

export const StyledWhatWeDoElementRightBar = styled.div`
  order: ${({ swap }) => (swap ? 1 : 2)};
  @media only screen and (max-width: 674px) {
    order: ${({ swap }) => (swap ? 2 : 1)};
  }
`
