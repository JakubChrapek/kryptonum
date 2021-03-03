import { useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { Container } from "../../atoms/Container/Container"
import { Wrapper } from "../../atoms/Wrapper/Wrapper"

//Molecules
import BlogArticlesGrid from "../../molecules/Blog/BlogArticlesGrid"
import BlogArticlesGridPagination from "../../molecules/Blog/BlogArticlesGridPagination"
import BlogCategories from "../../molecules/Blog/BlogCategories"

const AllArticlesQuery = graphql`
  query AllArticlesAndCategoriesQuery {
    allDatoCmsArticle(filter: { locale: { eq: "pl" } }) {
      nodes {
        articleTitle
        articleCategory
        dateOfPublication
        articleSlug
        id
        articleFeaturedImage {
          fluid(maxWidth: 518) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    allDatoCmsArticlecategory(filter: { locale: { eq: "pl" } }) {
      nodes {
        categoryName
        forbloglisting
        id
      }
    }
  }
`

const BlogCategorizedArticlesGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const ArticlesPerPage = 4
  const {
    allDatoCmsArticle: { nodes },
    allDatoCmsArticlecategory,
  } = useStaticQuery(AllArticlesQuery)

  return (
    <Container bg={"var(--light-gray)"}>
      <Wrapper direction="column" padding="75px 146px 87px 136px">
        <BlogCategories
          categories={allDatoCmsArticlecategory.nodes}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <BlogArticlesGrid
          posts={nodes}
          ArticlesPerPage={ArticlesPerPage}
          activeCategory={activeCategory}
        />
        <BlogArticlesGridPagination ArticlesPerPage={ArticlesPerPage} />
      </Wrapper>
    </Container>
  )
}

export default BlogCategorizedArticlesGrid
