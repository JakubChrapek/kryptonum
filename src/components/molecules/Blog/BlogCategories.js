import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

const CategoriesStyles = styled(motion.div)`
  width: 100%;
`

const BlogCategories = () => {
  return <CategoriesStyles>Blog Categories</CategoriesStyles>
}

export default BlogCategories
