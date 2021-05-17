import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { StructuredText } from "react-datocms"
import { TextStyles } from "../components/atoms/Text/Text"
import BlogSection from "../components/organisms/BlogSection/BlogSection"

const ArticleImage = styled(GatsbyImage)`
  width: 100%;
  max-width: 717px;
  margin: 0 auto;
`

const PostWrapper = styled.div`
  background-color: var(--white);
  margin: 0 auto;
  width: 100%;
  padding-top: 204px;

  h1 + p,
  h1 + h2,
  h1 + h3,
  h1 + h4,
  h1 + .gatsby-image-wrapper,
  h1 + ul,
  h1 + ol {
    margin-top: 72px;
  }

  p + ${ArticleImage} {
    margin-top: 62px;
  }

  h2 + .gatsby-image-wrapper,
  h3 + .gatsby-image-wrapper,
  h4 + .gatsby-image-wrapper,
  ul + h2,
  ul + h3,
  ul + h4,
  ol + h2,
  ol + h3,
  ol + h4,
  ul + .gatsby-image-wrapper,
  ol + .gatsby-image-wrapper,
  .gatsby-image-wrapper + h2,
  .gatsby-image-wrapper + h3,
  .gatsby-image-wrapper + h4,
  p + .gatsby-image-wrapper,
  pre {
    margin-top: 49px;
  }
  h2 + p,
  h3 + p,
  h4 + p,
  ul + p,
  ol + p,
  p + h2,
  p + h3,
  p + h4,
  pre + p,
  pre + h2,
  pre + h3,
  pre + h4,
  pre + ol,
  pre + ul,
  pre + .gatsby-image-wrapper {
    margin-top: 33px;
  }

  h2 + ul,
  h2 + ol,
  h3 + ul,
  h3 + ol,
  h4 + ul,
  h4 + ol,
  p + ol,
  p + ul {
    margin-top: 16px;
  }

  h2,
  h3,
  h4 {
    font-family: "Poppins";
    font-weight: 400;
    line-height: 1.71;
    letter-spacing: normal;
  }

  h2 {
    font-size: 28px;
    color: var(--black-font);
  }
  h3 {
    font-size: 26px;
    color: var(--black-font);
  }
  h4 {
    font-size: 24px;
    color: var(--black-font);
  }

  pre {
    padding: 1.4em 1.6em;
    font-size: 14px;
    font-family: "JetBrains Mono";
    background-color: var(--gray);
    color: var(--white);
  }

  mark {
    background-color: var(--gray);
    color: var(--white);
    font-size: 0.85em;
    padding: 0.075em 0.3em;
    border-radius: 4px;
  }
`

const PostContentWrapper = styled.div`
  max-width: 1366px;
  padding: 0 82px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1,
  h2,
  h3,
  h4,
  p,
  ol,
  ul,
  pre {
    width: 100%;
    max-width: 717px;
  }

  li {
    list-style-position: inside;
    > p {
      display: inline-block;
      width: unset;
      max-width: unset;
    }
  }
`

const BackToPostsLink = styled(Link)`
  align-self: flex-start;
  font-family: "JetBrains Mono";
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 2px;
  text-decoration: none;
  font-weight: 500;
  color: var(--black);
  position: relative;
  padding: 6px 8px;
  margin-left: -8px;

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 8px;
    width: calc(100% - 16px);
    height: 1px;
    transform-origin: center bottom;
    opacity: 0;
    transform: scaleY(0);
    transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    background-color: ${({ color }) => (color ? color : "var(--black)")};
  }

  &:focus-visible {
    outline-offset: 1px;
    outline: 2px solid ${({ color }) => (color ? color : "var(--black)")};
  }

  &:hover:after {
    transform: scaleY(1);
    opacity: 1;
  }
`

const AuthorBox = styled.div`
  display: flex;
  align-items: center;
  max-width: 717px;
  width: 100%;
  margin-top: 40px;
`

const ArticleAuthorProfilePic = styled(GatsbyImage)`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  margin-right: 1rem;
`

const ArticleTextContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const AuthorName = styled(TextStyles)`
  font-size: 12px;
  font-weight: 400;
  color: var(--black);
  line-height: 1.5;
  letter-spacing: 2px;
  font-family: "Poppins";
`

const ArticleFadedText = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--slide-specialty);
  line-height: 1.5;
  letter-spacing: 2px;
  font-family: "Poppins";
  margin-top: 6px;
`

const WideImage = styled(GatsbyImage)`
  width: 85%;
`

const ArticleTitle = styled.h1`
  margin-top: 49px;
  color: var(--gray);
  font-size: 50px;
  font-weight: 400;
  line-height: 1.26;
  letter-spacing: -1.3px;
  font-family: "Libre Baskerville";
`

const ArticleFooter = styled.div`
  display: flex;
  justify-content: center;
  margin: 72px auto;

  > .gatsby-image-wrapper {
    margin-right: 18px;
  }

  ${ArticleFadedText} {
    margin-top: 0;
  }

  ${AuthorName} {
    font-size: 15px;
    margin-top: 4px;
    color: var(--dark-bg);
  }
`

const FooterAuthorBio = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-top: 6px;
  font-family: "Poppins";
  letter-spacing: 2px;
  line-height: 1.5;
  color: var(--dark-bg);
  && {
    max-width: 308px;
  }
`

const Post = ({ data }) => {
  const { datoCmsArticle: article, similarArticles, newArticles } = data
  const relatedArticles =
    similarArticles.length > 0 ? similarArticles : newArticles
  console.log(relatedArticles)
  return (
    <>
      <PostWrapper>
        <PostContentWrapper>
          <BackToPostsLink to="/blog">Back to all posts</BackToPostsLink>
          <AuthorBox>
            <ArticleAuthorProfilePic
              image={article.author.photo.gatsbyImageData}
            />
            <ArticleTextContentBox>
              <AuthorName>Jo Edwards</AuthorName>
              <ArticleFadedText>
                Updated on 07 lis 2021 • Czas czytania 5 min
              </ArticleFadedText>
            </ArticleTextContentBox>
          </AuthorBox>
          <ArticleTitle>{article.articleTitle}</ArticleTitle>
          <StructuredText
            data={article.content}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case "DatoCmsWideImage":
                  return (
                    <WideImage
                      image={record.wideImageContent.gatsbyImageData}
                    />
                  )
                case "DatoCmsImage":
                  return (
                    <ArticleImage
                      imagevariant={record.imagevariant}
                      image={record.imageContent.gatsbyImageData}
                    />
                  )
                default:
                  return null
              }
            }}
          />
          <ArticleFooter>
            <ArticleAuthorProfilePic
              image={article.author.photo.gatsbyImageData}
            />
            <ArticleTextContentBox>
              <ArticleFadedText>Written by</ArticleFadedText>
              <AuthorName>Jo Edwards</AuthorName>
              <FooterAuthorBio>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam
              </FooterAuthorBio>
            </ArticleTextContentBox>
          </ArticleFooter>
        </PostContentWrapper>
      </PostWrapper>
      <BlogSection
        bg="var(--light-gray)"
        blogPosts={relatedArticles}
        headerText="Related posts"
      />
    </>
  )
}

export const articleQuery = graphql`
  query article($id: String!, $category: String!) {
    datoCmsArticle(id: { eq: $id }) {
      articleFeaturedImage {
        fluid {
          src
        }
      }
      id
      articleTitle
      author {
        name
        surname
        specialty
        biography
        id
        photo {
          gatsbyImageData
        }
      }
      articleSlug
      articleCategory
      dateOfPublication
      seoMetaTags {
        tags
      }
      content {
        value
        blocks {
          __typename
          ... on DatoCmsWideImage {
            id: originalId
            wideImageContent {
              gatsbyImageData(width: 1087, height: 571, placeholder: BLURRED)
              alt
            }
          }
          ... on DatoCmsImage {
            id: originalId
            imagevariant
            imageContent {
              gatsbyImageData(width: 717, placeholder: BLURRED)
              alt
            }
          }
        }
      }
    }
    similarArticles: allDatoCmsArticle(
      filter: { articleCategory: { eq: $category }, id: { ne: $id } }
    ) {
      nodes {
        articleTitle
        articleCategory
        id
        articleSlug
        articleFeaturedImage {
          gatsbyImageData
        }
      }
    }
    newArticles: allDatoCmsArticle(
      filter: { id: { ne: $id } }
      sort: { fields: dateOfPublication, order: DESC }
    ) {
      nodes {
        articleTitle
        articleCategory
        dateOfPublication
        id
        articleSlug
        articleFeaturedImage {
          fluid(maxWidth: 600) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

export default Post
