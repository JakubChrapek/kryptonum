import { graphql } from "gatsby"
import React from "react"
import website from "../../config/website"

import Privacy from "../components/molecules/Privacy/Privacy"
import SEO from "../components/SEO/SEO"

const PrivacyPolicy = ({ data }) => {
  return (
    <div id={website.skipNavId}>
      <SEO url='https://www.kryptonum.eu/polityka-prywatnosci/' meta={data.datoCmsPagePrivacyPolicy.seoMetaTags} />
      <Privacy
        title={data.datoCmsPagePrivacyPolicy.heroTitle}
        content={data.datoCmsPagePrivacyPolicy.privacyPolicyContent}
      />
    </div>
  )
}

export const query = graphql`
  query privacyQuery {
    datoCmsPagePrivacyPolicy {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroTitle {
        value
      }
      privacyPolicyContent {
        value
      }
    }
  }
`

export default PrivacyPolicy
