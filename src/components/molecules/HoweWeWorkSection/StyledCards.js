import styled from "styled-components"
import { motion } from "framer-motion"

export const Cards = styled(motion.ul)`
  margin: 78px 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(246px, 1fr));
  grid-gap: 56px;
  width: 100%;
  @media only screen and (max-width: 1379px) {
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(238px, 1fr));
    /* grid-template-columns: repeat(4, 256px); */
  }
  @media only screen and (max-width: 1255px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
  @media only screen and (max-width: 1189px) {
    grid-template-columns: repeat(4, 256px);
    grid-gap: 56px;
  }
  @media only screen and (max-width: 1100px) {
    margin: 83px 0 0;
  }

  li {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 92px 1fr;
    background-color: var(--light-gray);
    padding: 30px 20px 48px 30px;
    &:last-child {
      margin-right: 0;
    }
    p {
      font-family: 16px;
      line-height: 1.38;
    }

    @media only screen and (max-width: 1379px) {
      padding: 50px 26px;
    }
  }
`
