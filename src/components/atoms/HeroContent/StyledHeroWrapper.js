import styled from "styled-components"

export const StyledHeroWrapper = styled.div`
  padding: ${({ variant }) =>
    variant === "blog" ? "112px 0 95px 124px" : "185px 0 129px 136px"};
  @media (max-width: 1025px) {
    padding: ${({ variant }) =>
      variant === "blog" ? "112px 0 95px 78px" : "185px 0 68px 136px"};
  }
  @media only screen and (max-width: 992px) {
    padding: ${({ variant }) =>
      variant === "blog" ? "112px 0 95px 78px" : "185px 0 68px 89px"};
  }
  @media only screen and (max-width: 892px) {
    padding: ${({ variant }) =>
      variant === "blog" ? "" : "185px 28px 68px 28px"};
  }
  @media only screen and (max-width: 714px) {
    padding: ${({ variant }) =>
      variant === "blog" ? "" : "137px 28px 38px 28px"};
  }
  @media only screen and (max-width: 500px) {
    padding: ${({ variant }) =>
      variant === "blog" ? "102px 0 25px 36px" : ""};
  }
  @media only screen and (max-width: 446px) {
    padding-right: ${({ variant }) => (variant === "blog" ? "" : "28px")};
  }
  @media only screen and (max-width: 390px) {
    padding: ${({ variant }) => variant !== "blog" && "137px 28px 38px 28px"};
  }
`
