let easing = [0.6, -0.05, 0.01, 0.99]
export const containerTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delayChildren: 0.25,
      staggerChildren: 0.3,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 0.7,
      when: "afterChildren",
      delay: 0.25,
      ease: easing,
    },
  },
}

export const itemTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.7, ease: easing } },
  exit: { opacity: 0, transition: { duration: 0.7, ease: easing } },
}

export const projectTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease: easing } },
  exit: { opacity: 0, transition: { duration: 0.4, ease: easing } },
}

export const fadeInUp = {
  initial: {
    y: 4,
    opacity: 0,
    transition: { duration: 0.4, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easing,
    },
  },
  exit: { y: -4, opacity: 0, transition: { duration: 0.4, ease: easing } },
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
