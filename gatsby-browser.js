const React = require("react")
const Layout = require("./src/layouts/Layout").default
const gsap = require("gsap").gsap
const ScrollTrigger = require("gsap/ScrollTrigger")
const ScrollToPlugin = require("gsap/ScrollToPlugin")
const CSSPlugin = require("gsap/CSSPlugin")
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSPlugin)
const CursorProvider = require("./src/contexts/cursorContext").CursorProvider

// exports.shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   if (location.action === "PUSH") {
//     window.setTimeout(() => window.scrollTo(0, 0), 300)
//   } else {
//     const savedPosition = getSavedScrollPosition(location)
//     window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), 300)
//   }
//   return false
// }

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

exports.wrapRootElement = ({ element }) => (
  <CursorProvider>{element}</CursorProvider>
)

exports.onClientEntry = () => {
  window.addEventListener("load", () => {
    const body = document.querySelector("body")
    body.className = document.body.className.replace(/\bno-js\b/, "")
    gsap.from(body, { opacity: 0, duration: 1, ease: "Power3.easeInOut" })
  })
}
