import styled from "styled-components"
import { Link } from "gatsby"

export const StyledMenuColumnLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  font-family: "Poppins";
  font-size: ${({ copyrightWrapper }) => (copyrightWrapper ? "12px" : "15px")};
  font-weight: normal;
  line-height: ${({ copyrightWrapper }) => (copyrightWrapper ? 1.5 : 1.47)};
  letter-spacing: ${({ copyrightWrapper }) =>
    copyrightWrapper ? "2px" : "normal"};
  color: var(--white);
  position: relative;
  display: inline-block;
  padding: ${({ copyrightWrapper }) => (copyrightWrapper ? "0 8px" : "0 8px")};
  margin-left: ${({ copyrightWrapper }) => (copyrightWrapper ? "21px" : "0")};

  @media only screen and (max-width: 822px) {
    padding-right: 0;
  }
  @media only screen and (max-width: 767px) {
    margin-left: ${({ instagram }) => (instagram ? "0" : "0")};
  }
  @media only screen and (max-width: 767px) {
    margin: 0;
    padding: ${({ instagram, facebook }) =>
      instagram || facebook ? "8px" : "0"};
  }
  &:nth-child(2) {
    margin-left: ${({ copyrightWrapper }) => (copyrightWrapper ? "74px" : "0")};
    @media (max-width: 767px) {
      margin-left: ${({ copyrightWrapper }) => (copyrightWrapper ? "0" : "0")};
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: 2px solid var(--white);
  }
`
