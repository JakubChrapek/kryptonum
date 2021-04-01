import { motion } from "framer-motion"
import { Link } from "gatsby"
import styled from "styled-components"

export const StyledRotatedLogo = styled(Link)`
  font-size: 20px;
  line-height: 1.2em;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Big Caslon";
  color: var(--white);
  position: absolute;
  transform: rotate(-90deg);
  left: -50px;
  top: 50%;
  @media (max-width: 912px) {
    display: none;
  }
`
