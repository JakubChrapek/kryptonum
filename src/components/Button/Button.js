import { motion } from "framer-motion"
import React from "react"

const Button = ({ children }) => (
  <motion.button
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.3, ease: "backOut" },
    }}
    whileTap={{
      scale: 0.95,
      transition: { duration: 0.3 },
    }}
  >
    {children}
  </motion.button>
)

export default Button
