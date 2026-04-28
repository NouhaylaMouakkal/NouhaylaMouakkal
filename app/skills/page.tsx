"use client"

import { useState } from "react"
import {
  BarChart3,
  Bot,
  Brain,
  Cloud,
  Layout,
  Palette,
  Sparkles,
  Terminal,
  Wrench,
  ChevronRight,
} from "lucide-react"
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/animated-section"

interface SkillItem {
  name: string
  level: number
}

interface SkillCategory {
  icon: React.ElementType
  title: string
  description: string
  skills?: SkillItem[]
  groups?: { title: string; skills: SkillItem[] }[]
  color: string
}

const categories: SkillCategory[] = [
  {
    icon: Sparkles,
    title: "Generative AI & NLP",
    description: "Designing LLM systems with strong inference, retrieval, and tuning workflows.",
    color: "from-cyan-500/20 to-blue-500/20",
    skills: [
      { name: "Inference Systems", level: 5 },
      { name: "Tool-augmented Inferencing", level: 4 },
      { name: "LiteLLM", level: 4 },
      { name: "RAG", level: 5 },
      { name: "Fine-tuning", level: 4 },
      { name: "Prompt Engineering", level: 5 },
      { name: "System Prompt Engineering", level: 4 },
      { name: "Embeddings", level: 4 },
      { name: "LLM Evaluation", level: 4 },
      { name: "Tokenization", level: 3 },
    ],
  },
  {
    icon: Bot,
    title: "Agentic AI & Automation",
    description: "Building agent workflows, orchestration, and automated systems.",
    color: "from-indigo-500/20 to-sky-500/20",
    skills: [
      { name: "LangGraph", level: 4 },
      { name: "Deep Agent", level: 3 },
      { name: "MCP", level: 4 },
      { name: "OpenAI Agent Builder", level: 3 },
      { name: "n8n", level: 4 },
      { name: "Zapier", level: 4 },
      { name: "Vibe Coding", level: 4 },
    ],
  },
  {
    icon: Layout,
    title: "Full-Stack Development",
    description: "Frontend and backend engineering for modern web apps.",
    color: "from-rose-500/20 to-pink-500/20",
    groups: [
      {
        title: "Frontend",
        skills: [
          { name: "Next.js", level: 5 },
          { name: "Angular", level: 5 },
          { name: "React.js", level: 4 },
          { name: "Vite.js", level: 4 },
          { name: "Tailwind CSS", level: 5 },
        ],
      },
      {
        title: "Backend",
        skills: [
          { name: "Spring Boot", level: 4 },
          { name: "REST APIs", level: 5 },
          { name: "FastAPI", level: 4 },
          { name: "Flask", level: 4 },
          { name: "Node.js", level: 4 },
        ],
      },
    ],
  },
  {
    icon: Palette,
    title: "UX/UI",
    description: "Design systems and UX frameworks for consistent product experiences.",
    color: "from-fuchsia-500/20 to-purple-500/20",
    skills: [
      { name: "Odoo Archetype", level: 3 },
      { name: "Shopify Polaris", level: 4 },
      { name: "UX Magic Concepts", level: 3 },
      { name: "shadcn/ui", level: 4 },
      { name: "Flowbite", level: 4 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deploying, scaling, and monitoring systems on major cloud platforms.",
    color: "from-sky-500/20 to-indigo-500/20",
    skills: [
      { name: "Microsoft Azure", level: 4 },
      { name: "GCP", level: 4 },
      { name: "Oracle Cloud", level: 3 },
      { name: "Docker", level: 5 },
      { name: "Kubernetes", level: 4 },
      { name: "Traefik", level: 3 },
      { name: "Caddy", level: 3 },
      { name: "Spring Gateway", level: 3 },
      { name: "Keycloak", level: 3 },
      { name: "Clerk", level: 3 },
      { name: "Docker swarm", level: 3 },
      { name: "CI/CD", level: 4 },
      { name: "Github Actions", level: 4 },
    ],
  },
  {
    icon: Brain,
    title: "ML, Deep Learning & Computer Vision",
    description: "Training, deploying, and optimizing ML systems with strong CV tooling.",
    color: "from-violet-500/20 to-purple-500/20",
    skills: [
      { name: "PyTorch", level: 4 },
      { name: "TensorFlow", level: 4 },
      { name: "Scikit-learn", level: 5 },
      { name: "Keras", level: 4 },
      { name: "OpenCV", level: 5 },
      { name: "MediaPipe", level: 4 },
      { name: "TesseractOCR", level: 4 },
      { name: "PIL", level: 4 },
      { name: "YOLO", level: 4 },
      { name: "Voice Cloning", level: 3 },
      { name: "Model Optimization", level: 4 },
      { name: "MLOps", level: 3 },
      { name: "Medical Imaging", level: 3 },
      { name: "Image Augmentation", level: 4 },
    ],
  },
  {
    icon: BarChart3,
    title: "Data Engineering & Analytics",
    description: "Designing pipelines, warehouses, and visualization systems for massive datasets.",
    color: "from-amber-500/20 to-orange-500/20",
    skills: [
      { name: "PySpark", level: 4 },
      { name: "Apache Hadoop", level: 3 },
      { name: "Apache Kafka", level: 3 },
      { name: "ETL Pipelines", level: 4 },
      { name: "Power BI", level: 5 },
      { name: "Data Warehousing", level: 4 },
      { name: "Pandas / NumPy", level: 5 },
    ],
  },
  {
    icon: Terminal,
    title: "Languages",
    description: "Polyglot programmer with strong foundations in systems and data-oriented languages.",
    color: "from-lime-500/20 to-green-500/20",
    skills: [
      { name: "Python", level: 5 },
      { name: "TypeScript / JavaScript", level: 4 },
      { name: "Java", level: 4 },
      { name: "SQL", level: 5 },
      { name: "C++", level: 4 },
      { name: "Script Shell", level: 3 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    description: "The toolkit that powers my development workflow and collaboration.",
    color: "from-gray-500/20 to-slate-500/20",
    skills: [
      { name: "Git / GitHub", level: 5 },
      { name: "Jupyter / Colab", level: 5 },
      { name: "VS Code", level: 5 },
      { name: "Postman", level: 4 },
      { name: "Figma", level: 3 },
      { name: "Linux", level: 4 },
    ],
  },
]

const databases = ["MySQL", "PostgreSQL", "Firebase", "Redis", "MongoDB", "MinIO", "Supabase"]
const vectorDatabases = ["FAISS", "Qdrant", "ChromaDB"]
const softSkills = [
  { title: "Analytical Thinking", desc: "Decomposing complex problems into solvable components" },
  { title: "Product Sense", desc: "Bridging user needs with technical feasibility" },
  { title: "Communication", desc: "Translating technical concepts for any audience" },
  { title: "Leadership", desc: "Leading teams and mentoring junior developers" },
  { title: "Agility", desc: "Rapidly adapting to new technologies and constraints" },
  { title: "Attention to Detail", desc: "Obsessive about code quality and UX precision" },
]

function SkillBar({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`h-1.5 w-4 rounded-full transition-all duration-500 ${
            i <= level ? "bg-primary" : "bg-white/[0.06]"
          }`}
        />
      ))}
    </div>
  )
}

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].title)

  const activeCat = categories.find((c) => c.title === activeCategory) || categories[0]

  return (
    <div className="relative pt-24 pb-12">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-primary/[0.02] blur-[120px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="label mb-4 block">Expertise</span>
          <h1 className="heading-lg mb-6">
            Skills forged through
            <br />
            <span className="text-gradient">real-world shipping</span>
          </h1>
          <p className="body-lg max-w-2xl">
            I don't list technologies I've merely touched. These are tools I've used to build production
            systems, debug at 3 AM, and optimize under pressure.
          </p>
        </AnimatedSection>

        {/* Category Tabs (mobile) */}
        <div className="lg:hidden mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat.title
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar (desktop) */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-28 space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategory(cat.title)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                    activeCategory === cat.title
                      ? "bg-primary/10 text-foreground border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.03]"
                  }`}
                >
                  <cat.icon className={`w-4 h-4 ${activeCategory === cat.title ? "text-primary" : ""}`} />
                  <span className="text-sm font-medium">{cat.title}</span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 ml-auto transition-transform ${
                      activeCategory === cat.title ? "rotate-90 text-primary" : ""
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 xl:col-span-9">
            <AnimatedSection key={activeCat.title}>
              <div className="p-6 md:p-8 rounded-2xl glass">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${activeCat.color} border border-white/[0.06]`}>
                    <activeCat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground">{activeCat.title}</h2>
                    <p className="text-sm text-muted-foreground">{activeCat.description}</p>
                  </div>
                </div>

                {activeCat.groups ? (
                  <div className="space-y-8">
                    {activeCat.groups.map((group) => (
                      <div key={group.title}>
                        <h3 className="label mb-3 block">{group.title}</h3>
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                          {group.skills.map((skill) => (
                            <div key={skill.name} className="flex items-center justify-between gap-4">
                              <span className="text-sm text-foreground font-medium">{skill.name}</span>
                              <SkillBar level={skill.level} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                    {activeCat.skills?.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between gap-4">
                        <span className="text-sm text-foreground font-medium">{skill.name}</span>
                        <SkillBar level={skill.level} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Databases */}
            <AnimatedSection delay={0.2} className="mt-6">
              <div className="p-6 md:p-8 rounded-2xl glass">
                <h3 className="font-display font-semibold text-foreground mb-4">Databases & Storage</h3>
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {databases.map((db) => (
                      <span
                        key={db}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/[0.04] text-muted-foreground border border-white/[0.06] hover:border-primary/20 hover:text-foreground transition-colors"
                      >
                        {db}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Vector Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      {vectorDatabases.map((db) => (
                        <span
                          key={db}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/[0.04] text-muted-foreground border border-white/[0.06] hover:border-primary/20 hover:text-foreground transition-colors"
                        >
                          {db}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Soft Skills */}
        <section className="mt-16">
          <AnimatedSection className="mb-8">
            <span className="label mb-4 block">Beyond Code</span>
            <h2 className="heading-sm">
              Soft skills that <span className="text-gradient">multiply impact</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
            {softSkills.map((s) => (
              <StaggerItem key={s.title}>
                <div className="p-5 rounded-xl glass card-hover h-full">
                  <h3 className="font-display font-semibold text-foreground text-sm mb-2">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </div>
    </div>
  )
}
