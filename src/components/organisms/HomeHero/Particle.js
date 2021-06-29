export class Particle {
  constructor(
    particles,
    canvas,
    canvasCtx,
    x,
    y,
    xVelocity,
    yVelocity,
    size,
    color,
    mouseRadius,
    getX,
    getY
  ) {
    this.particles = particles
    this.canvas = canvas
    this.c = canvasCtx
    this.x = x
    this.y = y
    this.xVelocity = xVelocity
    this.yVelocity = yVelocity
    this.size = size
    this.color = color
    this.mouseRadius = mouseRadius
    this.getX = getX
    this.getY = getY
  }

  draw() {
    this.c.beginPath()
    this.c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
    this.c.strokeStyle = this.color
    this.c.stroke()
  }

  update() {
    this.draw()

    if (this.x > this.canvas.width - this.size || this.x < this.size) {
      this.xVelocity = -this.xVelocity
    }

    if (this.y > this.canvas.height - this.size || this.y < this.size) {
      this.yVelocity = -this.yVelocity
    }

    this.x += this.xVelocity
    this.y += this.yVelocity
  }
}
