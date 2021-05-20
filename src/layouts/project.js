import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { StructuredText } from "react-datocms"
import { GatsbyImage } from "gatsby-plugin-image"
import { BackLink } from "../components/atoms/BackLink/BackLink"

const ProjectWrapper = styled.div`
  background-color: var(--white);
  margin: 0 auto;
  width: 100%;
  padding-top: 204px;
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
`

const ProjectTitle = styled.h1`
  font-size: 70px;
  line-height: 1.24;
  letter-spacing: -1.75px;
  color: var(--gray);
  font-family: "Libre Baskerville";
  font-weight: normal;
`

const ProjectFeaturedImage = styled(GatsbyImage)`
  width: 100%;
  height: 60vh;
  min-height: 395px;
  max-height: 600px;
  margin: 88px 0 140px;
`

const StructuredContentWrapper = styled.div`
  max-width: 1366px;
  padding: 0 140px;
  @media (max-width: 1024px) {
    padding: 0 80px;
  }
  @media (max-width: 767px) {
    padding: 0 28px;
  }
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImageWrapper = styled.div`
  width: 100%;
  padding: 103px 155px;
  margin: 130px 0 106px;
  background-color: var(--light-gray);
`

const StyledProjectWideImage = styled(GatsbyImage)``

const ProjectWideImage = ({ image }) => (
  <ImageWrapper>
    <StyledProjectWideImage image={image} />
  </ImageWrapper>
)

const ChallengeWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25% auto;
  grid-column-gap: 32px;
  padding-left: 75px;
`

const FeaturedColumn = styled.div`
  > h2 {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: normal;
    color: var(--black-font);
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
    mark {
      background-color: var(--gray);
      color: var(--white);
      font-size: 0.85em;
      padding: 0.025em 0.3em;
      border-radius: 4px;
    }

    a {
      color: var(--accent);
      text-decoration: none;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        transform-origin: center bottom;
        opacity: 0;
        transform: scaleY(0);
        transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
          transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
        background-color: var(--accent);
      }

      &:focus-visible {
        outline-offset: 1px;
        outline: 2px solid var(--accent);
      }

      &:hover:after {
        transform: scaleY(1);
        opacity: 1;
      }
    }
  }

  > a {
    display: inline-block;
    margin-top: 44px;
    font-family: "JetBrains Mono";
    font-size: 14px;
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

    &:hover {
      transform: translateX(17px);
      :after {
        transform: translateX(-17px);
      }
    }
  }
`

const ProjectChallengeSection = ({ headerText, paragraph, linkToProject }) => (
  <ChallengeWrapper>
    <FeaturedColumn>
      <h2>{headerText}</h2>
    </FeaturedColumn>
    <ContentColumn>
      <StructuredText data={paragraph} />
      <a rel="noreferrer noopener" target="_blank" href={linkToProject}>
        Launch project
      </a>
    </ContentColumn>
  </ChallengeWrapper>
)

const TestimonialWrapper = styled.div`
  margin: 0 0 210px;
  max-width: 506px;
  align-self: flex-start;
`

const TestimonialContent = styled.p`
  font-family: 'Libre Baskerville';
  font-size: 24px;
  font-weight: normal;
  line-height: 2;
  letter-spacing: normal;
  color: var(--black-font);
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
`

const StyledImage = styled(GatsbyImage)``

const ProjectTwoColumnImage = ({ firstImage, secondImage }) => (
  <ImageGrid>
    <StyledImage image={firstImage} />
    <StyledImage image={secondImage} />
  </ImageGrid>
)

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 51px;
  margin-top: 210px;
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
`

const ProjectHeader = ({ headerText }) => (
  <StyledHeaderWrapper>
    <h2>{headerText}</h2>
  </StyledHeaderWrapper>
)

const NextCaseWrapper = styled.div`
  margin: 130px 0 230px;
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
  color: var(--black);
  transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
    transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);

  &:after {
    content: "";
    position: absolute;
    bottom: -12px;
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
  const { datoCmsProject } = data
  return (
    <>
      <ProjectWrapper>
        <ProjectContentWrapper>
          <BackLink to="/projects">Back to all projects</BackLink>
          <TitleWrapper>
            <ProjectTitle>{datoCmsProject.projectTitle}</ProjectTitle>
          </TitleWrapper>
        </ProjectContentWrapper>
        <ProjectFeaturedImage
          image={datoCmsProject.projectFeaturedImage.gatsbyImageData}
        />
      </ProjectWrapper>
      <StructuredContentWrapper>
        <StructuredText
          data={datoCmsProject.projectContent}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case "DatoCmsProjectWideImage":
                return <ProjectWideImage image={record.image.gatsbyImageData} />
              case "DatoCmsProjectChallengeSection":
                return (
                  <ProjectChallengeSection
                    headerText={record.headerText}
                    paragraph={record.paragraphContent.value}
                    linkToProject={record.linkToProject}
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
                  />
                )
              case "DatoCmsProject2ColumnHeaderAndParagraph":
                return (
                  <ProjectTwoColumnSection
                    featuredParagraph={record.featuredParagraph}
                    normalParagraph={record.normalParagraph}
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
    </>
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
