import styled from "styled-components"
import { motion } from "framer-motion"

export const ArticlesStyles = styled(motion.section)`
  margin-top: 73px;
  display: flex;
  justify-content: center;
  width: 100%;
  @media only screen and (max-width: 740px) {
    flex-direction: column;
    align-items: center;
  }
  .gatsby-image-wrapper {
    width: 100%;
    margin: 0;
    height: 100%;
    height: 300px;
    @media only screen and (max-width: 560px) {
      height: 236px;
    }
    picture,
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  h3 {
    margin-top: 15px;
    padding-top: 11px;
    border-top: 2px solid var(--black);
    color: var(--dark-bg);
    font-size: 16px;
    font-family: "Poppins";
    line-height: 1.38em;
    font-weight: normal;
    width: 100%;
  }
`
