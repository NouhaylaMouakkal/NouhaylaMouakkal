// components/Chatbot.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Minimize2, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming this utility function exists

// Import React Markdown and GFM plugin
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi there! I'm Nouhayla's virtual assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the latest message whenever messages array updates
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    // Add user's message to the chat
    setMessages((prev) => [...prev, userMessage]);
    setInput(""); // Clear the input field

    try {
      // Send the message to your Next.js API route
      const response = await fetch("/api/bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage.text }), // Send the user's message content
      });

      // Check if the API response was successful
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage: Message = {
        id: (Date.now() + 1).toString(), // Unique ID for bot message
        text: data.response, // The generated response from Gemini
        sender: "bot",
        timestamp: new Date(),
      };
      // Add bot's response to the chat
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      // Display an error message to the user
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Oops! I couldn't get a response right now. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </Button>
      )}

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
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                <span className="sr-only">{isMinimized ? "Expand" : "Minimize"}</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
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
                        {/* Use ReactMarkdown to render the message text */}
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({ children }) => <p className="text-sm">{children}</p>,
                            span: ({ children }) => <span className="text-sm">{children}</span>,
                          }}
                        >
                          {message.text}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              <CardFooter className="p-4 border-t">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
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
  );
};

export default Chatbot;