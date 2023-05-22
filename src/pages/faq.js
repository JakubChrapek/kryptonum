import { graphql } from "gatsby"
import React from "react"

import FAQMain from "../components/molecules/FAQ/FAQMain"
import SEO from "../components/SEO/SEO"

const Faq = ({ data }) => {
  return (
    <div>
      <SEO url='https://kryptonum.eu/faq' meta={data.datoCmsPageFaq.seoMetaTags} />
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
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
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
