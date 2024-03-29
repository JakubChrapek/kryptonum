import React from "react"
import SEO from "../components/SEO/SEO"

//Atoms

//Molecules
import HeroContent from "../components/molecules/HeroContent/HeroContent"
import BlogCategorizedArticlesGrid from "../components/organisms/Blog/BlogCategorizedArticlesGrid"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  const {
    datoCmsPageBlog: {
      seoMetaTags,
      heroTytul: heroTitle,
      artykulyCytaty: articleQuotes,
    },
  } = data
  return (
    <>
      <SEO url='https://kryptonum.eu/blog' meta={seoMetaTags} />
      <HeroContent content={heroTitle} variant="blog" />
      <BlogCategorizedArticlesGrid articleQuotes={articleQuotes} />
    </>
  )
}

export const query = graphql`
  query blogQuery {
    datoCmsPageBlog {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroTytul {
        value
      }
      artykulyCytaty {
        cytatAutor
        cytatTresc {
          value
        }
        cytatTresc {
          value
        }
        cytatFirmaLubStanowisko {
          value
        }
      }
    }
  }
`

export default Blog
