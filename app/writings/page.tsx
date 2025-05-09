import ParticleBackground from "@/components/particle-background"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function WritingsPage() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />

      <section className="container py-16 md:py-24">
        <h1 className="section-heading mb-12">
          My <span className="text-primary">Writings</span>
        </h1>
        <p className="text-center text-muted-foreground mb-8">Articles, blog posts, and research papers I've written</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {writings.map((writing, index) => (
            <Card key={index} className="project-card overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={writing.image || "/placeholder.svg?height=200&width=400&text=Article"}
                  alt={writing.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 flex-1">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{writing.type}</Badge>
                  <span className="text-sm text-muted-foreground">{writing.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{writing.title}</h3>
                <p className="text-muted-foreground">{writing.description}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild variant="default" className="w-full">
                  <Link href={writing.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Read Article
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
          <Card className="md:w-1/2 project-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">My Blog</h3>
              <p className="text-muted-foreground mb-6">
                Check out my blog where I write about AI, data science, and technology trends.
              </p>
              <Button asChild className="w-full">
                <Link href="https://nouhaylamouakkal.hashnode.dev/" target="_blank" rel="noopener noreferrer">
                  Visit My Blog
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="md:w-1/2 project-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Research Publications</h3>
              <p className="text-muted-foreground mb-6">
                View my research publications in academic journals and conferences.
              </p>
              <Button asChild className="w-full">
                <Link
                  href="https://www.ijcnis.org/index.php/ijcnis/article/view/6700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Publications
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

const writings = [
  {
    title: "Leveraging RAG for Enhanced AI Responses",
    description:
      "An exploration of how Retrieval-Augmented Generation can improve the accuracy and relevance of AI-generated content.",
    type: "Blog Post",
    date: "April 2024",
    url: "https://nouhaylamouakkal.hashnode.dev/",
    image: "/placeholder.svg?height=200&width=400&text=RAG",
  },
  {
    title: "Computer Vision Applications in Healthcare",
    description:
      "A deep dive into how computer vision technologies are transforming medical diagnostics and patient care.",
    type: "Research",
    date: "March 2024",
    url: "https://www.ijcnis.org/index.php/ijcnis/article/view/6700",
    image: "/placeholder.svg?height=200&width=400&text=CV+Healthcare",
  },
  {
    title: "The Future of MLOps in Enterprise AI",
    description:
      "Exploring best practices for implementing MLOps in large organizations to streamline AI development and deployment.",
    type: "Blog Post",
    date: "February 2024",
    url: "https://nouhaylamouakkal.hashnode.dev/",
    image: "/placeholder.svg?height=200&width=400&text=MLOps",
  },
  {
    title: "Optimizing Deep Learning Models for Edge Devices",
    description:
      "Techniques and strategies for deploying efficient deep learning models on resource-constrained edge devices.",
    type: "Tutorial",
    date: "January 2024",
    url: "https://nouhaylamouakkal.hashnode.dev/",
    image: "/placeholder.svg?height=200&width=400&text=Edge+AI",
  },
  {
    title: "Data Privacy Challenges in AI Systems",
    description:
      "An analysis of the privacy concerns and regulatory considerations when building AI systems that process personal data.",
    type: "Research",
    date: "December 2023",
    url: "https://www.ijcnis.org/index.php/ijcnis/article/view/6700",
    image: "/placeholder.svg?height=200&width=400&text=Data+Privacy",
  },
  {
    title: "Building Scalable Data Pipelines with Apache Kafka",
    description:
      "A practical guide to designing and implementing robust data pipelines using Apache Kafka for real-time analytics.",
    type: "Tutorial",
    date: "November 2023",
    url: "https://nouhaylamouakkal.hashnode.dev/",
    image: "/placeholder.svg?height=200&width=400&text=Kafka",
  },
]
