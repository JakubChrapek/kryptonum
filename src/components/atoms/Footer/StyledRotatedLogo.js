import { motion } from "framer-motion"
import { Link } from "gatsby"
import styled from "styled-components"

export const StyledRotatedLogo = styled(Link)`
  font-size: 20px;
  line-height: 1.25;
  font-weight: 500;
  text-decoration: none;

  color: var(--white);
  position: absolute;
  transform: rotate(-90deg);
  left: -140px;
  top: 50%;
  @media (max-width: 1440px) {
    left: -104px;
  }
  @media (max-width: 918px) {
    display: none;
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: 2px solid var(--white);
  }
`
