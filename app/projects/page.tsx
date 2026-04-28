"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Filter,
  X,
  Brain,
  Eye,
  BarChart3,
  Globe,
  Shield,
  HeartPulse,
  Car,
  GraduationCap,
  Lightbulb,
} from "lucide-react"
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/animated-section"

type ProjectCategory = "all" | "ai" | "data" | "web" | "cv"

interface Project {
  id: string
  title: string
  tagline: string
  description: string
  problem: string
  solution: string
  impact: string
  tags: string[]
  category: ProjectCategory[]
  image: string
  github?: string
  demo?: string
  icon: React.ElementType
  featured: boolean
}

const projects: Project[] = [
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
    category: ["ai", "web"],
    image: "/Projects/learnia.png",
    icon: GraduationCap,
    featured: true,
  },
  {
    id: "strategic-insight",
    title: "Strategic Insight Pro",
    tagline: "Executive Decision Intelligence Platform",
    description:
      "A real-time analytics and AI-driven scenario planning platform designed for C-suite executives. Features an NLP-powered strategic chatbot with Retrieval-Augmented Generation for contextual decision support.",
    problem:
      "Executives face information overload and lack tools that combine real-time data with AI-generated strategic scenarios and natural language interaction.",
    solution:
      "Built an end-to-end platform with Python backend, Power BI dashboards, and a RAG-based chatbot using vector databases and custom embedding pipelines for enterprise document retrieval.",
    impact:
      "Reduced strategic decision cycle time by 40% and provided executives with instant access to contextual insights from years of internal reports and market data.",
    tags: ["NLP", "RAG", "Python", "Power BI", "LLMs", "Vector DB"],
    category: ["ai", "data"],
    image: "/Projects/oklever.png",
    icon: Lightbulb,
    featured: true,
  },
  {
    id: "echosign",
    title: "EchoSign",
    tagline: "Moroccan Sign Language Translation App",
    description:
      "A computer vision-powered mobile and web application that translates Moroccan Sign Language into text and audio in real-time, bridging communication gaps for the deaf community.",
    problem:
      "The deaf community in Morocco faces significant communication barriers due to the lack of accessible translation tools for Moroccan Sign Language.",
    solution:
      "Developed a custom gesture recognition pipeline using TensorFlow and OpenCV, trained on a curated dataset of Moroccan Sign Language gestures with data augmentation and transfer learning.",
    impact:
      "Created a functional prototype that achieved 85%+ accuracy on test gestures, demonstrating the feasibility of accessible AI for underrepresented language communities.",
    tags: ["Computer Vision", "TensorFlow", "Python", "Mobile", "Accessibility"],
    category: ["ai", "cv"],
    image: "/Projects/EchoSign.png",
    github: "https://github.com/NouhaylaMouakkal/EchoSign.git",
    demo: "https://youtu.be/badtxnmgq_Y",
    icon: Eye,
    featured: true,
  },
  {
    id: "alma-whispers",
    title: "Alma Whispers",
    tagline: "A Soulful Connection Through Technology",
    description:
      "A multi-platform AI doctor that detects emotional state from text, voice, and facial expressions, then generates empathetic responses via LLM + RAG and animates a 3D avatar with real-time TTS.",
    problem:
      "Traditional support tools miss emotional cues and lack multimodal understanding, making it hard to deliver truly empathetic guidance.",
    solution:
      "Built a modular system for text, voice, and facial emotion recognition, LLM response generation with RAG, Flask API orchestration, a React PWA interface, 3D avatar animation, and natural TTS.",
    impact:
      "Delivered an end-to-end intelligent avatar experience that adapts to user emotions and provides personalized, human-like support across platforms.",
    tags: ["LLM", "RAG", "Emotion AI", "Speech", "Computer Vision", "3D Avatar"],
    category: ["ai", "cv", "web"],
    image: "/Projects/almawhisper.png",
    github: "https://github.com/NouhaylaMouakkal/Alma_Whispers",
    demo: "https://youtu.be/7c9zdPTUSLY",
    icon: HeartPulse,
    featured: false,
  },
  {
    id: "cryptmydata",
    title: "CryptMyData",
    tagline: "Blockchain for Student Admissions",
    description:
      "A blockchain-based platform that streamlines student applications for higher education in Morocco with secure, verifiable records and privacy-first workflows.",
    problem:
      "Traditional admissions rely on fragmented, hard-to-verify documents and vulnerable data flows.",
    solution:
      "Designed a secure admissions workflow leveraging blockchain for tamper-evident records, access control, and integrity across institutions.",
    impact:
      "Improved trust, auditability, and data security for applicants and universities while reducing verification friction.",
    tags: ["Blockchain", "AI", "Cybersecurity", "Data Security"],
    category: ["ai", "web", "data"],
    image: "/Projects/cryptoscolar.jpg",
    icon: Shield,
    featured: false,
  },
  {
    id: "n7guard",
    title: "N7 Guard",
    tagline: "AI Gatekeeper Against Phishing",
    description:
      "An AI-powered cybersecurity system that detects phishing attempts in real-time using OCR, NLP, and browser extension integration to protect users from malicious websites and emails.",
    problem:
      "Phishing attacks are becoming increasingly sophisticated, and traditional rule-based detection systems fail to catch novel attack vectors.",
    solution:
      "Built a multi-modal detection system combining OCR for visual analysis, NLP for content classification, and a browser extension for real-time URL and email scanning.",
    impact:
      "Secured 2nd place at the N7 Challenge Hackathon competing against 50+ teams. The system demonstrated real-time detection with sub-second response times.",
    tags: ["AI", "Cybersecurity", "OCR", "Browser Extension", "NLP"],
    category: ["ai", "web"],
    image: "/Projects/N7Guard.png",
    github: "https://github.com/N7-Challenge-GEIW2/Hackathon-Final.git",
    demo: "https://youtu.be/tu4fzEORwcE",
    icon: Shield,
    featured: false,
  },
  {
    id: "brain-tumor",
    title: "Brain Tumor Segmentation",
    tagline: "Deep Learning for Medical Imaging",
    description:
      "A medical imaging pipeline using the NaSNET architecture to perform automatic brain tumor segmentation on MRI scans, trained on the BraTS dataset for clinical-grade accuracy.",
    problem:
      "Manual tumor segmentation in MRI scans is time-consuming, subjective, and requires specialized radiologists, creating bottlenecks in diagnosis.",
    solution:
      "Implemented NaSNET with TensorFlow and Keras, incorporating data augmentation, dice loss optimization, and 3D volume processing for precise tumor boundary detection.",
    impact:
      "Achieved competitive Dice scores on BraTS validation data, demonstrating potential for clinical assistive tools that could accelerate radiological workflows.",
    tags: ["Deep Learning", "Medical Imaging", "TensorFlow", "Keras", "CNN"],
    category: ["ai", "cv"],
    image: "/Projects/BrainTumorSegmentation.png",
    github: "https://github.com/Brain-Tumor-Segmentation-ENSET",
    demo: "https://braints-n7.netlify.app",
    icon: HeartPulse,
    featured: false,
  },
  {
    id: "lung-disease-detection",
    title: "Lung Disease Detection",
    tagline: "CNN Classification With LeNet5 Improvements",
    description:
      "A medical imaging classification project exploring improved LeNet5 and a deeper CNN with dropout to detect lung diseases from X-ray images.",
    problem:
      "Reliable lung disease classification needs robust CNN architectures and careful training strategy selection.",
    solution:
      "Implemented a LeNet5-style CNN and an alternative multi-layer CNN, then evaluated batch size, optimizer choices (SGD, SGD + Momentum, Adam), and hyperparameters.",
    impact:
      "Established comparative performance insights across architectures and training settings to guide model selection for clinical imaging tasks.",
    tags: ["CNN", "LeNet5", "Medical Imaging", "Classification", "Optimization"],
    category: ["ai", "cv"],
    image: "/Projects/lung.png",
    icon: HeartPulse,
    featured: false,
  },
  {
    id: "banking-data",
    title: "Banking Data Analysis",
    tagline: "ML-Powered Financial Insights",
    description:
      "A comprehensive banking data analysis project leveraging machine learning models and Power BI to extract actionable insights from customer transaction data.",
    problem:
      "Banks collect massive amounts of customer data but struggle to transform it into actionable insights for segmentation, risk assessment, and personalized services.",
    solution:
      "Applied PCA, SVM, and KNN for customer segmentation and risk classification. Built interactive Power BI dashboards with drill-down capabilities for stakeholders.",
    impact:
      "Identified distinct customer segments enabling targeted product offerings and reduced default risk through predictive classification models.",
    tags: ["Data Analysis", "Machine Learning", "Power BI", "Python", "SVM"],
    category: ["data"],
    image: "/Projects/ABB.png",
    github: "https://github.com/NouhaylaMouakkal/Analyzing-banking-data",
    icon: BarChart3,
    featured: false,
  },
  {
    id: "safeguide",
    title: "Safe Guide",
    tagline: "Transparent Travel Companion",
    description:
      "An innovative travel application providing real-time pricing information on Moroccan products with geolocation and interactive chat to ensure transparency and trust for tourists.",
    problem:
      "Tourists in Morocco often face unfair pricing and lack reliable information about local product costs and authentic shopping experiences.",
    solution:
      "Built a cross-platform app with geolocation-based pricing, crowd-sourced price database, and an AI chatbot for travel recommendations and negotiation tips.",
    impact:
      "Created a transparent marketplace connecting tourists with fair vendors, reducing price disputes and improving the overall travel experience.",
    tags: ["Geolocation", "Interactive Chat", "Web Development", "Mobile"],
    category: ["web"],
    image: "/Projects/safeguide.png",
    github: "https://github.com/AhmedHoussamBouzine/safeguide",
    demo: "https://safeguide.netlify.app/",
    icon: Globe,
    featured: false,
  },
  {
    id: "object-detection",
    title: "Real-Time Object Detection",
    tagline: "Security & Surveillance AI",
    description:
      "A real-time object detection system using OpenCV and SSD MobileNet for security and surveillance applications, capable of running on edge devices.",
    problem:
      "Traditional surveillance systems require human monitoring and miss events in real-time, creating security vulnerabilities.",
    solution:
      "Implemented SSD MobileNet with OpenCV for real-time detection on video streams. Optimized for edge deployment with TensorFlow Lite conversion.",
    impact:
      "Achieved 20+ FPS on standard hardware with accurate detection of common objects, demonstrating viability for low-cost security deployments.",
    tags: ["OpenCV", "SSD MobileNet", "Computer Vision", "Edge AI"],
    category: ["ai", "cv"],
    image: "/Projects/Object Detection.png",
    github: "https://github.com/NouhaylaMouakkal/Real-time-Object-Detection",
    icon: Eye,
    featured: false,
  },
]

const filterTabs: { label: string; value: ProjectCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "AI & ML", value: "ai" },
  { label: "Computer Vision", value: "cv" },
  { label: "Data Science", value: "data" },
  { label: "Web & Mobile", value: "web" },
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all")

  const filtered =
    activeFilter === "all" ? projects : projects.filter((p) => p.category.includes(activeFilter))

  const featured = filtered.filter((p) => p.featured)
  const others = filtered.filter((p) => !p.featured)

  return (
    <div className="relative pt-24 pb-12">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[-5%] w-[30%] h-[30%] rounded-full bg-primary/[0.02] blur-[120px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <span className="label mb-4 block">Portfolio</span>
          <h1 className="heading-lg mb-6">
            Case studies in
            <br />
            <span className="text-gradient">intelligent engineering</span>
          </h1>
          <p className="body-lg max-w-2xl">
            Each project represents a real problem solved with AI. I document the full journey — from identifying the
            gap to measuring the impact.
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground mr-1" />
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === tab.value
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Featured Projects */}
        {featured.length > 0 && (
          <div className="space-y-16 mb-20">
            {featured.map((project, idx) => (
              <AnimatedSection key={project.id} delay={idx * 0.1}>
                <ProjectCaseStudy project={project} reversed={idx % 2 !== 0} />
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Other Projects Grid */}
        {others.length > 0 && (
          <>
            <AnimatedSection className="mb-8">
              <h2 className="heading-sm">More work</h2>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
              {others.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </>
        )}
      </div>
    </div>
  )
}

function ProjectCaseStudy({ project, reversed }: { project: Project; reversed: boolean }) {
  return (
    <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
      <div className={`relative group ${reversed ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        </div>
      </div>

      <div className={`space-y-5 ${reversed ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <project.icon className="w-5 h-5" />
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">{project.title}</h3>
          <p className="text-sm text-primary font-medium">{project.tagline}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

        <div className="space-y-4">
          <CaseStudyPoint label="Problem" text={project.problem} />
          <CaseStudyPoint label="Solution" text={project.solution} />
          <CaseStudyPoint label="Impact" text={project.impact} />
        </div>

        <div className="flex items-center gap-4 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function CaseStudyPoint({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex gap-3">
      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
      <div>
        <span className="text-xs font-medium text-foreground uppercase tracking-wider">{label}</span>
        <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden glass card-hover flex flex-col h-full">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute top-4 left-4 p-2 rounded-lg bg-primary/10 text-primary backdrop-blur-sm">
          <project.icon className="w-4 h-4" />
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-medium rounded-full bg-white/[0.04] text-muted-foreground border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display font-semibold text-foreground text-lg mb-1">{project.title}</h3>
        <p className="text-sm text-primary font-medium mb-3">{project.tagline}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:gap-2 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
