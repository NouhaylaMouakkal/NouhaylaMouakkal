"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface LoadingScreenProps {
  finishLoading: () => void
}

const LoadingScreen = ({ finishLoading }: LoadingScreenProps) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => finishLoading(), 2000)
    return () => clearTimeout(timer)
  }, [finishLoading])

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= 100) {
          clearInterval(interval)
          return 100
        }
        return prevCounter + 5
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={logoVariants}
        className="mb-8"
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main "N" letter shape */}
          <motion.path
            d="M30 20L30 100H45V100L45 50L80 100H95V20H80V70L45 20H30Z"
            variants={pathVariants}
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Highlight effect for the "N" */}
          <motion.path
            d="M45 50L80 100"
            variants={pathVariants}
            stroke="hsl(var(--secondary))"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              transition: { 
                pathLength: { delay: 0.5, duration: 1 },
                opacity: { delay: 0.5, duration: 0.5 }
              }
            }}
          />
          
          {/* Circular background */}
          <motion.circle
            cx="60"
            cy="60"
            r="50"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </motion.div>

      <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          animate={{ width: `${counter}%` }}
          transition={{ duration: 0.05 }}
        />
      </div>
      <p className="mt-4 text-muted-foreground">Loading your experience...</p>
    </div>
  )
}

export default LoadingScreen