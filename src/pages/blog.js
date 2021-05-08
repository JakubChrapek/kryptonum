import React from "react"
import SEO from "../components/SEO/SEO"

//Atoms

//Molecules
import HeroContent from "../components/molecules/HeroContent/HeroContent"
import BlogCategorizedArticlesGrid from "../components/organisms/Blog/BlogCategorizedArticlesGrid"

const Blog = () => {
  return (
    <>
      <SEO title="Blog" />
      <HeroContent variant="blog" />
      <BlogCategorizedArticlesGrid />
    </>
  )
}

export default Blog
