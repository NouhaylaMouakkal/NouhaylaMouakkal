import ParticleBackground from "@/components/particle-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />

      <section className="container py-16 md:py-24">
        <h1 className="section-heading mb-12">
          My <span className="text-primary">Projects</span>
        </h1>
        <p className="text-center text-muted-foreground mb-8">Here are some of the projects I've worked on recently</p>

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="ai">AI & ML</TabsTrigger>
            <TabsTrigger value="data">Data Science</TabsTrigger>
            <TabsTrigger value="web">Web Development</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>

          <TabsContent value="ai" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.category === "ai")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </TabsContent>

          <TabsContent value="data" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.category === "data")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </TabsContent>

          <TabsContent value="web" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.category === "web")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <Card id={project.id} className="project-card overflow-hidden flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg?height=200&width=400"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 flex-1">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex gap-2">
        <Button asChild variant="default" className="flex-1">
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Link>
        </Button>
        {project.demo && (
          <Button asChild variant="outline" className="flex-1">
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

const projects = [
  {
    id: "echosign",
    title: "EchoSign: Moroccan Sign Language Translation App",
    description:
      "Transforming Moroccan Sign Language into text and audio for seamless communication with the deaf community.",
    technologies: ["Python", "Machine Learning", "Computer Vision", "TensorFlow"],
    github: "https://github.com/NouhaylaMouakkal/EchoSign.git",
    demo: "https://youtu.be/badtxnmgq_Y",
    image: "/Projects/EchoSign.png?height=200&width=400&text=EchoSign",
    category: "ai",
  },
  {
    id: "n7guard",
    title: "N7 Guard: AI Gatekeeper Against Phishing",
    description:
      "This project leverages artificial intelligence to develop a comprehensive phishing detection solution.",
    technologies: ["AI", "Cybersecurity", "OCR", "Browser Extension"],
    github: "https://github.com/N7-Challenge-GEIW2/Hackathon-Final.git",
    demo: "https://youtu.be/tu4fzEORwcE",
    image: "/Projects/N7Guard.png?height=200&width=400&text=N7Guard",
    category: "ai",
  },
  {
    id: "cryptmydata",
    title: "CryptMyData: Blockchain for Student Admissions",
    description: "A blockchain-based solution that streamlines student applications for higher education in Morocco.",
    technologies: ["Blockchain", "AI", "Cybersecurity", "Data Security"],
    github: "https://github.com/N7-Challenge-GEIW2/N7-Challenge-Project.git",
    demo: "https://youtu.be/qPxQh0-OdSo",
    image: "/Projects/cryptoscolar.jpg?height=200&width=400&text=CryptMyData",
    category: "web",
  },
  {
    id: "brain-tumor",
    title: "Brain Tumor Segmentation",
    description:
      "Brain Tumor Segmentation using NaSNET architecture with Tensorflow and Keras, trained on the BraTS dataset.",
    technologies: ["Deep Learning", "Medical Imaging", "TensorFlow", "Keras"],
    github: "https://github.com/Brain-Tumor-Segmentation-ENSET",
    demo: "https://braints-n7.netlify.app",
    image: "/Projects/BrainTumorSegmentation.png?height=200&width=400&text=BrainTS",
    category: "ai",
  },
  {
    id: "safeguide",
    title: "Safe Guide",
    description:
      "An innovative travel app provides real-time pricing information on Moroccan products, ensuring transparency and trust.",
    technologies: ["Geolocation", "Interactive Chat", "Web Development"],
    github: "https://github.com/AhmedHoussamBouzine/safeguide",
    demo: "https://safeguide.netlify.app/",
    image: "/Projects/safeguide.png?height=200&width=400&text=SafeGuide",
    category: "web",
  },
  {
    id: "banking-data",
    title: "Analyzing Banking Data",
    description:
      "Led a comprehensive Banking Data Analysis project leveraging Machine Learning models and Power BI to extract valuable insights.",
    technologies: ["Data Analysis", "Machine Learning", "Power BI"],
    github: "https://github.com/NouhaylaMouakkal/Analyzing-banking-data",
    image: "/Projects/ABB.png?height=200&width=400&text=BankingData",
    category: "data",
  },
  {
    id: "n7career",
    title: "N7 Career: Career Recommendation System",
    description:
      "Interactive platform using Java (JavaFX) to help users explore career opportunities based on their skills.",
    technologies: ["Java", "JavaFX", "Recommendation System"],
    github: "https://github.com/NouhaylaMouakkal/Career_Recommendation_System",
    image: "/Projects/RS N7 Career.png?height=200&width=400&text=N7Career",
    category: "data",
  },
  {
    id: "object-detection",
    title: "Real-time Object Detection",
    description:
      "Implemented real-time object detection using OpenCV and SSD MobileNet model for security and surveillance applications.",
    technologies: ["OpenCV", "SSD MobileNet", "Computer Vision"],
    github: "https://github.com/NouhaylaMouakkal/Real-time-Object-Detection",
    image: "/Projects/Object Detection.png?height=200&width=400&text=ObjectDetection",
    category: "ai",
  },
]
