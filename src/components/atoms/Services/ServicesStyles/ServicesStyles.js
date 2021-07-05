import styled from "styled-components"

export const ServicesStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -2rem;
  max-width: ${({ howWeWorkSection }) => howWeWorkSection && "1366px"};
  margin: 0 auto;
  overflow: hidden;
  align-items: ${({ featuredSection, howWeWorkSection }) =>
    featuredSection || howWeWorkSection ? "flex-start" : "center"};
  padding: ${({ featuredSection, howWeWorkSection }) =>
    featuredSection ? "0 123px 53px 112px" : "88px 0px 140px 0px"};

  .marquee-container {
    overflow: hidden;
  }
  @media only screen and (max-width: 1366px) {
    padding: ${({ featuredSection }) =>
      featuredSection ? "0 93px 53px 111px" : "36px 0 82px 0"};
  }
  @media only screen and (max-width: 1090px) {
    padding: ${({ featuredSection }) =>
      featuredSection ? "0 60px 53px 80px" : "36px 0 82px 0"};
  }
  @media only screen and (max-width: 874px) {
    padding: ${({ featuredSection }) =>
      featuredSection ? "0 60px 53px 80px" : "36px 0 82px 0"};
  }
  @media only screen and (max-width: 767px) {
    padding: ${({ featuredSection }) =>
      featuredSection ? "55px 60px 53px 80px" : "36px 0 82px 0"};
    > p {
      display: ${({ featuredSection, howWeWorkSection }) =>
        featuredSection || howWeWorkSection ? "none" : "block"};
    }
  }
  @media only screen and (max-width: 540px) {
    padding: ${({ featuredSection }) =>
      featuredSection ? "55px 60px 53px 80px" : "36px 0 77px 0"};
  }
  @media only screen and (max-width: 500px) {
    padding: ${({ featuredSection }) =>
      featuredSection ? "55px 60px 55px 20px" : "36px 0 77px 0"};
  }
`
