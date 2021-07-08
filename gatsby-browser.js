import { AnimatePresence } from "framer-motion"

const React = require("react")
const Layout = require("./src/layouts/Layout").default
const gsap = require("gsap").gsap
const ScrollTrigger = require("gsap/ScrollTrigger")
const ScrollToPlugin = require("gsap/ScrollToPlugin")
const CSSPlugin = require("gsap/CSSPlugin")
const CursorProvider = require("./src/contexts/cursorContext").CursorProvider

export const wrapPageElement = ({ element, props }) => (
  <AnimatePresence exitBeforeEnter>
    <Layout {...props}>{element}</Layout>
  </AnimatePresence>
)

// export const wrapPageElement = ({ element }) => (
//   <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
// )

export const wrapRootElement = ({ element }) => (
  <CursorProvider>{element}</CursorProvider>
)

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  // transition duration from `layout.js` * 1000 to get time in ms
  // * 2 for exit + enter animation
  const TRANSITION_DELAY = 0.2 * 1000
  // if it's a "normal" route
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
  }
  // if we used the browser's forwards or back button
  else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]
    window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY)
  }
  return false
}
