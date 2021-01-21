import { motion } from "framer-motion"
import styled, { css } from "styled-components"

export const ButtonStyles = styled(motion.button)`
  width: 100%;
  max-width: 387px;
  font-family: "JetBrains Mono";
  font-size: 18px;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: 2.57px;
  color: var(--white);
  border: 1px solid var(--black);
  padding: 31px 20px;
  background-color: var(--black);
  margin: ${({ margin }) => (margin ? margin : "")};
  position: relative;
  left: ${({ left }) => (left ? left : "")};

  a {
    color: var(--white);
    text-decoration: none;
  }

  ${({ small }) =>
    small &&
    css`
      padding: 20px;
      max-width: 290px;
    `}

  ${({ light }) =>
    light &&
    css`
      color: var(--black);
      background-color: var(--white);
      border-color: var(--white);
      a {
        color: var(--black);
      }
    `}
`
