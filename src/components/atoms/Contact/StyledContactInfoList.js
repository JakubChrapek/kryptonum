import styled from "styled-components"

export const StyledContactInfoList = styled.ul`
  p,
  p > a {
    font-family: "Poppins";
    color: #727272;
    padding-bottom: 4px;
  }
  p > a {
    font-family: "Poppins";
    color: #727272;
    padding-bottom: 4px;
    text-decoration: none;
    position: relative;
    display: inline-block;
    font-weight: 500;
    &:after {
      content: "";
      position: absolute;
      bottom: 1px;
      left: 0;
      width: 100%;
      height: 1px;
      opacity: 0;
      transform-origin: center bottom;
      transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
        transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      background-color: #727272;
    }
    &:hover:after {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  p:last-of-type {
    margin-bottom: 3.6rem;
  }
  &:last-of-type p:last-of-type {
    margin-bottom: 0;
  }
`
