import ParticleBackground from "@/components/particle-background"
import { Brain, BarChart, Database, Cloud, Code, Wrench, MessageSquare, ImageIcon, LineChart } from "lucide-react"

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />

      <section className="container py-16 md:py-24">
        <h1 className="section-heading mb-12">Professional Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Machine Learning & AI */}
          <div className="skill-card">
            <div className="flex items-center mb-6">
              <Brain className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Machine Learning & AI</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                TensorFlow
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Scikit-learn
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Keras
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                PyTorch
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                OpenCV
              </li>
            </ul>
          </div>

          {/* Data Analysis & Visualization */}
          <div className="skill-card">
            <div className="flex items-center mb-6">
              <BarChart className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Data Analysis & Visualization</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Jupyter Notebook
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Power BI
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Python
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Data Mining
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Statistical Analysis
              </li>
            </ul>
          </div>

          {/* Databases */}
          <div className="skill-card">
            <div className="flex items-center mb-6">
              <Database className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Databases</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                MySQL
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Firebase
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                MongoDB
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Apache Cassandra
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Redis
              </li>
            </ul>
          </div>

          {/* Cloud & Infrastructure */}
          <div className="skill-card">
            <div className="flex items-center mb-6">
              <Cloud className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Cloud & Infrastructure</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Microsoft Azure
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Oracle Cloud
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Apache Hadoop
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Docker
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Kubernetes
              </li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="skill-card">
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Web Development</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Angular
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                React
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Flask
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Node.js
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                REST APIs
              </li>
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div className="skill-card">
            <div className="flex items-center mb-6">
              <Wrench className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Tools & Technologies</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Git
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Jupyter
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                VS Code
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Google Colab
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Postman
              </li>
            </ul>
          </div>

          {/* Computer Vision */}
          <div className="skill-card">
            <div className="flex items-center mb-6">
              <ImageIcon className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Computer Vision</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                OpenCV
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                MediaPipe
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                TesseractOCR
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                PIL
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                YOLO
              </li>
            </ul>
          </div>

          {/* NLP & Generative AI */}
          <div className="skill-card">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold">NLP & Generative AI</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                NLTK
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Retrieval-Augmented Generation (RAG)
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                LLMs
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Langchain
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Prompt Engineering
              </li>
            </ul>
          </div>

          {/* Big Data */}
          <div className="skill-card">
            <div className="flex items-center mb-6">
              <LineChart className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Big Data</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                PySpark
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Hadoop
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Kafka
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                ETL Processes
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Data Warehousing
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8">Soft Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center">
            <h3 className="text-xl font-bold mb-2">Analytical Thinking</h3>
            <p className="text-muted-foreground">Problem-solving approach to complex challenges</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center">
            <h3 className="text-xl font-bold mb-2">Teamwork</h3>
            <p className="text-muted-foreground">Collaboration and effective communication</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center">
            <h3 className="text-xl font-bold mb-2">Time Management</h3>
            <p className="text-muted-foreground">Prioritization and efficient task completion</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center">
            <h3 className="text-xl font-bold mb-2">Agility & Adaptability</h3>
            <p className="text-muted-foreground">Flexibility in changing environments</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center">
            <h3 className="text-xl font-bold mb-2">Communication</h3>
            <p className="text-muted-foreground">Clear and effective information exchange</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center">
            <h3 className="text-xl font-bold mb-2">Stress Management</h3>
            <p className="text-muted-foreground">Maintaining performance under pressure</p>
          </div>
        </div>
      </section>
    </div>
  )
}
