import { useEffect } from "react"
import { useLocation } from "@reach/router"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from "locomotive-scroll"

import { scroll } from "../../config/locomotiveScrollOptions"

const Scroll = () => {
  const location = useLocation()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let locomotiveScroll
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scroll.container),
      ...scroll.options,
    })
    setTimeout(() => locomotiveScroll.update(), 500)

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll

    locomotiveScroll.on("scroll", ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(scroll.container, {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScroll.scrollTo(value, 0, 0)
          : locomotiveScroll.scroll.instance.scroll.y
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(scroll.container).style.transform
        ? "transform"
        : "fixed",
    })

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update())

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh()

    // locomotiveScroll.on("scroll", func => {
    //   document.documentElement.setAttribute("data-direction", func.direction)
    // })

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [location])

  return null
}

export default Scroll
