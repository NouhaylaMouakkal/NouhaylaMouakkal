"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  width?: "fit-content" | "100%"
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export default function ScrollReveal({
  children,
  width = "fit-content",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Set initial and animate values based on direction
  let initial = {}

  switch (direction) {
    case "up":
      initial = { opacity: 0, y: 50 }
      break
    case "down":
      initial = { opacity: 0, y: -50 }
      break
    case "left":
      initial = { opacity: 0, x: 50 }
      break
    case "right":
      initial = { opacity: 0, x: -50 }
      break
    case "none":
      initial = { opacity: 0 }
      break
  }

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, x: 0 })
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.17, 0.55, 0.55, 1],
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  )
}
