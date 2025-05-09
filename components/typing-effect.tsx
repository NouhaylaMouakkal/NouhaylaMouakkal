"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

const TypingEffect = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1000,
}: TypingEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, delayBetweenTexts)
      return () => clearTimeout(timeout)
    }

    const currentFullText = texts[currentTextIndex]

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false)
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
      }
    } else {
      if (currentText === currentFullText) {
        setIsPaused(true)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1))
        }, typingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return <span className="typing-effect">{currentText}</span>
}

export default TypingEffect
