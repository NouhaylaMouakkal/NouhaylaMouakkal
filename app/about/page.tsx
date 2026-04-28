"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Download,
  Briefcase,
  GraduationCap,
  Trophy,
  Award,
  Users,
  Mic,
  Globe,
  ArrowUpRight,
  MapPin,
  Calendar,
  Sparkles,
  Target,
  Lightbulb,
} from "lucide-react"
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/animated-section"

type TabValue = "experience" | "education" | "awards" | "certifications" | "activities"

const tabs: { value: TabValue; label: string; icon: React.ElementType }[] = [
  { value: "experience", label: "Experience", icon: Briefcase },
  { value: "education", label: "Education", icon: GraduationCap },
  { value: "awards", label: "Competitions & Hackathons", icon: Trophy },
  { value: "certifications", label: "Certifications", icon: Award },
  { value: "activities", label: "Activities", icon: Users },
]

const experiences = [
  {
    role: "AI Consultant Engineer",
    company: "ITSS",
    period: "Sep 2025 — Present",
    location: "Casablanca",
    description:
      "Leading AI product strategy and engineering for enterprise clients. Architecting intelligent systems, mentoring junior engineers, and driving GenAI adoption across the organization.",
    highlights: ["AI Strategy", "Team Leadership", "Enterprise GenAI"],
  },
  {
    role: "AI Consultant Intern",
    company: "ITSS",
    period: "Feb 2025 — Aug 2025",
    location: "Casablanca",
    description:
      "Architecting LearNia, an AI-powered SaaS LMS. Leading multimodal content generation, personalized AI tutoring systems, VR classroom integration, and real-time student analytics dashboards.",
    highlights: ["GenAI Integration", "System Architecture", "Product Strategy"],
  },
  {
    role: "AI & Data Analyst Intern",
    company: "Oklever",
    period: "Jun 2024 — Aug 2024",
    location: "Casablanca",
    description:
      "Built Strategic Insight Pro — an executive intelligence platform delivering real-time analytics, AI-driven scenario planning, and a strategic chatbot powered by NLP and Retrieval-Augmented Generation.",
    highlights: ["RAG Systems", "NLP", "Executive Dashboards"],
  },
  {
    role: "GenAI Intern",
    company: "ProdigyInfo Tech",
    period: "Jul 2024",
    location: "Remote",
    description:
      "Developed a generative AI platform offering image style transfer, image-to-image translation, text generation, and text-to-image synthesis with seamless cross-platform accessibility.",
    highlights: ["Generative AI", "Computer Vision", "Cross-Platform"],
  },
  {
    role: "Data Scientist Intern",
    company: "AL Barid Bank",
    period: "Jul 2023",
    location: "Rabat",
    description:
      "Conducted banking data analysis using Python and ML (PCA, SVM, KNN). Developed customer segmentation models, built Power BI dashboards, and optimized model performance for actionable insights.",
    highlights: ["ML Pipelines", "Power BI", "Customer Segmentation"],
  },
]

const education = [
  {
    degree: "Engineer's Degree in Big Data & Cloud Computing",
    school: "National Higher School of Technical Education (ENSET)",
    period: "2022 — 2025",
    location: "Mohammedia",
    detail: "Specializing in distributed systems, machine learning, and cloud architecture",
  },
  {
    degree: "DGUS in Mathematics and Computer Science",
    school: "Polydisciplinary Faculty",
    period: "2020 — 2022",
    location: "Larache",
    detail: "Strong foundation in algorithms, linear algebra, and statistical methods",
  },
  {
    degree: "Baccalaureate in Mathematical Sciences A",
    school: "Abdelali Benchakroune High School",
    period: "2019 — 2020",
    location: "Larache",
    detail: "Excellence in mathematics, physics, and foundational sciences",
  },
]

const awards = [
  {
    title: "2nd Place — N7 Challenge Hackathon",
    org: "N7 Challenge",
    date: "Apr 2024",
    description:
      "Secured 2nd place at HACKATHON-ENSET-2024 with N7-guard, an AI-powered real-time phishing detection system. Competed against 50+ teams.",
    image: "/competitions/N7 Challenge.jpg",
  },
  {
    title: "3rd Place — Orange Digital Center Champions",
    org: "Orange Digital Center",
    date: "Dec 2023",
    description:
      "Achieved 3rd place with team N7Gangs, demonstrating expertise in problem-solving, algorithm design, and competitive coding.",
    image: "/competitions/odc.jpg",
  },
  {
    title: "Top 10 — DevJam Hackathon",
    org: "DevJam",
    date: "Feb 2024",
    description: "Ranked top 10 out of 50+ competing teams from diverse educational backgrounds.",
    image: "/competitions/devjam.jpeg",
  },
]

const certifications = [
  { title: "OCI Generative AI Professional", issuer: "Oracle" },
  { title: "Oracle Cloud Infrastructure Foundations", issuer: "Oracle" },
  { title: "Fundamentals of AI Concepts", issuer: "Microsoft" },
  { title: "Deep Learning with TensorFlow", issuer: "Cognitive Class" },
  { title: "Python for Data Science", issuer: "Cognitive Class" },
  { title: "Get Started with Data Analytics", issuer: "Microsoft" },
]

const activities = [
  {
    type: "speaking",
    title: "Speaker — Hack The Challenge",
    date: "Mar 2024",
    location: "ENSET Mohammedia",
    description:
      "Guided students on excelling in hackathons and competitive programming through effective problem-solving strategies.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-enset-ecole-normale-superieure-de-lenseignement-technique-de-mohammedia-mohammedia-morocco-presents-hack-the-challenge-your-guide-to-hackathons-and-competitive-programming/",
    image: "/activities/gdsc.png",
  },
  {
    type: "speaking",
    title: "Authentic Orientation for High School Students",
    date: "Apr 2024",
    location: "IAV Hassan II, Rabat",
    description: "Offered authentic guidance on engineering careers in Morocco, organized by DigiGirlz.",
    link: "https://www.linkedin.com/posts/nouhaylamouakkal_digigirlzmentorship-stemabrempowerment-climatechange-activity-7159230561142665216-vBTP",
    image: "/activities/orientation.png",
  },
  {
    type: "volunteering",
    title: "Mentor — DigiGirlz Morocco",
    date: "2023 — 2024",
    location: "Mohammedia",
    description:
      "Mentoring young women interested in STEM, providing guidance on educational pathways and skill development in data science and AI.",
    link: "https://www.linkedin.com/company/digigirlz-morocco/",
    image: "/activities/tot.png",
  },
  {
    type: "volunteering",
    title: "Winter School — Next Generation AI & Economic Applications",
    date: "Feb 2025",
    location: "EMINES-UM6P, Benguerir",
    description:
      "Participated in an intensive winter school focused on cutting-edge AI advancements and their real-world applications across economic sectors.",
    link: "https://next-genai-xemines.com/index.html",
    image: "/activities/winter-school.jpg",
  },
  {
    type: "volunteering",
    title: "Evaluator — LDX ENSET",
    date: "2023 — 2024",
    location: "ENSET Mohammedia",
    description:
      "Evaluating student projects and providing constructive feedback to help improve technical implementations and presentation skills.",
    image: "/activities/ldx.jpg",
  },
  {
    type: "organizing",
    title: "Team Leader — Social Media Management",
    date: "2022 — 2024",
    location: "N7 Geeks Aggregation",
    description:
      "Leading a team of content creators to promote tech events, share educational content, and build community engagement.",
    image: "/activities/smm.png",
  },
  {
    type: "volunteering",
    title: "Team Leader — Medical Caravan",
    date: "2023",
    location: "Bni Said, Tétouan",
    description:
      "Led a student project organizing a medical caravan providing primary healthcare to 600+ patients and enhancing community well-being.",
    link: "https://www.linkedin.com/posts/nouhaylamouakkal_pp-enset-caravanemaezdicale-activity-7074553599921397760-pfGM",
    image: "/activities/pp.jpeg",
  },
]

const philosophy = [
  {
    icon: Target,
    title: "Impact-Driven",
    description: "Every line of code should solve a real problem. I build products that create measurable value.",
  },
  {
    icon: Lightbulb,
    title: "First-Principles Thinking",
    description: "I decompose complex challenges into fundamental truths and rebuild from the ground up.",
  },
  {
    icon: Sparkles,
    title: "Craft Obsession",
    description: "The details matter. From model architecture to UI micro-interactions, I sweat the small stuff.",
  },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<TabValue>("experience")

  return (
    <div className="relative pt-24 pb-12">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/[0.02] blur-[120px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="label mb-4 block">About</span>
          <h1 className="heading-lg mb-6">
            The mind behind
            <br />
            <span className="text-gradient">the machine</span>
          </h1>
          <p className="body-lg max-w-2xl">
            I'm Nouhayla Mouakkal, AI Engineer & Consultant at Nia-Gen by ITSS and Big Data & Cloud Computing alumna
            of ENSET Mohammedia. I blend AI with software to build systems that think, learn, and deliver impact.
          </p>
        </AnimatedSection>

        {/* Profile + Philosophy */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.1}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.08]">
                <Image src="/aboutme.png" alt="Nouhayla Mouakkal" fill className="object-cover" />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="/CV_Nouhayla_MOUAKKAL.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full text-sm font-medium text-foreground hover:bg-white/[0.06] transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-3 space-y-10">
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                <h2 className="heading-sm">My Story</h2>
                <p className="body-md">
                  My journey into AI wasn't accidental — it was inevitable. Growing up with a fascination for
                  patterns and problem-solving, I found my calling in the space where mathematics meets creativity:
                  machine learning.
                </p>
                <p className="body-md">
                  Today, as an AI Engineer & Consultant at Nia-Gen by ITSS and a Big Data & Cloud Computing alumna of
                  ENSET Mohammedia, I've had the privilege of building AI systems across education, finance, and
                  cybersecurity. From architecting multimodal LMS platforms to designing RAG-powered executive
                  chatbots, each project has sharpened my ability to think in systems, not just models.
                </p>
                <p className="body-md">
                  What drives me isn't just the technology — it's the impact. I believe the best AI products
                  are those that fade into the background, making people's lives demonstrably better without them
                  noticing the complexity underneath. Fueled by code, a RedBull habit, and the chase for the next big
                  tech thrill.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-3 gap-4" staggerDelay={0.1}>
              {philosophy.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="p-5 rounded-xl glass h-full">
                    <item.icon className="w-5 h-5 text-primary mb-3" />
                    <h3 className="font-display font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Tabs Section */}
        <AnimatedSection className="mb-8">
          <span className="label mb-4 block">Career & Beyond</span>
          <h2 className="heading-sm mb-6">
            My journey <span className="text-gradient">at a glance</span>
          </h2>
        </AnimatedSection>

        {/* Tab Navigation */}
        <AnimatedSection delay={0.1} className="mb-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === "experience" && (
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {experiences.map((exp) => (
                <StaggerItem key={exp.role}>
                  <div className="group p-6 md:p-8 rounded-2xl glass card-hover">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5 bg-white/[0.04] px-3 py-1 rounded-full">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/10"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {activeTab === "education" && (
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {education.map((edu) => (
                <StaggerItem key={edu.degree}>
                  <div className="p-6 rounded-2xl glass card-hover">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.school}</p>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-white/[0.04] px-3 py-1 rounded-full self-start">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.detail}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {activeTab === "awards" && (
            <StaggerContainer className="grid md:grid-cols-3 gap-4" staggerDelay={0.1}>
              {awards.map((award) => (
                <StaggerItem key={award.title}>
                  <div className="group relative rounded-2xl overflow-hidden glass card-hover">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={award.image}
                        alt={award.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-muted-foreground">{award.date}</span>
                      </div>
                      <h3 className="font-display font-semibold text-foreground text-sm mb-1">{award.title}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{award.org}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {activeTab === "certifications" && (
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3" staggerDelay={0.06}>
              {certifications.map((cert) => (
                <StaggerItem key={cert.title}>
                  <div className="flex items-start gap-3 p-4 rounded-xl glass card-hover">
                    <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-sm font-medium text-foreground">{cert.title}</h3>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {activeTab === "activities" && (
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {activities.map((act) => (
                <StaggerItem key={act.title}>
                  <div className="group flex flex-col md:flex-row gap-5 p-5 rounded-2xl glass card-hover">
                    <div className="relative w-full md:w-48 h-32 md:h-auto rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={act.image}
                        alt={act.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        {act.type === "speaking" && <Mic className="w-4 h-4 text-primary" />}
                        {act.type === "organizing" && <Users className="w-4 h-4 text-primary" />}
                        {act.type === "volunteering" && <Globe className="w-4 h-4 text-primary" />}
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {act.type}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-1">{act.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {act.date} &middot; {act.location}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{act.description}</p>
                      {act.link && (
                        <a
                          href={act.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:gap-2 transition-all"
                        >
                          Learn more
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </div>
    </div>
  )
}
