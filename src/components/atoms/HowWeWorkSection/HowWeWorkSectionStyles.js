import styled from "styled-components"
import { ServicesStyles } from "../Services/ServicesStyles/ServicesStyles"

export const StyledHowWeWorkSection = styled(ServicesStyles)`
  padding: 129px 82px 133px;
  @media only screen and (max-width: 1366px) {
    padding: 129px 60px 133px;
  }
  @media only screen and (max-width: 1090px) {
    padding: 100px 40px 110px 80px;
  }
  @media only screen and (max-width: 767px) {
    padding: 100px 20px 110px 20px;
  }
`
