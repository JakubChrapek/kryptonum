import styled from "styled-components"

export const StyledImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .gatsby-image-wrapper {
    width: 524px;
    height: 617px;
    @media only screen and (max-width: 1200px) {
      width: 474px;
      height: 577px;
    }
    @media only screen and (max-width: 1033px) {
      width: 444px;
      height: 547px;
    }
    @media only screen and (max-width: 821px) {
      width: 414px;
      height: 517px;
    }
    @media only screen and (max-width: 767px) {
      width: 100%;
    }
    picture,
    img {
      object-fit: cover;
    }
  }

  p {
    margin-top: 22px;
    color: #090909;
    font-family: "Poppins";
    font-size: 28px;
    line-height: 1.71;
  }
  a {
    color: #090909;
    text-decoration: none;
  }
`
