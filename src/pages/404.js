import { graphql } from "gatsby"
import React from "react"
import ErrorMain from "../components/organisms/404/ErrorMain"

const FourOFourPage = ({ data }) => {
  const {
    datoCmsPage404: {
      errorTitle,
      errorInfoOBledzie: errorMessage,
      errorTekstPrzycisku: errorButtonText,
      errorObrazek: errorImage,
    },
  } = data
  return (
    <>
      <div>
        <ErrorMain
          errorTitle={errorTitle}
          errorMessage={errorMessage}
          errorButtonText={errorButtonText}
          errorImage={errorImage}
        />
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
