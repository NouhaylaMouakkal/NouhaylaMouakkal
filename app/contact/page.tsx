"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
} from "lucide-react"
import emailjs from "@emailjs/browser"
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/animated-section"

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@NouhaylaMouakkal",
    href: "https://github.com/NouhaylaMouakkal",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "in/nouhaylamouakkal",
    href: "https://www.linkedin.com/in/nouhaylamouakkal/",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "mouakkalnouhayla@gmail.com",
    href: "mailto:mouakkalnouhayla@gmail.com",
  },
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mouakkalnouhayla@gmail.com",
    href: "mailto:mouakkalnouhayla@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+212708016211",
    href: "tel:+212708016211",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Casablanca, Morocco",
    href: null,
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    try {
      setIsSubmitting(true)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS not configured")
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setSubmitted(true)
      formRef.current.reset()
    } catch (error) {
      console.error("Error:", error)
      alert("Failed to send message. Please try again or contact me directly via email.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative pt-24 pb-12">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] rounded-full bg-primary/[0.02] blur-[120px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="label mb-4 block">Contact</span>
          <h1 className="heading-lg mb-6">
            Let's create
            <br />
            <span className="text-gradient">something together</span>
          </h1>
          <p className="body-lg max-w-xl">
            Whether you have a project in mind, want to collaborate, or just want to say hello — I'd love to hear
            from you.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-6 rounded-2xl glass">
                <h3 className="font-display font-semibold text-foreground mb-4">Connect</h3>
                <div className="space-y-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{social.label}</p>
                          <p className="text-xs text-muted-foreground">{social.handle}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-6 rounded-2xl glass border border-primary/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Available for opportunities</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Currently open to AI engineering roles, freelance projects, and research collaborations. Prefer
                  remote or hybrid in Morocco/Europe time zones.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right column — Form */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={0.2}>
              <div className="p-6 md:p-8 rounded-2xl glass">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">Message sent!</h3>
                    <p className="text-muted-foreground mb-6">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm text-primary font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="user_name" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Name
                        </label>
                        <input
                          id="user_name"
                          name="user_name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="user_email" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Email
                        </label>
                        <input
                          id="user_email"
                          name="user_email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="Project collaboration, job opportunity, etc."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me about your project, idea, or how we can work together..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
