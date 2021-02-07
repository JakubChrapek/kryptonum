import styled from "styled-components"

export const ServicesStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1366px;
  margin: 0 auto;
  overflow: hidden;
  align-items: ${({ featuredSection, howWeWorkSection }) =>
    featuredSection || howWeWorkSection ? "flex-start" : "center"};
  padding: ${({ featuredSection }) =>
    featuredSection ? "0 123px 133px 141px" : "88px 123px 133px 141px"};

  @media only screen and (max-width: 1366px) {
    padding: ${({ featuredSection }) =>
      featuredSection ? "0 93px 133px 111px" : "36px 93px 133px 111px"};
  }
  @media only screen and (max-width: 1090px) {
    padding: ${({ featuredSection }) =>
      featuredSection ? "0 60px 110px 80px" : "36px 60px 110px 80px"};
  }
  @media only screen and (max-width: 874px) {
    padding: ${({ featuredSection }) =>
      featuredSection ? "0 60px 110px 80px" : "36px 0 110px 0"};
  }
  @media only screen and (max-width: 767px) {
    padding: ${({ featuredSection }) =>
      featuredSection ? "55px 60px 80px 80px" : "36px 0 110px 0"};
    > p {
      display: ${({ featuredSection }) => (featuredSection ? "none" : "block")};
    }
  }
  @media only screen and (max-width: 540px) {
    padding: ${({ featuredSection }) =>
      featuredSection ? "55px 60px 80px 80px" : "36px 0 77px 0"};
  }
  @media only screen and (max-width: 500px) {
    padding: ${({ featuredSection }) =>
      featuredSection ? "55px 60px 55px 20px" : "36px 0 77px 0"};
  }
`
