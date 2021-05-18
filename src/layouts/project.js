import { graphql } from "gatsby"
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

const TitleWrapper = styled.span``

const ProjectTitle = styled.h1``

const ProjectFeaturedImage = styled(GatsbyImage)`
  width: 100%;
  height: 495px;
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
  display: flex;
  padding-left: 75px;
`

const FeaturedColumn = styled.div``

const ContentColumn = styled.div``

const ProjectChallengeSection = ({ headerText, paragraph, linkToProject }) => (
  <ChallengeWrapper>
    <FeaturedColumn>{headerText}</FeaturedColumn>
    <ContentColumn>
      <StructuredText data={paragraph} />
      {linkToProject}
    </ContentColumn>
  </ChallengeWrapper>
)

const ProjectTestimonialSection = () => <>tralala</>

const ProjectTwoColumnImage = () => <>tralala</>

const ProjectTwoColumnSection = () => <>tralala</>

const ProjectHeader = () => <>tralala</>

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
                  />
                )
              case "DatoCmsProjectFinalHeader":
                return <ProjectHeader headerText={record.headerText} />
              default:
                return null
            }
          }}
        />
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
            normalParagraph
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
