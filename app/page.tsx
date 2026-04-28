"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Brain,
  Database,
  Code2,
  Cloud,
  Eye,
  Sparkles,
  Terminal,
} from "lucide-react"
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/animated-section"

/* ─── Data ─── */
const socials = [
  { icon: Github, href: "https://github.com/NouhaylaMouakkal", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nouhaylamouakkal/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mouakkalnouhayla@gmail.com", label: "Email" },
]

const skillCategories = [
  {
    icon: Brain,
    title: "AI / ML",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "YOLO"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    items: ["PySpark", "Hadoop", "ETL Pipelines", "Power BI", "Kafka"],
  },
  {
    icon: Code2,
    title: "Full Stack",
    items: ["Angular", "Next.js", "Flask", "Node.js", "REST APIs"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["Azure", "Oracle Cloud", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    icon: Sparkles,
    title: "GenAI & NLP",
    items: ["LLMs", "RAG", "LangChain", "Prompt Engineering", "NLP"],
  },
  {
    icon: Terminal,
    title: "Languages",
    items: ["Python", "TypeScript", "Java", "SQL", "C++"],
  },
]

const featuredProjects = [
  {
    id: "learnia",
    title: "LearNia",
    tagline: "AI-Powered SaaS Learning Management System",
    description:
      "An enterprise-grade LMS that leverages generative AI to create personalized learning experiences. Features multimodal content generation, adaptive AI tutoring, immersive VR classrooms, and predictive student analytics.",
    problem:
      "Educational institutions struggle with one-size-fits-all platforms that fail to adapt to individual learning patterns, leading to disengagement and poor outcomes.",
    solution:
      "Architected a full-stack AI-native LMS using Angular, Flask, and Firebase. Integrated LLMs for content generation, built adaptive tutoring algorithms, and deployed VR classroom modules for immersive learning.",
    impact:
      "Streamlined content creation by 70%, increased student engagement metrics, and provided educators with real-time predictive analytics to intervene before at-risk students fall behind.",
    tags: ["GenAI", "Angular", "Flask", "Firebase", "VR", "LLMs"],
    image: "/Projects/learnia.png",
    link: "#",
    featured: true,
  },
  {
    id: "strategic-insight",
    title: "Strategic Insight Pro",
    tagline: "Executive Decision Intelligence",
    description:
      "Real-time analytics platform with AI-driven scenario planning and a strategic chatbot powered by NLP and RAG for enhanced CEO decision-making.",
    problem: "Executives lack real-time, AI-augmented tools for strategic planning and data-driven decisions.",
    solution: "Delivered an AI platform with natural language querying, scenario simulation, and automated insight generation.",
    impact: "Empowered leadership with faster, more accurate strategic decisions through conversational AI.",
    tags: ["NLP", "RAG", "Python", "Power BI", "LLMs"],
    image: "/Projects/oklever.png",
    link: "#",
    featured: true,
  },
  {
    id: "echosign",
    title: "EchoSign",
    tagline: "Moroccan Sign Language Translator",
    description:
      "Transforming Moroccan Sign Language into text and audio for seamless communication with the deaf community using computer vision and deep learning.",
    problem: "Limited accessibility tools for Moroccan Sign Language speakers.",
    solution: "Developed a real-time CV-based translation system using custom gesture recognition models.",
    impact: "Bridged communication gaps and improved accessibility for the deaf community in Morocco.",
    tags: ["Computer Vision", "TensorFlow", "Python", "Mobile"],
    image: "/Projects/EchoSign.png",
    link: "https://github.com/NouhaylaMouakkal/EchoSign.git",
    featured: false,
  },
]

const experiences = [
  {
    role: "AI Consultant Intern",
    company: "ITSS",
    period: "2025 — Present",
    location: "Casablanca",
    description:
      "Leading development of LearNia, an AI-powered SaaS LMS. Architecting multimodal content generation, AI tutoring systems, and analytics dashboards.",
  },
  {
    role: "AI & Data Analyst Intern",
    company: "Oklever",
    period: "2024",
    location: "Casablanca",
    description:
      "Built Strategic Insight Pro — an executive intelligence platform with real-time analytics, NLP-driven chatbot, and RAG-based scenario planning.",
  },
  {
    role: "GenAI Intern",
    company: "ProdigyInfo Tech",
    period: "2024",
    location: "Remote",
    description:
      "Developed a generative AI platform for image style transfer, text-to-image synthesis, and cross-platform creative tools.",
  },
]

/* ─── Page ─── */
export default function HomePage() {
  return (
    <div className="relative">
      {/* Subtle ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] flex items-center pt-20">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Available for opportunities
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="heading-xl"
              >
                <span className="text-foreground">Nouhayla</span>
                <br />
                <span className="text-gradient">Mouakkal</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="space-y-4"
              >
                <p className="text-xl md:text-2xl font-display font-medium text-foreground/90">
                  AI Engineer & Software Consultant Engineer
                </p>
                <p className="body-lg max-w-lg">
                  I design and build intelligent systems at the intersection of machine learning, user experience, and
                  scalable engineering. Specializing in LLMs, NLP, full-stack AI product development, and AI workforce
                  solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full font-medium text-foreground hover:bg-white/[0.06] transition-colors"
                >
                  Get in Touch
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center gap-4 pt-4"
              >
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="p-2.5 rounded-full glass text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all"
                    aria-label={s.label}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-cyan-500/20 rounded-3xl blur-2xl" />
                {/* Image container */}
                <div className="relative h-full rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.02]">
                  <Image
                    src="/myavatar.png"
                    alt="Nouhayla Mouakkal"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating stats */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 glass px-4 py-3 rounded-2xl"
                >
                  <div className="text-2xl font-bold text-foreground">5+</div>
                  <div className="text-xs text-muted-foreground">AI Projects</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 glass px-4 py-3 rounded-2xl"
                >
                  <div className="text-2xl font-bold text-foreground">3+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="section relative">
        <div className="container">
          <AnimatedSection>
            <span className="label mb-4 block">About Me</span>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection delay={0.1}>
              <h2 className="heading-md mb-6">
                Engineering intelligence
                <br />
                <span className="text-gradient">with purpose</span>
              </h2>
            </AnimatedSection>
            <div className="space-y-6">
              <AnimatedSection delay={0.2}>
                <p className="body-lg">
                  I'm Nouhayla Mouakkal, AI Engineer & Consultant at Nia-Gen by ITSS and Big Data & Cloud Computing
                  alumna of ENSET Mohammedia. I don't just build models — I architect end-to-end intelligent systems
                  that solve real problems.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="body-lg">
                  From designing RAG-powered chatbots for executive decision-making to building multimodal LMS platforms
                  with AI tutoring, my work sits at the intersection of research-grade ML and production-grade software.
                  Fueled by code, a RedBull habit, and the chase for the next big tech thrill.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Read full story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS PREVIEW ── */}
      <section className="section-sm relative border-y border-white/[0.04] bg-white/[0.01]">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <span className="label mb-4 block">Tech Stack</span>
            <h2 className="heading-sm">
              Tools I use to <span className="text-gradient">build intelligence</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
            {skillCategories.map((cat) => (
              <StaggerItem key={cat.title}>
                <div className="group p-6 rounded-2xl glass card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/[0.04] text-muted-foreground border border-white/[0.06]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.4} className="text-center mt-10">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all skills
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="section relative">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <AnimatedSection>
                <span className="label mb-4 block">Selected Work</span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="heading-md">
                  Projects that <span className="text-gradient">define my craft</span>
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2}>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                View all projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project, idx) => (
              <AnimatedSection key={project.id} delay={idx * 0.15}>
                <ProjectCard project={project} reversed={idx % 2 !== 0} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE PREVIEW ── */}
      <section className="section-sm relative border-y border-white/[0.04] bg-white/[0.01]">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <span className="label mb-4 block">Experience</span>
            <h2 className="heading-sm">
              Where I've <span className="text-gradient">made impact</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="max-w-3xl mx-auto" staggerDelay={0.12}>
            {experiences.map((exp) => (
              <StaggerItem key={exp.role}>
                <div className="group relative pl-8 pb-10 last:pb-0 border-l border-white/[0.08]">
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/30 border-2 border-background group-hover:bg-primary transition-colors" />
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-display font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-white/[0.04] px-2.5 py-1 rounded-full self-start">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section relative">
        <div className="container">
          <AnimatedSection className="relative overflow-hidden rounded-3xl glass-strong p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-cyan-500/5" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="heading-md">
                Let's build something
                <br />
                <span className="text-gradient">extraordinary</span>
              </h2>
              <p className="body-lg">
                I'm always open to discussing AI products, engineering challenges, or opportunities to create
                meaningful impact.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Start a conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="/CV_Nouhayla_MOUAKKAL.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full font-medium text-foreground hover:bg-white/[0.06] transition-colors"
                >
                  Download CV
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

/* ─── Sub-components ─── */

function ProjectCard({
  project,
  reversed,
}: {
  project: (typeof featuredProjects)[0]
  reversed: boolean
}) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        reversed ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative group ${reversed ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className={`space-y-5 ${reversed ? "lg:order-1 lg:text-right" : ""}`}>
        <div className={`flex flex-wrap gap-2 ${reversed ? "lg:justify-end" : ""}`}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">{project.title}</h3>
          <p className="text-sm text-primary font-medium">{project.tagline}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
            <div>
              <span className="text-xs font-medium text-foreground uppercase tracking-wider">Problem</span>
              <p className="text-sm text-muted-foreground">{project.problem}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
            <div>
              <span className="text-xs font-medium text-foreground uppercase tracking-wider">Solution</span>
              <p className="text-sm text-muted-foreground">{project.solution}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
            <div>
              <span className="text-xs font-medium text-foreground uppercase tracking-wider">Impact</span>
              <p className="text-sm text-muted-foreground">{project.impact}</p>
            </div>
          </div>
        </div>

        <div className={`flex items-center gap-4 pt-2 ${reversed ? "lg:justify-end" : ""}`}>
          {project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Eye className="w-4 h-4" />
            Case Study
          </a>
        </div>
      </div>
    </div>
  )
}
