import { graphql } from "gatsby"
import React from "react"
import ErrorMain from "../components/organisms/404/ErrorMain"

const FourOFourPage = ({ data }) => {
  return (
    <>
      <div>
        <ErrorMain />
        <h1>404. Sadness</h1>
      </div>
    </>
  )
}

export const query = graphql`
  query fourOhFourQuery {
    datoCmsPage404 {
      errorTitle {
        value
      }
      errorInfoOBledzie {
        value
      }
      errorTekstPrzycisku {
        value
      }
      errorObrazek {
        gatsbyImageData
      }
    }
  }
`

export default FourOFourPage
