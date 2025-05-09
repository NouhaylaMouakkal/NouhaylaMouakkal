"use client"

import type React from "react"

import { useState, useRef } from "react"
import ParticleBackground from "@/components/particle-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Instagram, MapPin, Phone } from "lucide-react"
import emailjs from "@emailjs/browser"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    try {
      setIsSubmitting(true)

      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_PUBLIC_KEY")

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      formRef.current.reset()
    } catch (error) {
      console.error(error)
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Toaster />

      <section className="container py-16 md:py-24">
        <h1 className="section-heading mb-12">Get In Touch</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-lg mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              Feel free to reach out to me through any of the following channels.
            </p>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <CardTitle className="text-base mb-1">Email</CardTitle>
                    <CardDescription>
                      <a href="mailto:nouhaylamouakkal@gmail.com" className="hover:text-primary transition-colors">
                        nouhaylamouakkal@gmail.com
                      </a>
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <CardTitle className="text-base mb-1">Location</CardTitle>
                    <CardDescription>Casablanca, Morocco</CardDescription>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <CardTitle className="text-base mb-1">Phone</CardTitle>
                    <CardDescription>+212 618-068186</CardDescription>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/NouhaylaMouakkal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/nouhayla-mouakkal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="mailto:nouhaylamouakkal@gmail.com"
                  className="bg-card hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
                <a
                  href="https://www.instagram.com/nouhayla.mkl1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="Your email" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" name="subject" placeholder="Subject of your message" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" name="message" placeholder="Your message" rows={5} required />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
