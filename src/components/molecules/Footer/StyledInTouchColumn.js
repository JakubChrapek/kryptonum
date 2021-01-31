import styled from "styled-components"

export const StyledInTouchColumn = styled.div`
  > h3,
  > p {
    margin-left: 169px;
    max-width: 270px;
    width: 100%;
    @media (max-width: 1060px) {
      margin-left: 80px;
    }
    @media (max-width: 912px) {
      margin-left: 44px;
    }
    @media (max-width: 857px) {
      margin-left: 0;
      padding: 0 8px;
      max-width: 340px;
    }
  }

  h3 {
    font-family: "Poppins";
    font-size: 42px;
    font-weight: normal;
    line-height: 1.5;
    color: var(--white);
  }

  p {
    margin-top: 40px;
    font-family: "JetBrains Mono";
    font-size: 14px;
    line-height: 2.14;
    letter-spacing: 5px;
    color: var(--white);
  }
`
