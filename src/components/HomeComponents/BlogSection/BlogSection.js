import { useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import ArticlesGrid from "./ArticlesGrid"

const SectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 109px 82px 94px;
  max-width: 1366px;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 57px;
  }

  span {
    font-size: 40px;
    line-height: 1.5em;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: calc(100% + 28px);
      background-color: var(--black);
      height: 3px;
      z-index: -1;
    }

    &:last-child:after {
      width: calc(100% + 64px);
    }
  }
`

const FeaturedWrapper = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: flex-start !important;
  margin: 0 !important;
  width: 50% !important;
`

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
        <FeaturedWrapper>
          <span>New on</span>
          <span>the blog</span>
        </FeaturedWrapper>
      </div>
      <ArticlesGrid posts={nodes} />
    </SectionStyles>
  )
}

export default BlogSection
