"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
};

const MAX_MESSAGE_LENGTH = 1000;

const TypingDots = () => (
  <div className="flex items-center gap-1 px-1 py-0.5">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse-soft"
        style={{ animationDelay: `${i * 0.2}s` }}
      />
    ))}
  </div>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi! I'm Nouhayla's AI assistant. Ask me anything about her skills, experience, or availability.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    const text = input.trim().slice(0, MAX_MESSAGE_LENGTH);
    if (!text || isLoading) return;

    setMessages((prev) => [...prev, { id: Date.now().toString(), text, sender: "user" }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      const botText = typeof data.response === "string" ? data.response : "";
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), text: botText, sender: "bot" },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Sorry, I couldn't get a response right now. Please try again.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* FAB */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary shadow-lg glow-primary flex items-center justify-center"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "56px" : "520px",
            }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
            className={cn(
              "fixed bottom-6 right-6 z-50 w-[360px] sm:w-[400px] rounded-2xl overflow-hidden",
              "border border-white/[0.08] shadow-2xl",
              "bg-[hsl(222,47%,5%)]"
            )}
          >
            {/* Header */}
            <div className="relative flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary/20 to-cyan-500/10 border-b border-white/[0.07]">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-none">Nouhayla's Assistant</p>
                  <p className="text-[10px] text-primary/80 mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized((v) => !v)}
                  className="h-7 w-7 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Minimize2 className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="h-7 w-7 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="h-[380px] overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "flex gap-2",
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      {msg.sender === "bot" && (
                        <div className="h-7 w-7 shrink-0 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center mt-0.5">
                          <Bot className="h-3.5 w-3.5 text-primary" />
                        </div>
                      )}
                      <div
                        className={cn(
                          "max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                          msg.sender === "user"
                            ? "bg-primary text-white rounded-br-sm"
                            : "bg-white/[0.06] border border-white/[0.08] text-slate-200 rounded-bl-sm"
                        )}
                      >
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({ children }) => <p className="text-[13px] leading-relaxed">{children}</p>,
                            strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                            a: ({ href, children }) => {
                              const safeHref = href && /^https?:\/\//i.test(href) ? href : undefined;
                              return (
                                <a href={safeHref} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
                                  {children}
                                </a>
                              );
                            },
                            ul: ({ children }) => <ul className="mt-1 space-y-0.5 list-disc list-inside">{children}</ul>,
                            li: ({ children }) => <li className="text-[13px]">{children}</li>,
                          }}
                        >
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2 justify-start"
                    >
                      <div className="h-7 w-7 shrink-0 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center">
                        <Bot className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="bg-white/[0.06] border border-white/[0.08] rounded-2xl rounded-bl-sm px-3.5 py-2.5">
                        <TypingDots />
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="px-4 py-3 border-t border-white/[0.07] bg-white/[0.02]">
                  <form
                    onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                    className="flex items-center gap-2"
                  >
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about Nouhayla..."
                      disabled={isLoading}
                      maxLength={MAX_MESSAGE_LENGTH}
                      className={cn(
                        "flex-1 bg-white/[0.06] border border-white/[0.1] rounded-xl px-3.5 py-2",
                        "text-sm text-white placeholder:text-white/30 outline-none",
                        "focus:border-primary/50 focus:bg-white/[0.08] transition-colors",
                        "disabled:opacity-50"
                      )}
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className={cn(
                        "h-9 w-9 rounded-xl flex items-center justify-center shrink-0 transition-all",
                        "bg-primary text-white hover:bg-primary/90",
                        "disabled:opacity-40 disabled:cursor-not-allowed"
                      )}
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
