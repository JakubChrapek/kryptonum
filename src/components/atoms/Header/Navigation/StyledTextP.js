import styled from "styled-components"

export const StyledTextP = styled.p`
  margin: ${({ margin }) => (margin ? margin : "0")};
  color: var(--text-gray);
  @media only screen and (max-width: 640px) {
    padding: 4px 8px;
  }
`
