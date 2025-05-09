"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Minimize2, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi there! I'm Nouhayla's virtual assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Process and respond
    setTimeout(() => {
      const botResponse = getBotResponse(input)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  const getBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase()

    if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
      return "Hello! I'm Nouhayla's virtual assistant. How can I help you?"
    } else if (input.includes("experience") || input.includes("work")) {
      return "Nouhayla has experience as an AI Consultant Intern at ITSS, AI & Data Analyst Intern at Oklever, and Data Scientist Intern at AL Barid Bank."
    } else if (input.includes("education") || input.includes("study")) {
      return "Nouhayla is pursuing an Engineer's Degree in Computer Engineering: Big Data and Cloud Computing at ENSET Mohammedia."
    } else if (input.includes("skills") || input.includes("technologies")) {
      return "Nouhayla's skills include Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, Data Analytics, Cloud Computing, and more."
    } else if (input.includes("project")) {
      return "Nouhayla has worked on several projects including EchoSign (Moroccan Sign Language Translation), N7 Guard (AI Phishing Detection), Brain Tumor Segmentation, and more. Check the Projects section for details!"
    } else if (input.includes("contact") || input.includes("email") || input.includes("reach")) {
      return "You can contact Nouhayla via email at nouhaylamouakkal@gmail.com or through the contact form on this website."
    } else if (input.includes("certification") || input.includes("certificate")) {
      return "Nouhayla holds certifications in OCI Generative AI Professional, Oracle Cloud Infrastructure Foundations, Fundamentals AI Concepts, Deep Learning with TensorFlow, and more."
    } else if (input.includes("language")) {
      return "Nouhayla is fluent in Arabic (native), English (professional), and French (professional)."
    } else if (input.includes("hobby") || input.includes("interest")) {
      return "Nouhayla enjoys volleyball, swimming, driving, and traveling. She's also a mentor at DigiGirlz Morocco and an evaluator at LDX ENSET."
    } else if (input.includes("award") || input.includes("achievement")) {
      return "Nouhayla has achieved 2nd Place in N7-Challenge National Hackathon and 3rd Place in Orange Digital Center Champions."
    } else {
      return "I don't have specific information about that. Would you like to know about Nouhayla's experience, education, skills, projects, or how to contact her?"
    }
  }

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <Button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg">
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card
          className={cn(
            "fixed right-6 shadow-lg transition-all duration-300 z-50",
            isMinimized ? "bottom-6 h-14 w-64" : "bottom-6 h-[500px] w-[350px] sm:w-[400px]",
          )}
        >
          <CardHeader className="p-4 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              {isMinimized ? "Chat" : "Nouhayla's Assistant"}
            </CardTitle>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsMinimized(!isMinimized)}>
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                <span className="sr-only">{isMinimized ? "Expand" : "Minimize"}</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              <CardContent className="p-4 overflow-y-auto h-[calc(100%-120px)]">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}
                    >
                      <div
                        className={cn(
                          "max-w-[80%] rounded-lg p-3",
                          message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                        )}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              <CardFooter className="p-4 border-t">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage()
                  }}
                  className="flex w-full gap-2"
                >
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </form>
              </CardFooter>
            </>
          )}
        </Card>
      )}
    </>
  )
}

export default Chatbot
