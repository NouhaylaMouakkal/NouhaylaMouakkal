"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, BookOpen, FileText, Lightbulb } from "lucide-react"
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/animated-section"

interface Writing {
  title: string
  description: string
  type: "Blog Post" | "Research" | "Tutorial"
  date: string
  url: string
  image: string
  icon: React.ElementType
}

const featuredLinks = [
  {
    title: "Hashnode Blog",
    description: "Technical articles on AI, ML, and software engineering best practices.",
    url: "https://nouhaylamouakkal.hashnode.dev/",
    icon: BookOpen,
  },
  {
    title: "Research Publications",
    description: "Academic work published in peer-reviewed journals and conferences.",
    url: "https://www.ijcnis.org/index.php/ijcnis/article/view/6700",
    icon: FileText,
  },
]

const writings: Writing[] = [
  {
    title: "Leveraging RAG for Enhanced AI Responses",
    description:
      "An exploration of how Retrieval-Augmented Generation can improve the accuracy and relevance of AI-generated content in production systems.",
    type: "Blog Post",
    date: "April 2024",
    url: "https://nouhaylamouakkal.hashnode.dev/",
    image: "/placeholder.svg?height=200&width=400&text=RAG",
    icon: Lightbulb,
  },
  {
    title: "Computer Vision Applications in Healthcare",
    description:
      "A deep dive into how computer vision technologies are transforming medical diagnostics and patient care workflows.",
    type: "Research",
    date: "March 2024",
    url: "https://www.ijcnis.org/index.php/ijcnis/article/view/6700",
    image: "/placeholder.svg?height=200&width=400&text=CV+Healthcare",
    icon: FileText,
  },
  {
    title: "The Future of MLOps in Enterprise AI",
    description:
      "Exploring best practices for implementing MLOps in large organizations to streamline AI development and deployment pipelines.",
    type: "Blog Post",
    date: "February 2024",
    url: "https://nouhaylamouakkal.hashnode.dev/",
    image: "/placeholder.svg?height=200&width=400&text=MLOps",
    icon: Lightbulb,
  },
  {
    title: "Optimizing Deep Learning Models for Edge Devices",
    description:
      "Techniques and strategies for deploying efficient deep learning models on resource-constrained edge devices.",
    type: "Tutorial",
    date: "January 2024",
    url: "https://nouhaylamouakkal.hashnode.dev/",
    image: "/placeholder.svg?height=200&width=400&text=Edge+AI",
    icon: Lightbulb,
  },
  {
    title: "Data Privacy Challenges in AI Systems",
    description:
      "An analysis of the privacy concerns and regulatory considerations when building AI systems that process personal data.",
    type: "Research",
    date: "December 2023",
    url: "https://www.ijcnis.org/index.php/ijcnis/article/view/6700",
    image: "/placeholder.svg?height=200&width=400&text=Data+Privacy",
    icon: FileText,
  },
  {
    title: "Building Scalable Data Pipelines with Apache Kafka",
    description:
      "A practical guide to designing and implementing robust data pipelines using Apache Kafka for real-time analytics.",
    type: "Tutorial",
    date: "November 2023",
    url: "https://nouhaylamouakkal.hashnode.dev/",
    image: "/placeholder.svg?height=200&width=400&text=Kafka",
    icon: Lightbulb,
  },
]

export default function WritingsPage() {
  return (
    <div className="relative pt-24 pb-12">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[-5%] w-[30%] h-[30%] rounded-full bg-primary/[0.02] blur-[120px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="label mb-4 block">Writings</span>
          <h1 className="heading-lg mb-6">
            Thoughts on AI,
            <br />
            <span className="text-gradient">engineering & product</span>
          </h1>
          <p className="body-lg max-w-2xl">
            I write about the technologies I work with, the problems I solve, and the patterns I discover along the way.
          </p>
        </AnimatedSection>

        {/* Featured Links */}
        <StaggerContainer className="grid md:grid-cols-2 gap-4 mb-16" staggerDelay={0.1}>
          {featuredLinks.map((link) => (
            <StaggerItem key={link.title}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-6 rounded-2xl glass card-hover"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <link.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-semibold text-foreground">{link.title}</h3>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Articles Grid */}
        <AnimatedSection className="mb-8">
          <h2 className="heading-sm">Latest Articles</h2>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {writings.map((article) => (
            <StaggerItem key={article.title}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden glass card-hover h-full flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        article.type === "Research"
                          ? "bg-primary/10 text-primary border border-primary/10"
                          : article.type === "Tutorial"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/10"
                            : "bg-white/[0.06] text-muted-foreground border border-white/[0.08]"
                      }`}
                    >
                      {article.type}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-xs text-muted-foreground mb-2">{article.date}</p>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{article.description}</p>
                  <div className="flex items-center gap-1.5 text-xs text-primary mt-4 pt-3 border-t border-white/[0.06]">
                    Read article
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  )
}
