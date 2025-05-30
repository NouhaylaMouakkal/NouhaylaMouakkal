"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  MapPin,
  Phone,
  Brain,
  Zap,
  Code,
  Cpu,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react"
import emailjs from "@emailjs/browser"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (!formRef.current) return

    try {
      setIsSubmitting(true)

      // Replace these with your actual EmailJS credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not properly configured.")
      }
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      formRef.current.reset()
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-background">
      <Toaster />

      <div className="relative z-20 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 backdrop-blur-sm border border-white/10">
            <Brain className="h-8 w-8 text-purple-400 mr-2" />
            <Cpu className="h-8 w-8 text-fuchsia-400" />
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to build the future with AI? Let's discuss how we can create intelligent solutions together.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Available for new opportunities</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative">
              <Card className="bg-card/50 backdrop-blur-xl border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <MessageSquare className="h-6 w-6 text-purple-400 mr-3" />
                    Get in Touch
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-lg">
                    Whether you're looking to build AI solutions, discuss machine learning projects, or explore
                    cutting-edge technologies, I'm here to help bring your vision to life.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Contact Cards - Removed all hover effects */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "mouakkalnouhayla@gmail.com",
                  href: "mailto:mouakkalnouhayla@gmail.com",
                  color: "from-purple-500 to-fuchsia-500",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Casablanca, Morocco",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+212 618068186",
                  href: "tel:+212618068186",
                  color: "from-fuchsia-500 to-purple-500",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-xl border-border/50">
                  <CardContent className="p-6 flex items-center">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} mr-4`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-foreground text-base mb-1">{item.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {item.href ? (
                          <a href={item.href} className="text-muted-foreground">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links - Removed all hover effects */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Sparkles className="h-5 w-5 text-yellow-400 mr-2" />
                Connect & Collaborate
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/NouhaylaMouakkal", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/nouhaylamouakkal/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:mouakkalnouhayla@gmail.com", label: "Email" },
                  { icon: Instagram, href: "https://www.instagram.com/nouhayla.mkl1", label: "Instagram" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="p-4 rounded-xl bg-card/50 backdrop-blur-xl border border-border/50"
                  >
                    <social.icon className="h-6 w-6 text-muted-foreground" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <Card className="bg-card/50 backdrop-blur-xl border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Code className="h-6 w-6 text-purple-400 mr-3" />
                  Start a Conversation
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Ready to discuss your next AI project? Drop me a message and let's create something amazing together.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="user_name" className="text-sm font-medium text-muted-foreground">
                        Name
                      </label>
                      <Input
                        id="user_name"
                        name="user_name"
                        placeholder="Your name"
                        required
                        className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="user_email" className="text-sm font-medium text-muted-foreground">
                        Email
                      </label>
                      <Input
                        id="user_email"
                        name="user_email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Let's build an AI solution..."
                      required
                      className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, ideas, or how we can collaborate..."
                      rows={6}
                      required
                      className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white font-medium py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}