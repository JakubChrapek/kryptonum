import { AnimateSharedLayout } from "framer-motion"
import { useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
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
  const [articleCategories, setArticleCategories] = useState([])
  const [pages, setPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const ArticlesPerPage = 4
  const {
    allDatoCmsArticle: { nodes },
    allDatoCmsArticlecategory,
  } = useStaticQuery(AllArticlesQuery)

  const [filteredArticles, setFilteredArticles] = useState(nodes)

  // Updating categories listing based on the actual posts from the datoCMS
  useEffect(() => {
    const categoriesList = []
    nodes.forEach(article => {
      categoriesList.push(JSON.stringify(article.articleCategory))
    })

    let uniqueCategoriesSet = new Set(categoriesList)
    setArticleCategories(
      Array.from(uniqueCategoriesSet).map(item => item.replaceAll('"', ""))
    )
  }, [nodes])

  useEffect(() => {
    const filteredNodes = nodes.filter(node =>
      activeCategory !== "All" ? node.articleCategory === activeCategory : true
    )
    setFilteredArticles(
      filteredNodes.slice(
        ArticlesPerPage * (currentPage - 1),
        ArticlesPerPage * currentPage
      )
    )
    setPages(Math.ceil(filteredNodes.length / ArticlesPerPage))
  }, [activeCategory, pages, currentPage])

  return (
    <Container bg={"var(--light-gray)"}>
      <Wrapper direction="column" padding="75px 146px 87px 136px">
        <AnimateSharedLayout type="crossfade">
          <BlogCategories
            categories={articleCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            setCurrentPage={setCurrentPage}
            layout
          />
          <BlogArticlesGrid
            posts={filteredArticles}
            ArticlesPerPage={ArticlesPerPage}
            activeCategory={activeCategory}
            layout
          />
          <BlogArticlesGridPagination
            ArticlesPerPage={ArticlesPerPage}
            numberOfArticles={filteredArticles.length}
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            layout
          />
        </AnimateSharedLayout>
      </Wrapper>
    </Container>
  )
}

export default BlogCategorizedArticlesGrid
