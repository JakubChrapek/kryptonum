import { useStaticQuery } from "gatsby"
import React from "react"
import ArticlesGrid from "../ArticleGrid/ArticlesGrid"

import { SectionStyles } from "../../atoms/BlogSection/StyledBlogSection"
import { StyledFeaturedWrapper } from "../../molecules/FeaturedSection/FeaturedWrapper/StyledFeaturedWrapper"

const blogSectionQuery = graphql`
  query LastArticles {
    allDatoCmsArticle(limit: 10) {
      nodes {
        articleTitle
        dateOfPublication
        articleSlug
        id
        articleFeaturedImage {
          fluid(maxWidth: 600) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const BlogSection = () => {
  const {
    allDatoCmsArticle: { nodes },
  } = useStaticQuery(blogSectionQuery)
  return (
    <SectionStyles>
      <div>
        <StyledFeaturedWrapper>
          <span longer={true}>New on</span>
          <span>the blog</span>
        </StyledFeaturedWrapper>
      </div>
      <ArticlesGrid posts={nodes} />
    </SectionStyles>
  )
}

export default BlogSection
