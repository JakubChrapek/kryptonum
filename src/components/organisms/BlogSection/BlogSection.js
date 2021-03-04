import { useStaticQuery } from "gatsby"
import React from "react"
import ArticlesGrid from "../ArticleGrid/ArticlesGrid"

import { SectionStyles } from "../../atoms/BlogSection/StyledBlogSection"
import { StyledFeaturedWrapper } from "../../molecules/FeaturedSection/FeaturedWrapper/StyledFeaturedWrapper"
import { BgColourWrapper } from "../../atoms/Wrapper/Wrapper"

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
    <BgColourWrapper bg="var(--white)">
      <SectionStyles>
        <div>
          <StyledFeaturedWrapper
            firstSpanLength="110%"
            secondSpanLength="140%"
            hasMarginLeft={true}
          >
            <span>New on</span>
            <span>the blog</span>
          </StyledFeaturedWrapper>
        </div>
        <ArticlesGrid posts={nodes} />
      </SectionStyles>
    </BgColourWrapper>
  )
}

export default BlogSection
