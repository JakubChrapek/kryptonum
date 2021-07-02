import { Link } from "gatsby"
import styled from "styled-components"

export const BackLink = styled(Link)`
  align-self: flex-start;

  font-size: 14px;
  line-height: 2.12;
  letter-spacing: 0.35em;
  text-decoration: none;
  font-weight: 400;
  color: var(--black);
  position: relative;
  padding: 6px 8px;
  margin-left: -8px;

  @media (max-width: 767px) {
    letter-spacing: 1.71px;
    font-size: 12px;
  }

  &:focus-visible {
    outline-offset: 1px;
    outline: 2px solid ${({ color }) => (color ? color : "var(--black)")};
  }
`
