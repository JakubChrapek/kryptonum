import { graphql, Link } from "gatsby"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { StructuredText } from "react-datocms"
import { GatsbyImage } from "gatsby-plugin-image"
import { BackLink } from "../components/atoms/BackLink/BackLink"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../contexts/cursorContext"

const PageWrapper = styled.div`
  background-color: var(--white);
`

const ProjectWrapper = styled.div`
  background-color: var(--white);
  margin: 0 auto;
  width: 100%;
  padding-top: 204px;
  @media (max-width: 1024px) {
    padding-top: 140px;
  }
  @media (max-width: 767px) {
    padding-top: 122px;
  }
`

const ProjectContentWrapper = styled.div`
  background-color: var(--white);
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
`

const TitleWrapper = styled.span`
  display: inline-block;
  margin-top: 100px;
  @media (max-width: 1024px) {
    margin-top: 60px;
    align-self: flex-start;
  }
`

const ProjectTitle = styled.h1`
  font-size: 70px;
  line-height: 1.24;
  letter-spacing: -1.75px;
  color: var(--gray);
  font-family: "Libre Baskerville";
  font-weight: normal;
  @media (max-width: 1024px) {
    font-size: 48px;
  }
  @media (max-width: 767px) {
    font-size: 28px;
    letter-spacing: -0.73px;
  }
`

const ProjectFeaturedImage = styled(GatsbyImage)`
  background-color: var(--white);
  width: 100%;
  height: 60vh;
  min-height: 395px;
  max-height: 600px;
  margin: 88px 0 140px;
  @media (max-width: 1024px) {
    margin: 72px 0;
    height: 90vh;
    max-height: 747px;
  }
  @media (max-width: 767px) {
    margin: 64px 0;
  }
`

const StructuredContentWrapper = styled.div`
  background-color: var(--white);
  max-width: 1366px;
  padding: 0 140px;
  @media (max-width: 1024px) {
    padding: 0 80px;
  }
  @media (max-width: 767px) {
    padding: 0 28px;
    > div:first-of-type {
      margin-top: 0;
    }
  }
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImageWrapper = styled.div`
  background-color: var(--white);
  width: 100%;
  padding: 103px 155px;
  margin: 130px 0 106px;
  background-color: var(--light-gray);

  @media (max-width: 1024px) {
    width: calc(100% + 160px);
    margin: 110px 0 92px;
    padding: 60px 90px;
  }
  @media (max-width: 767px) {
    width: calc(100% + 56px);
    padding: 32px 40px;
    margin: 100px 0 78px;
  }
`

const StyledProjectWideImage = styled(GatsbyImage)``

const ProjectWideImage = ({ image, handleImageEnter, handleNormalLeave }) => (
  <ImageWrapper>
    <StyledProjectWideImage
      onMouseEnter={handleImageEnter}
      onMouseLeave={handleNormalLeave}
      image={image}
    />
  </ImageWrapper>
)

const ChallengeWrapper = styled.div`
  background-color: var(--white);
  width: 100%;
  display: grid;
  grid-template-columns: 25% auto;
  grid-column-gap: 32px;
  padding-left: 75px;
  @media (max-width: 1024px) {
    padding: 0;
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
  }
  @media (max-width: 767px) {
    grid-row-gap: 28px;
  }
`

const FeaturedColumn = styled.div`
  > h2 {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: normal;
    color: var(--black-font);
    @media (max-width: 1024px) {
      font-size: 28px;
    }
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
`

const ContentColumn = styled.div`
  > p {
    font-family: Poppins;
    font-size: 28px;
    font-weight: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: var(--black-font);
    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 1.38;
    }
    + p {
      margin-top: 12px;
    }
    mark {
      background-color: var(--gray);
      color: var(--white);
      font-size: 0.85em;
      padding: 0.025em 0.3em;
      border-radius: 4px;
    }

    a {
      color: var(--black);
      text-decoration: none;
      position: relative;
      font-weight: 500;

      &:after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 1px;
        transform-origin: center bottom;
        transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
          transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
        background-color: var(--black);
      }

      &:focus-visible {
        outline-offset: 1px;
        outline: 2px solid var(--black);
      }

      &:hover:after {
        transform: scaleY(2);
        opacity: 1;
      }
    }
  }

  > a {
    display: inline-block;
    margin-top: 44px;
    font-family: "JetBrains Mono";
    font-size: 14px;
    @media (max-width: 1024px) {
      font-size: 18px;
    }
    @media (max-width: 767px) {
      font-size: 14px;
      margin: 36px 0;
    }
    font-weight: 500;
    line-height: 2.14;
    letter-spacing: 5px;
    text-decoration: none;
    position: relative;
    color: var(--black);
    transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);

    &:after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: calc(100% + 13px);
      height: 2px;
      transform-origin: center bottom;
      transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
        transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      background-color: var(--black);
    }

    &:focus-visible {
      outline-offset: 1px;
      outline: 2px solid var(--black);
    }
  }
`

const ProjectChallengeSection = ({
  headerText,
  paragraph,
  linkText,
  linkToProject,
  handleLinkEnter,
  handleNormalLeave,
}) => (
  <ChallengeWrapper>
    <FeaturedColumn>
      <h2>{headerText}</h2>
    </FeaturedColumn>
    <ContentColumn>
      <StructuredText data={paragraph} />
      <a
        onMouseEnter={handleLinkEnter}
        onMouseLeave={handleNormalLeave}
        rel="noreferrer noopener"
        target="_blank"
        href={linkToProject}
      >
        {linkText ? linkText : "Sprawdź projekt"}
      </a>
    </ContentColumn>
  </ChallengeWrapper>
)

const TestimonialWrapper = styled.div`
  margin: 0 0 210px;
  background-color: var(--white);
  max-width: 506px;
  align-self: flex-start;
  @media (max-width: 1024px) {
    margin: 0 0 120px;
  }
  @media (max-width: 767px) {
    margin: 0 0 80px;
  }
`

const TestimonialContent = styled.p`
  font-family: 'Libre Baskerville';
  font-size: 24px;
  font-weight: normal;
  line-height: 2;
  letter-spacing: normal;
  color: var(--black-font);
  @media (max-width: 767px) {
    font-size: 20px;
  }
}
`

const TestimonialSignatureWrapper = styled.div`
  margin-top: 18px;
  p {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: normal;
    color: var(--black);
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  span {
    font-weight: 500;
    color: var(--text-light-gray);
    margin-left: 2px;
  }
`

const ProjectTestimonialSection = ({
  testimonialContent,
  testimonialAuthor,
  testimonialAdditionalInfo,
}) => (
  <TestimonialWrapper>
    <TestimonialContent>{testimonialContent}</TestimonialContent>
    <TestimonialSignatureWrapper>
      <p>
        {testimonialAuthor}, <span>{testimonialAdditionalInfo}</span>
      </p>
    </TestimonialSignatureWrapper>
  </TestimonialWrapper>
)

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 51px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 18px;
    width: 100%;
  }
  @media (max-width: 767px) {
    width: calc(100% + 56px);
  }
`

const StyledImage = styled(GatsbyImage)``

const ProjectTwoColumnImage = ({
  firstImage,
  secondImage,
  handleImageEnter,
  handleNormalLeave,
}) => (
  <ImageGrid>
    <StyledImage
      onMouseEnter={handleImageEnter}
      onMouseLeave={handleNormalLeave}
      image={firstImage}
    />
    <StyledImage
      onMouseEnter={handleImageEnter}
      onMouseLeave={handleNormalLeave}
      image={secondImage}
    />
  </ImageGrid>
)

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 51px;
  margin-top: 210px;
  @media (max-width: 1024px) {
    margin-top: 120px;
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 36px;
    width: 100%;
  }
`

const FeaturedWrapper = styled.div`
  p {
    font-family: Poppins;
    font-size: 28px;
    font-weight: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: var(--black-font);
    max-width: 410px;
  }
`
const NormalWrapper = styled.div`
  padding-left: 12px;
  max-width: 506px;
  @media (max-width: 1024px) {
    padding-left: 0;
  }
  p {
    font-family: Poppins;
    font-size: 16px;
    line-height: 1.38;
    color: var(--black);
    + p {
      margin-top: 6px;
    }
  }
  mark {
    background-color: var(--gray);
    color: var(--white);
    font-size: 0.85em;
    padding: 0.025em 0.3em;
    border-radius: 4px;
  }
`

const ProjectTwoColumnSection = ({
  featuredParagraph,
  normalParagraphContent,
}) => (
  <TwoColumnGrid>
    <FeaturedWrapper>
      <p>{featuredParagraph}</p>
    </FeaturedWrapper>
    <NormalWrapper>
      <StructuredText data={normalParagraphContent} />
    </NormalWrapper>
  </TwoColumnGrid>
)

const StyledHeaderWrapper = styled.span`
  display: inline-block;
  margin-top: 210px;
  align-self: flex-start;
  h2 {
    max-width: 506px;
    font-family: Poppins;
    font-size: 60px;
    font-weight: normal;
    line-height: 1.65;
    color: var(--black);
  }
  @media (max-width: 1024px) {
    margin-top: 120px;
    h2 {
      font-size: 40px;
      max-width: 361px;
    }
    + ${ImageWrapper} {
      margin-top: 72px;
    }
  }
  @media (max-width: 767px) {
    margin-top: 90px;
    + ${ImageWrapper} {
      margin-top: 40px;
    }
  }
`

const ProjectHeader = ({ headerText }) => (
  <StyledHeaderWrapper>
    <h2>{headerText}</h2>
  </StyledHeaderWrapper>
)

const NextCaseWrapper = styled.div`
  margin: 130px 0 230px;
  @media (max-width: 1024px) {
    margin: 60px 0 180px;
  }
  @media (max-width: 767px) {
    margin: 40px 0 150px;
  }
`

const NextCaseLink = styled(Link)`
  display: inline-block;
  font-family: Poppins;
  font-size: 40px;
  font-weight: normal;
  line-height: 1.28;
  color: var(--black);
  text-decoration: none;
  position: relative;
  padding-bottom: 12px;
  color: var(--black);
  transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
    transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 20px);
    height: 3px;
    transform-origin: left bottom;
    transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    background-color: var(--black);
  }

  &:focus-visible {
    outline-offset: 1px;
    outline: 2px solid var(--black);
  }

  &:hover {
    :after {
      transform: scaleX(1.1);
    }
  }
`

const Project = ({ data }) => {
  const dispatchCursor = useCursorDispatchContext()
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }
  const { datoCmsProject } = data

  const handleImageEnter = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.LIGHT,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.MEDIUM,
    })
  }

  const handleLinkEnter = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.ACCENT_TRANSPARENT,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.BIGGER,
    })
  }
  const handleNormalLeave = () => {
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
  }
  const handleWrapperEnter = () => {
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
  }
  return (
    <PageWrapper onMouseEnter={handleWrapperEnter}>
      <ProjectWrapper>
        <ProjectContentWrapper onMouseEnter={handleWrapperEnter}>
          <BackLink
            onMouseEnter={handleLinkEnter}
            onMouseLeave={handleNormalLeave}
            to="/projekty"
          >
            Powrót do projektów
          </BackLink>
          <TitleWrapper>
            <ProjectTitle>{datoCmsProject.projectTitle}</ProjectTitle>
          </TitleWrapper>
        </ProjectContentWrapper>
        <ProjectFeaturedImage
          onMouseEnter={handleImageEnter}
          onMouseLeave={handleNormalLeave}
          image={datoCmsProject.projectFeaturedImage.gatsbyImageData}
        />
      </ProjectWrapper>
      <StructuredContentWrapper>
        <StructuredText
          data={datoCmsProject.projectContent}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case "DatoCmsProjectWideImage":
                return (
                  <ProjectWideImage
                    handleImageEnter={handleImageEnter}
                    handleNormalLeave={handleNormalLeave}
                    image={record.image.gatsbyImageData}
                  />
                )
              case "DatoCmsProjectChallengeSection":
                return (
                  <ProjectChallengeSection
                    headerText={record.headerText}
                    paragraph={record.paragraphContent.value}
                    linkToProject={record.linkToProject}
                    linkText={record.linkText}
                    handleLinkEnter={handleLinkEnter}
                    handleNormalLeave={handleNormalLeave}
                  />
                )
              case "DatoCmsProjectTestimonial":
                return (
                  <ProjectTestimonialSection
                    testimonialContent={record.testimonialContent}
                    testimonialAuthor={record.testimonialAuthor}
                    testimonialAdditionalInfo={record.testimonialAdditionalInfo}
                  />
                )
              case "DatoCmsProjectTwoColumnImage":
                return (
                  <ProjectTwoColumnImage
                    firstImage={record.firstImage.gatsbyImageData}
                    secondImage={record.firstImage.gatsbyImageData}
                    handleImageEnter={handleImageEnter}
                    handleNormalLeave={handleNormalLeave}
                  />
                )
              case "DatoCmsProject2ColumnHeaderAndParagraph":
                return (
                  <ProjectTwoColumnSection
                    featuredParagraph={record.featuredParagraph}
                    normalParagraphContent={record.normalParagraphContent.value}
                  />
                )
              case "DatoCmsProjectFinalHeader":
                return <ProjectHeader headerText={record.headerText} />
              default:
                return null
            }
          }}
        />
        <NextCaseWrapper>
          <NextCaseLink
            onMouseEnter={handleLinkEnter}
            onMouseLeave={handleNormalLeave}
            to={
              datoCmsProject.nextProject
                ? `/projects/${datoCmsProject.nextProject.projectSlug}`
                : `/projects`
            }
          >
            {datoCmsProject.nextProject
              ? datoCmsProject.nextProject.projectTitle
              : "Wszystkie projekty"}
          </NextCaseLink>
        </NextCaseWrapper>
      </StructuredContentWrapper>
    </PageWrapper>
  )
}

export const projectQuery = graphql`
  query project($id: String!) {
    datoCmsProject(id: { eq: $id }) {
      projectTitle
      projectFeaturedImage {
        gatsbyImageData(width: 1920, placeholder: BLURRED)
      }
      id
      projectSlug
      projectType
      projectCategories {
        categoryName
      }
      seoMetaTags {
        tags
      }
      nextProject {
        projectTitle
        projectSlug
        previewImg: projectFeaturedImage {
          gatsbyImageData(width: 224, height: 150, placeholder: BLURRED)
        }
      }
      projectContent {
        value
        blocks {
          __typename
          ... on DatoCmsProjectWideImage {
            id: originalId
            image {
              gatsbyImageData(width: 777, height: 436, placeholder: BLURRED)
              alt
            }
          }
          ... on DatoCmsProjectChallengeSection {
            id: originalId
            headerText
            paragraphContent {
              value
            }
            linkToProject
            linkText
          }
          ... on DatoCmsProjectTestimonial {
            id: originalId
            testimonialContent
            testimonialAuthor
            testimonialAdditionalInfo
          }
          ... on DatoCmsProjectTwoColumnImage {
            id: originalId
            firstImage {
              gatsbyImageData(width: 518, height: 697, placeholder: BLURRED)
            }
            secondImage {
              gatsbyImageData(width: 518, height: 697, placeholder: BLURRED)
            }
          }
          ... on DatoCmsProject2ColumnHeaderAndParagraph {
            id: originalId
            featuredParagraph
            normalParagraphContent {
              value
            }
          }
          ... on DatoCmsProjectFinalHeader {
            id: originalId
            headerText
          }
        }
      }
    }
  }
`

export default Project
