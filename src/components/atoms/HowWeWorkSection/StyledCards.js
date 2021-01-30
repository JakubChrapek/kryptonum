import styled from "styled-components"
import { motion } from "framer-motion"

export const Cards = styled(motion.ul)`
  margin: 78px 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(258px, 1fr));
  grid-gap: 56px;
  width: 100%;
  @media only screen and (max-width: 758px) {
    grid-template-columns: repeat(4, 258px);
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
    h3 {
      font-family: "Poppins";
      font-size: 28px;
      font-weight: normal;
      line-height: 1.36;
      letter-spacing: normal;
      color: #090909;
      text-transform: none;
    }

    p {
      font-family: 16px;
      line-height: 1.38;
    }
  }
`
