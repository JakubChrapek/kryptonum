import styled from "styled-components"
import { motion } from "framer-motion"

export const Cards = styled(motion.ul)`
  margin: 78px 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(258px, 1fr));
  grid-gap: 56px;
  width: 100%;
  @media only screen and (max-width: 1323px) {
    grid-gap: 24px;
  }
  @media only screen and (max-width: 1225px) {
    grid-gap: 6px;
  }
  @media only screen and (max-width: 1189px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(4, 258px);
    grid-gap: 30px;
    margin: 83px 0 0;
  }

  li {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 92px 1fr;
    background-color: var(--light-gray);
    padding: 56px 36px;
    &:last-child {
      margin-right: 0;
    }
    p {
      font-family: 16px;
      line-height: 1.38;
    }
  }

  @media (max-width: 1379px) {
    display: flex;
    gap: 56px;

    li {
      width: 258px;
    }
  }
`
