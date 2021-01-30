import styled from "styled-components"

export const StyledImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-start;

  .gatsby-image-wrapper {
    max-width: 524px;
    max-height: 617px;

    picture,
    img {
      object-fit: cover !important;
    }
  }

  p {
    margin-top: 22px;
    color: #090909;
    font-family: "Poppins";
    font-size: 28px;
    line-height: 1.71;
  }
`
