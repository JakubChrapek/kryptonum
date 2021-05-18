const React = require("react")
const Layout = require("./src/layouts/Layout").default
const gsap = require("gsap").gsap
const ScrollTrigger = require("gsap/ScrollTrigger")
const ScrollToPlugin = require("gsap/ScrollToPlugin")
const CSSPlugin = require("gsap/CSSPlugin")
const CursorProvider = require("./src/contexts/cursorContext").CursorProvider

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

exports.wrapRootElement = ({ element }) => (
  <CursorProvider>{element}</CursorProvider>
)

// exports.onClientEntry = () => {
//   window.addEventListener("load", () => {
//     const body = document.querySelector("body")
//     body.className = document.body.className.replace(/\bno-js\b/, "")
//     body.classList.add("asscroll-container")
//     gsap.from(body, { opacity: 0, duration: 1, ease: "Power3.easeInOut" })
//   })
// }
