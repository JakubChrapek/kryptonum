import styled from "styled-components"

export const WhatIsKryptonumWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
    text-transform: uppercase;
    line-height: 76px;
    font-family: "JetBrains Mono";
    letter-spacing: 21px;
  }

  p {
    color: var(--black);
    z-index: 1;
    font-size: 16px;
    line-height: 1.88;
    letter-spacing: 5.71px;
  }
`
