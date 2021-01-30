import styled from "styled-components"

export const FeaturedSectionH2 = styled.h2`
  text-transform: uppercase;
  font-size: 8px;
  line-height: 1.5em;
  letter-spacing: 1.33px;
  font-family: "Poppins";
  @media only screen and (max-width: 500px) {
    display: ${({ howWeWorkSection }) => (howWeWorkSection ? "block" : "none")};
  }
`
