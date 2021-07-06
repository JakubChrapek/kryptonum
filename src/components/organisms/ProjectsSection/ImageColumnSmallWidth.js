import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { fadeInUp } from "../../Styles/Animations"
import { StyledImageColumnSmallWidth } from "../../atoms/ProjectsSection/StyledImageColumnSmallWidth"
import { StyledCategoriesListSmallWidth } from "../../atoms/ProjectsSection/StyledCategoriesListSmallWidth"
import { StyledImageColumnSmallWidthPost } from "../../atoms/ProjectsSection/StyledImageColumnSmallWidthPost"
import styled from "styled-components"

const StyledTextWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 0 auto;
  padding: 0 28px;
`

const ImageColumnSmallWidth = ({ dataName }) => {
  return (
    <StyledImageColumnSmallWidth>
      {dataName.nodes.map(project => (
        <StyledImageColumnSmallWidthPost>
          <Link to={`/projekty/${project.projectSlug}`}>
            <div
              key={`${project.projectTitle}-${project.projectSlug}-img-wrapper`}
              variants={fadeInUp}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Img fluid={project.projectFeaturedImage.fluid} />
            </div>
            <StyledTextWrapper>
              <p
                key={`${project.projectTitle}-${project.projectSlug}-projectType`}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
              >{`${project.projectType[0].toUpperCase()}${project.projectType.slice(
                1
              )}`}</p>
              <StyledCategoriesListSmallWidth
                key={`${project.projectTitle}-${project.projectSlug}-projectCategories`}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
              >
                <span>
                  {project.projectCategories
                    .map(category => category.categoryName)
                    .join(", ")}
                </span>
              </StyledCategoriesListSmallWidth>
            </StyledTextWrapper>
          </Link>
        </StyledImageColumnSmallWidthPost>
      ))}
      <Link className="btn" to="/projekty">
        Zobacz wszystkie projekty
      </Link>
    </StyledImageColumnSmallWidth>
  )
}

export default ImageColumnSmallWidth
