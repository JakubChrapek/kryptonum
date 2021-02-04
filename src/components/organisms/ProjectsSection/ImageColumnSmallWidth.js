import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { fadeInUp } from "../../Styles/Animations"
import { StyledImageColumnSmallWidth } from "../../atoms/ProjectsSection/StyledImageColumnSmallWidth"
import { StyledCategoriesListSmallWidth } from "../../atoms/ProjectsSection/StyledCategoriesListSmallWidth"
import { StyledImageColumnSmallWidthPost } from "../../atoms/ProjectsSection/StyledImageColumnSmallWidthPost"

const ImageColumnSmallWidth = ({ dataName }) => {
  return (
    <StyledImageColumnSmallWidth>
      {dataName.nodes.map(project => (
        <StyledImageColumnSmallWidthPost>
          <div
            key={`${project.projectTitle}-${project.projectSlug}-img-wrapper`}
            variants={fadeInUp}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Img fluid={project.projectFeaturedImage.fluid} />
          </div>
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
        </StyledImageColumnSmallWidthPost>
      ))}
      <Link className="btn" to="/projects">
        View all projects
      </Link>
    </StyledImageColumnSmallWidth>
  )
}

export default ImageColumnSmallWidth
