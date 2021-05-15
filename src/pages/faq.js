import { graphql } from "gatsby"
import React from "react"

import FAQMain from "../components/molecules/FAQ/FAQMain"

const Faq = ({ data }) => {
  return (
    <div>
      <FAQMain faqItems={data.allDatoCmsFaqEntry.nodes} />
    </div>
  )
}

export const data = graphql`
  query faqQuery {
    allDatoCmsFaqEntry {
      nodes {
        faqQuestion
        faqAnswer
      }
    }
  }
`

export default Faq
