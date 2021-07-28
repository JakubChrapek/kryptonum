import { graphql } from "gatsby"
import React from "react"
import ErrorMain from "../components/organisms/404/ErrorMain"
import SEO from "../components/SEO/SEO"

const FourOFourPage = ({ data }) => {
  const {
    datoCmsPage404: {
      seoMetaTags,
      errorTitle,
      errorInfoOBledzie: errorMessage,
      errorTekstPrzycisku: errorButtonText,
      errorObrazek: errorImage,
    },
  } = data
  return (
    <>
      <SEO meta={seoMetaTags} />
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
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
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
