import useWindowScrollPosition from "@rehooks/window-scroll-position"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Particle } from "./Particle"

const StyledCanvas = styled.canvas`
  background-color: var(--black);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
`

const HeroCanvas = () => {
  const canvasRef = useRef(null)
  const requestIdRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0, radius: 40 })
  const [particles, setParticles] = useState([])

  const getPixelRatio = context => {
    var backingStore =
      context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1

    return (window.devicePixelRatio || 1) / backingStore
  }
  const handleResize = e => {
    if (!canvasRef.current) return
    console.log("CANVAS CURRENT: ", canvasRef.current)
    let ratio = getPixelRatio(canvasRef.current.getContext("2d"))
    canvasRef.current.width = e.target.innerWidth * ratio
    canvasRef.current.height = e.target.innerHeight * ratio
    init()
  }
  const handleMouseMove = e => {
    setMouse(prevState => ({ ...prevState, x: e.x, y: e.y }))
  }

  const init = () => {
    if (!canvasRef.current) return
    setParticles([])
    let numberOfParticles = Math.floor(
      (window.innerHeight * window.innerWidth) / 5000
    )
    const ctx = canvasRef.current.getContext("2d")
    let ratio = getPixelRatio(ctx)
    let width = window.innerWidth
    let height = window.innerHeight
    canvasRef.current.width = width * ratio
    canvasRef.current.height = height * ratio
    let radius = (window.innerHeight / 80) * (window.innerWidth / 80)
    setMouse(prevState => ({ ...prevState, radius }))
    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 5 + 1
      let x =
        Math.random() * (window.innerWidth - size * 2 - size * 2) + size * 2
      let y =
        Math.random() * (window.innerHeight - size * 2 - size * 2) + size * 2
      let xVelocity = Math.random() * 5 - 2.5
      let yVelocity = Math.random() * 5 - 2.5
      let color = "rgba(255, 255, 255, 0.1)"
      setParticles(particles => [
        ...particles,
        new Particle(
          canvasRef.current,
          canvasRef.current.getContext("2d"),
          x,
          y,
          xVelocity,
          yVelocity,
          size,
          color,
          mouse
        ),
      ])
    }
  }

  const renderFrame = () => {
    const context = canvasRef.current.getContext("2d")
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    for (let i = 0; i < particles.length; i++) {
      particles[i].update()
    }
  }

  const tick = () => {
    if (!canvasRef.current) return
    renderFrame()
    requestAnimationFrame(tick)
  }

  useEffect(() => {
    init()
    requestIdRef.current = requestAnimationFrame(tick)
    window.addEventListener("resize", e => handleResize(e))
    // window.addEventListener("mousemove", e => handleMouseMove(e))

    return () => {
      window.removeEventListener("resize", e => handleResize(e))
      cancelAnimationFrame(requestIdRef.current)
      // window.removeEventListener("mousemove", e => handleMouseMove(e))
    }

    // console.log("USEEFFECT")
    // if (typeof window === "undefined" || !window.document) {
    //   return
    // }
    // init()
    // requestAnimationFrame(tick)
  }, [])

  return <StyledCanvas ref={canvasRef} id="heroCanvas" />
}

export default HeroCanvas
