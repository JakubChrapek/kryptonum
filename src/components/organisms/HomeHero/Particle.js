import {
  distance,
  randomColor,
  randomIntFromRange,
  rotate,
  resolveCollision,
} from "../../../utils/canvasUtils"

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
    mouse
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
    this.mouse = mouse
  }

  draw() {
    this.c.beginPath()
    this.c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
    this.c.strokeStyle = this.color
    this.c.lineWidth = 2
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

    // checking collision between mouse and particle
    // let dx = this.mouse.x - this.x
    // let dy = this.mouse.y - this.y

    // let distance = Math.sqrt(dx ** 2 + dy ** 2)

    // if (distance < this.mouse.radius + this.size) {
    //   if (
    //     this.mouse.x < this.x &&
    //     this.x < this.canvas.width - this.size * 10
    //   ) {
    //     this.x += 10
    //   }
    //   if (this.mouse.x > this.x && this.x > this.size * 10) {
    //     this.x -= 10
    //   }
    //   if (
    //     this.mouse.y < this.y &&
    //     this.y < this.canvas.height - this.size * 10
    //   ) {
    //     this.y += 10
    //   }
    //   if (this.mouse.y > this.y && this.y > this.size * 10) {
    //     this.y -= 10
    //   }
    // }
    this.x += this.xVelocity
    this.y += this.yVelocity
    this.draw()
  }
}
