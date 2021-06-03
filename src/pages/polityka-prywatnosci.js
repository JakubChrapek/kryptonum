import { graphql } from "gatsby"
import React from "react"

import Privacy from "../components/molecules/Privacy/Privacy"

const PrivacyPolicy = ({ data }) => {
  return (
    <div>
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
