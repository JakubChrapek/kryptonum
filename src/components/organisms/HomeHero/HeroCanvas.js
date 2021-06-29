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
  const [particles, setParticles] = useState([])
  const [mouse, setMouse] = useState({ x: 0, y: 0, radius: 40 })

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
    let ratio = getPixelRatio(canvasRef.current.getContext("2d"))
    console.log("RATIO: ", ratio)
    canvasRef.current.width = e.target.innerWidth * ratio
    canvasRef.current.height = e.target.innerHeight * ratio
    init()
  }

  const connectParticles = () => {
    let opacityValue = 1
    for (let a = 0; a < particles.length; a++) {
      for (let b = 0; b < particles.length; b++) {
        let distanceX = particles[a].x - particles[b].x
        let distanceY = particles[a].y - particles[b].y
        let distance = distanceX ** 2 + distanceY ** 2
        if (
          distance <
          ((canvasRef.current.width / 10) * canvasRef.current.height) / 10
        ) {
          opacityValue = 1 - distance / 20000
          canvasRef.current.getContext(
            "2d"
          ).strokeStyle = `rgba(47, 188, 121, ${opacityValue})`
          canvasRef.current.getContext("2d").save()
          canvasRef.current.getContext("2d").lineWidth = Math.floor(
            100 / distance
          )

          canvasRef.current.getContext("2d").beginPath()
          canvasRef.current
            .getContext("2d")
            .moveTo(particles[a].x, particles[a].y)
          canvasRef.current
            .getContext("2d")
            .lineTo(particles[b].x, particles[b].y)
          canvasRef.current.getContext("2d").stroke()
          canvasRef.current.getContext("2d").restore()
        }
      }
    }
  }

  const getX = () => mouse && mouse.x
  const getY = () => mouse && mouse.y

  const init = () => {
    if (!canvasRef.current) return
    setParticles([])
    let numberOfParticles = Math.floor(
      (window.innerHeight * window.innerWidth) / 15000
    )
    const ctx = canvasRef.current.getContext("2d")
    let ratio = getPixelRatio(ctx)
    let width = window.innerWidth
    let height = window.innerHeight
    canvasRef.current.width = width * ratio
    canvasRef.current.height = height * ratio
    for (let i = 0; i < numberOfParticles; i++) {
      let size =
        (Math.min(canvasRef.current.width, canvasRef.current.height) / 70) *
          Math.random() +
        1
      let x =
        ratio *
        (Math.random() * (window.innerWidth - size * 2 - size * 2) + size * 2)
      let y =
        ratio *
        (Math.random() * (window.innerHeight - size * 2 - size * 2) + size * 2)
      let xVelocity = 5 * Math.random() - 2.5
      let yVelocity = 5 * Math.random() - 2.5
      let color = "#2fbc79bb"
      setParticles(particles => [
        ...particles,
        new Particle(
          particles,
          canvasRef.current,
          canvasRef.current.getContext("2d"),
          x,
          y,
          xVelocity,
          yVelocity,
          size,
          color,
          mouse.radius,
          getX,
          getY
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
    connectParticles()
  }

  const tick = () => {
    if (!canvasRef.current) return
    renderFrame()
    requestAnimationFrame(tick)
  }

  useEffect(() => {
    const setMousePosition = e =>
      setMouse(prevState => ({ ...prevState, x: e.x, y: e.y }))
    if (canvasRef.current) {
      init()
      requestIdRef.current = requestAnimationFrame(tick)
      window.addEventListener("resize", e => handleResize(e))
      window.addEventListener("mousemove", setMousePosition)
    }

    return () => {
      window.removeEventListener("resize", e => handleResize(e))
      window.removeEventListener("mousemove", setMousePosition)
      cancelAnimationFrame(requestIdRef.current)
    }
  }, [canvasRef.current])

  return <StyledCanvas ref={canvasRef} id="heroCanvas" />
}

export default HeroCanvas
