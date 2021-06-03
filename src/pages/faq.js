import { graphql } from "gatsby"
import React from "react"

import FAQMain from "../components/molecules/FAQ/FAQMain"

const Faq = ({ data }) => {
  return (
    <div>
      <FAQMain
        faqTitle={data.datoCmsPageFaq.faqTytul}
        faqItems={data.datoCmsPageFaq.faqItems}
      />
    </div>
  )
}

export const data = graphql`
  query faqQuery {
    datoCmsPageFaq {
      faqTytul {
        value
      }
      faqItems {
        faqPytanie {
          value
        }
        faqOdpowiedz {
          value
        }
      }
    }
  }
`

export default Faq
