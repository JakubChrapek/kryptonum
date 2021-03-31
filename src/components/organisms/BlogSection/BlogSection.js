import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import ArticlesGrid from "../ArticleGrid/ArticlesGrid"

import { SectionStyles } from "../../atoms/BlogSection/StyledBlogSection"
import { StyledFeaturedWrapper } from "../../molecules/FeaturedSection/FeaturedWrapper/StyledFeaturedWrapper"
import { BgColourWrapper } from "../../atoms/Wrapper/Wrapper"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

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
  const dispatchCursor = useCursorDispatchContext()
  const {
    allDatoCmsArticle: { nodes },
  } = useStaticQuery(blogSectionQuery)
  return (
    <BgColourWrapper
      onMouseEnter={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.OUTLINED_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_COLOR",
          cursorColor: CURSOR_COLORS.DARK,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.DEFAULT,
        })
      }}
      bg="var(--white)"
    >
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
