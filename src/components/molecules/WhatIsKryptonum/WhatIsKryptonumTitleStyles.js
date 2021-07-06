import styled from "styled-components"
import { StructuredText } from "react-datocms"

export const WhatIsKryptonumTitleStyles = styled.h2`
  z-index: 1;
  > p {
    font-size: 2rem;
    letter-spacing: 3rem;
    line-height: 3.8;
    color: var(--white);
    font-weight: 400;
    @media (max-width: 1024px) {
      letter-spacing: 2.5rem;
    }
    @media (max-width: 767px) {
      font-size: 3.4vw;
    }
    @media (max-width: 437px) {
      font-size: 5.5vw;
      letter-spacing: 1rem;
    }
  }
  margin-top: 8.1rem;
`

export const WhatIsKryptonumTitle = styled(StructuredText)``
