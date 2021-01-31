import styled from "styled-components"

export const StyledImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-start;
  @media only screen and (max-width: 1127px) {
    transform: translateY(100px);
    margin-left: 48px;
  }
  @media only screen and (max-width: 994px) {
    transform: translateY(150px);
  }
  @media only screen and (max-width: 902px) {
    transform: translateY(170px);
  }
  @media only screen and (max-width: 870px) {
    transform: translateY(0);
    align-items: center;
    width: 100%;
  }
  .gatsby-image-wrapper {
    max-width: 524px;
    max-height: 617px;
    @media only screen and (max-width: 870px) {
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
`
