import styled from "styled-components"

export const StyledImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 60px;
  flex: 1 1 45%;
  width: 45%;
  @media (max-width: 1142px) {
    flex: 1 1 50%;
    width: 50%;
    padding-left: 0;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-width: 524px;
    max-height: 617px;
    @media (max-width: 767px) {
      max-width: 100%;
      max-height: 100%;
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
    color: var(--white);
    text-decoration: none;
  }
`
