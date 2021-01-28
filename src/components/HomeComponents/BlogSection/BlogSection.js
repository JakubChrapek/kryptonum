import { useStaticQuery } from "gatsby"
import React from "react"
import ArticlesGrid from "./ArticlesGrid"

import { SectionStyles, FeaturedWrapper } from "./StyledBlogSection"
import { StyledFeaturedWrapper } from "../../../components/atoms/FeaturedWrapper/StyledFeaturedWrapper"

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
          <span>New on</span>
          <span>the blog</span>
        </StyledFeaturedWrapper>
      </div>
      <ArticlesGrid posts={nodes} />
    </SectionStyles>
  )
}

export default BlogSection
