import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import ArticlesGrid from "../ArticleGrid/ArticlesGrid"
import { StructuredText } from "react-datocms"

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
    allDatoCmsArticle(limit: 10, filter: { locale: { eq: "pl" } }) {
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

const BlogSection = ({
  bg,
  blogPosts,
  headerFirstLine,
  headerSecondLine,
  blogTitle,
}) => {
  const dispatchCursor = useCursorDispatchContext()
  const {
    allDatoCmsArticle: { nodes },
  } = useStaticQuery(blogSectionQuery)
  return (
    <BgColourWrapper
      onMouseEnter={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.FULL_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_COLOR",
          cursorColor: CURSOR_COLORS.DARK,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.SMALLER,
        })
      }}
      bg={bg ? bg : "var(--white)"}
    >
      <SectionStyles>
        <div>
          <StyledFeaturedWrapper
            firstSpanLength="100%"
            secondSpanLength="105%"
            hasMarginLeft={true}
          >
            {headerFirstLine ? (
              <>
                <p>{headerFirstLine}</p>
                {headerSecondLine && <p>{headerSecondLine}</p>}
              </>
            ) : (
              <StructuredText data={blogTitle.value} />
            )}
          </StyledFeaturedWrapper>
        </div>
        <ArticlesGrid
          posts={
            blogPosts && blogPosts.nodes.length > 0 ? blogPosts.nodes : nodes
          }
        />
      </SectionStyles>
    </BgColourWrapper>
  )
}

export default BlogSection
