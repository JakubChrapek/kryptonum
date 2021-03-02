import { useStaticQuery } from "gatsby"
import React from "react"
import { Container } from "../../atoms/Container/Container"
import { Wrapper } from "../../atoms/Wrapper/Wrapper"

//Molecules
import BlogArticlesGrid from "../../molecules/Blog/BlogArticlesGrid"
import BlogArticlesGridPagination from "../../molecules/Blog/BlogArticlesGridPagination"
import BlogCategories from "../../molecules/Blog/BlogCategories"

const AllArticlesQuery = graphql`
  query AllArticlesQuery {
    allDatoCmsArticle {
      nodes {
        articleTitle
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
  }
`

const BlogCategorizedArticlesGrid = () => {
  const ArticlesPerPage = 4
  const {
    allDatoCmsArticle: { nodes },
  } = useStaticQuery(AllArticlesQuery)

  return (
    <Container bg={"var(--light-gray)"}>
      <Wrapper direction="column" padding="75px 146px 87px 136px">
        <BlogCategories />
        <BlogArticlesGrid posts={nodes} ArticlesPerPage={ArticlesPerPage} />
        <BlogArticlesGridPagination ArticlesPerPage={ArticlesPerPage} />
      </Wrapper>
    </Container>
  )
}

export default BlogCategorizedArticlesGrid
