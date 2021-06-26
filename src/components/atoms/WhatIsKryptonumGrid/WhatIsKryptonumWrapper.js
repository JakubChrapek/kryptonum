import styled from "styled-components"

export const WhatIsKryptonumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1366px;
  margin: 0 auto;
  @media (max-width: 768px) {
    height: auto;
    padding: 40px 29px 29px 29px;
  }
  h2 {
    grid-column: 7/22;
    grid-row: 5/13;
    color: var(--white);
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 76px;

    letter-spacing: 21px;
  }

  p {
    /* color: var(--white); */
    z-index: 1;
    font-size: 16px;
    line-height: 1.88;
    letter-spacing: 5.71px;
  }
`
