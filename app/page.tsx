"use client"

import { useState, useEffect } from "react"
import ParticleBackground from "@/components/particle-background"
import TypingEffect from "@/components/typing-effect"
import LoadingScreen from "@/components/loading-screen"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, ArrowRight } from "lucide-react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // You can add any initialization logic here
    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen">
          <ParticleBackground />

          <section className="container pt-20 pb-16 md:pt-32 md:pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Hi There! <span className="inline-block animate-bounce">👋</span>
                  <br />
                  I'm{" "}
                  <span className="text-primary">
                    Nouhayla
                    <br />
                    MOUAKKAL
                  </span>
                </h1>

                <div className="text-xl md:text-2xl font-medium">
                  <TypingEffect
                    texts={["Junior Data Scientist", "Data Analyst", "AI Consultant", "Big Data Engineer"]}
                  />
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg">
                    <Link href="https://github.com/NouhaylaMouakkal">
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/projects">
                      View My Work
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="hidden md:block">
                <img
                  src="myavatar.png"
                  alt="Nouhayla Mouakkal"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <Link href="#about" className="text-primary flex flex-col items-center">
                <span className="text-sm font-medium mb-2">Scroll Down</span>
                <ArrowRight className="h-5 w-5 transform rotate-90" />
              </Link>
            </div>
          </section>

          <section id="about" className="bg-card py-20">
            <div className="container">
              <h2 className="section-heading mb-12">About Me</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg mb-6">
                    Welcome to my Portfolio! I am Nouhayla Mouakkal, a third-year Big Data & Cloud Computing engineering
                    student. I am a dedicated and results-oriented Data Scientist with a profound passion for extracting
                    meaningful narratives from complex datasets.
                  </p>
                  <p className="text-lg mb-6">
                    My skills encompass{" "}
                    <span className="text-primary font-medium">
                      machine learning, statistical modeling, and data analysis
                    </span>
                    , enabling me to transform intricate data into actionable insights that inform strategic
                    decision-making.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Button asChild>
                      <Link href="/about">
                        Learn More About Me
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contact">Get In Touch</Link>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center">
                  <img
                    src="aboutme.png"
                    alt="About Nouhayla"
                    className="rounded-lg shadow-lg max-w-sm w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* <section className="py-20">
            <div className="container">
              <h2 className="section-heading mb-12">Featured Projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="project-card">
                  <div className="aspect-video bg-muted">
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="EchoSign Project"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">EchoSign</h3>
                    <p className="text-muted-foreground mb-4">
                      Moroccan Sign Language Translation App that transforms sign language into text and audio.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Machine Learning
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Computer Vision</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/projects">View Project</Link>
                    </Button>
                  </div>
                </div>

                <div className="project-card">
                  <div className="aspect-video bg-muted">
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="N7 Guard Project"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">N7 Guard</h3>
                    <p className="text-muted-foreground mb-4">
                      AI-powered phishing detection solution with browser extension and web dashboard.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">AI</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Cybersecurity</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">OCR</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/projects">View Project</Link>
                    </Button>
                  </div>
                </div>

                <div className="project-card">
                  <div className="aspect-video bg-muted">
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Brain Tumor Segmentation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Brain Tumor Segmentation</h3>
                    <p className="text-muted-foreground mb-4">
                      NaSNET architecture for brain tumor segmentation from MRI images.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">TensorFlow</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Keras</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Medical AI</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/projects">View Project</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <Button asChild>
                  <Link href="/projects">
                    View All Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section> */}


          <section className="py-20">
            <div className="container text-center">
              <h2 className="section-heading mb-8">Let's Work Together</h2>
              <p className="text-lg max-w-2xl mx-auto mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      )}
    </>
  )
}
