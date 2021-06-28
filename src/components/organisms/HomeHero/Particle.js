import {
  distance,
  randomColor,
  randomIntFromRange,
  rotate,
  resolveCollision,
} from "../../../utils/canvasUtils"

export class Particle {
  constructor(
    canvas,
    canvasCtx,
    x,
    y,
    xVelocity,
    yVelocity,
    size,
    color,
    mouse
  ) {
    this.canvas = canvas
    this.c = canvasCtx
    this.x = x
    this.y = y
    this.xVelocity = xVelocity
    this.yVelocity = yVelocity
    this.size = size
    this.color = color
    this.mouse = mouse
  }

  draw() {
    this.c.beginPath()
    this.c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
    this.c.fillStyle = this.color
    this.c.fill()
  }

  update() {
    this.draw()

    if (this.x > this.canvas.width || this.x < 0) {
      this.xVelocity = -this.xVelocity
    }

    if (this.y > this.canvas.height || this.y < 0) {
      this.yVelocity = -this.yVelocity
    }

    // checking collision between two particles
    let dx = this.mouse.x - this.x
    let dy = this.mouse.y - this.y

    let distance = Math.sqrt(dx ** 2 + dy ** 2)

    if (distance < this.mouse.radius + this.size) {
      if (
        this.mouse.x < this.x &&
        this.x < this.canvas.width - this.size * 10
      ) {
        this.x += 10
      }
      if (this.mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10
      }
      if (
        this.mouse.y < this.y &&
        this.y < this.canvas.height - this.size * 10
      ) {
        this.y += 10
      }
      if (this.mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10
      }
    }
    this.x += this.xVelocity
    this.y += this.yVelocity
    this.draw()
  }
}
