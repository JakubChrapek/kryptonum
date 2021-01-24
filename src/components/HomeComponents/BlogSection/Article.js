import React from "react"
import { motion } from "framer-motion"
import Img from "gatsby-image"
import { ArticleStyles } from "./StyledArticle"

const Article = ({ article }) => {
  const year = article.dateOfPublication.split("-")[0].slice(2)
  const month = article.dateOfPublication.split("-")[1]
  return (
    <ArticleStyles key={article.id} to={`/blog/${article.articleSlug}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ marginLeft: 0 }}
      >
        <Img fluid={article.articleFeaturedImage.fluid} />
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.6 },
          }}
          exit={{ opacity: 0 }}
        >
          {article.articleTitle}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6 },
          }}
          exit={{ opacity: 0 }}
        >{`${month}/${year}`}</motion.p>
      </motion.div>
    </ArticleStyles>
  )
}

export default Article
