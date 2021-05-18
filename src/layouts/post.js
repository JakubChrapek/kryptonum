import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { StructuredText } from "react-datocms"
import { TextStyles } from "../components/atoms/Text/Text"
import BlogSection from "../components/organisms/BlogSection/BlogSection"
import { getMonth } from "../utils/dateUtils"
import ellipsize from "ellipsize"
import { BackLink } from "../components/atoms/BackLink/BackLink"

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
    @media (max-width: 767px) {
      margin-top: 48px;
    }
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

  @media (max-width: 1024px) {
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 22px;
    }
    h4 {
      font-size: 20px;
    }
  }

  @media (max-width: 767px) {
    padding-top: 122px;
    h2 + p,
    h3 + p,
    h4 + p,
    ul + p,
    ol + p {
      margin-top: 18px;
    }
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
      margin-top: 48px;
    }
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
  @media (max-width: 1024px) {
    padding: 0 60px;
  }
  @media (max-width: 767px) {
    padding: 0 28px;
  }
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

const AuthorBox = styled.div`
  display: flex;
  align-items: center;
  max-width: 717px;
  width: 100%;
  margin-top: 40px;
  @media (max-width: 767px) {
    margin-top: 48px;
  }
`

const ArticleAuthorProfilePic = styled(GatsbyImage)`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  margin-right: 1rem;
  overflow: visible;
  > div {
    width: 62px;
    height: 62px;
  }
  img {
    border-radius: 50%;
  }
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
  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    width: calc(100% + 56px);
    margin-left: -28px;
    margin-right: -28px;
  }
`

const ArticleTitle = styled.h1`
  margin-top: 49px;
  color: var(--gray);
  font-size: 50px;
  font-weight: 400;
  line-height: 1.26;
  letter-spacing: -1.3px;
  font-family: "Libre Baskerville";

  @media (max-width: 1024px) {
    font-size: 36px;
  }
  @media (max-width: 767px) {
    font-size: 28px;
    letter-spacing: -0.73px;
    line-height: 1.25;
  }
`

const ArticleFooter = styled.div`
  display: flex;
  justify-content: center;
  margin: 72px auto;

  @media (max-width: 767px) {
    margin: 49px auto;
  }
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
  const year = article.dateOfPublication.split("-")[0].slice(2)
  const month = article.dateOfPublication.split("-")[1]
  const monthName = getMonth(month)
  const day = article.dateOfPublication.split("-")[2]

  const relatedArticles =
    similarArticles.length > 0 ? similarArticles : newArticles
  return (
    <>
      <PostWrapper>
        <PostContentWrapper>
          <BackLink to="/blog">Back to all posts</BackLink>
          <AuthorBox>
            <ArticleAuthorProfilePic
              image={article.author.photo.gatsbyImageData}
            />
            <ArticleTextContentBox>
              <AuthorName>{article.author.name}</AuthorName>
              <ArticleFadedText>
                {`Opublikowano ${day} ${monthName} ${year} • 5 min`}
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
              <ArticleFadedText>Napisane przez</ArticleFadedText>
              <AuthorName>{article.author.name}</AuthorName>
              <FooterAuthorBio>
                {ellipsize(article.author.biography, 60)}
              </FooterAuthorBio>
            </ArticleTextContentBox>
          </ArticleFooter>
        </PostContentWrapper>
      </PostWrapper>
      <BlogSection
        bg="var(--light-gray)"
        blogPosts={relatedArticles}
        headerFirstLine="Related"
        headerSecondLine="posts"
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
          gatsbyImageData(
            width: 62
            height: 62
            placeholder: BLURRED
            aspectRatio: 1
          )
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
