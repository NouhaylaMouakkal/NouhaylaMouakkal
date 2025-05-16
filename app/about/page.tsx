"use client"

import { useState, useEffect } from "react"
import ParticleBackground from "@/components/particle-background"
import LoadingScreen from "@/components/loading-screen"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Briefcase, GraduationCap, Trophy, Download, Mic, Users, Globe, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen finishLoading={() => setIsLoading(false)} />
  }

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />

      <section className="container py-16 md:py-24">
        <h1 className="section-heading mb-12">
          About <span className="text-primary">Me</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <img src="/MyPicture.png" alt="Nouhayla Mouakkal" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-2xl font-bold">Nouhayla Mouakkal</h2>
                <p className="text-muted-foreground text-center">AI Consultant & Big Data Engineering Student</p>
                <div className="mt-4 space-y-2 w-full">
                  <div className="flex justify-between">
                    <span className="font-medium">Location:</span>
                    <span>Morocco</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Email:</span>
                    <span className="text-sm">mouakkalnouhayla@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Phone:</span>
                    <span>+212 618-068186</span>
                  </div>
                </div>
                <Button asChild className="mt-6 w-full">
                  <Link href="/CV_Nouhayla_MOUAKKAL.pdf" target="_blank">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Who am I?</h2>
                <p className="mb-4">
                  Welcome to my Portfolio! I am Nouhayla Mouakkal, a third-year Big Data & Cloud Computing engineering
                  student. I am a dedicated and results-oriented Data Scientist with a profound passion for extracting
                  meaningful narratives from complex datasets.
                </p>
                <p className="mb-4">
                  My skills encompass{" "}
                  <span className="font-semibold">machine learning, statistical modeling, and data analysis</span>,
                  enabling me to transform intricate data into actionable insights that inform strategic
                  decision-making.
                </p>
                <p>Apart from coding, some other activities that I love to do:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Volleyball</li>
                  <li>Swimming</li>
                  <li>Driving & Travelling</li>
                </ul>
                <blockquote className="border-l-4 border-primary pl-4 italic mt-6">
                  "Crafting conversations in a digital world where every like is a stroke of success"
                  <footer className="text-right font-medium">— Nouhayla</footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" /> Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" /> Education
            </TabsTrigger>
            <TabsTrigger value="awards" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" /> Awards
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Award className="h-4 w-4" /> Certifications
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center gap-2">
              <Users className="h-4 w-4" /> Activities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">
              Professional <span className="text-primary">Experience</span>
            </h2>

            {experiences.map((exp, index) => (
              <Card key={index} className="experience-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{exp.date}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <p className="mb-4">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">
              Educational <span className="text-primary">Background</span>
            </h2>

            {education.map((edu, index) => (
              <Card key={index} className="experience-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{edu.date}</p>
                      <p>{edu.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="awards" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">
              Awards & <span className="text-primary">Achievements</span>
            </h2>

            {awards.map((award, index) => (
              <Card key={index} className="experience-card overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="md:col-span-1 h-full">
                    <div className="h-full w-full overflow-hidden">
                      <img
                        src={award.image || "/placeholder.svg?height=200&width=200&text=Award"}
                        alt={award.title}
                        className="h-full w-full object-cover md:h-full"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{award.title}</h3>
                          <p className="text-muted-foreground">{award.organization}</p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <p>{award.date}</p>
                        </div>
                      </div>
                      <p className="mb-4">{award.description}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">
              Professional <span className="text-primary">Certifications</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="experience-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activities" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">
              Extracurricular <span className="text-primary">Activities</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <Card key={index} className="experience-card overflow-hidden group">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-1 relative">
                      <div className="h-full w-full overflow-hidden">
                        <img
                          src={activity.image || "/placeholder.svg?height=200&width=200&text=Activity"}
                          alt={activity.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      {activity.link && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Link 
                            href={activity.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary transition-colors"
                          >
                            <ExternalLink className="h-8 w-8" />
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            {activity.type === "speaking" && <Mic className="h-6 w-6 text-primary" />}
                            {activity.type === "organizing" && <Users className="h-6 w-6 text-primary" />}
                            {activity.type === "volunteering" && <Globe className="h-6 w-6 text-primary" />}
                            {activity.type === "volenteering" && <Globe className="h-6 w-6 text-primary" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                              {activity.link && (
                                <Link 
                                  href={activity.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                </Link>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {activity.date} • {activity.location}
                            </p>
                            <p className="text-muted-foreground mb-4">{activity.description}</p>
                            
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-card p-3 rounded-md text-center border border-border hover:border-primary transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const experiences = [
  {
    title: "AI Consultant Intern",
    company: "ITSS",
    date: "04/02/2025 – Present",
    location: "Casablanca",
    description:
      "Developed LearNia, an AI-powered SaaS LMS featuring multimodal content generation, personalized AI tutoring, VR classrooms, and student analytics to enhance education and streamline administration.",
  },
  {
    title: "AI & Data Analyst Intern",
    company: "Oklever",
    date: "10/06/2024 – 10/08/2024",
    location: "Casablanca",
    description:
      "Built Strategic Insight Pro, an AI platform delivering real-time analytics, AI-driven scenario planning, and a strategic chatbot with NLP and Retrieval-Augmented Generation for enhanced CEO decision-making.",
  },
  {
    title: "GenAI Intern",
    company: "ProdigyInfo Tech",
    date: "01/07/2024 – 31/07/2024",
    location: "Mumbai",
    description:
      "Developed an AI-powered generative platform offering image style transfer, image-to-image translation, text generation, and text-to-image synthesis, with seamless cross-platform accessibility for an enhanced user experience.",
  },
  {
    title: "Data Scientist Intern",
    company: "AL Barid Bank",
    date: "03/07/2023 – 31/07/2023",
    location: "Rabat",
    description:
      "Conducted banking data analysis using Python and machine learning (PCA, SVM, KNN), developed customer segmentation models, built Power BI dashboards, and optimized model performance for actionable insights.",
  },
]

const education = [
  {
    degree: "Engineer's Degree in Computer Engineering: Big Data and Cloud Computing",
    institution: "National Higher School of Technical Education (ENSET)",
    date: "2022-2025",
    location: "Mohammedia",
  },
  {
    degree: "DGUS in Mathematics and Computer Science",
    institution: "Polydisciplinary Faculty",
    date: "2020-2022",
    location: "Larache",
  },
  {
    degree: "Baccalaureate in Mathematical Sciences A",
    institution: "Abdelali Benchakroune High School",
    date: "2019-2020",
    location: "Larache",
  },
]

const awards = [
  {
    title: "2nd Place - N7 Challenge Hackathon",
    organization: "N7 Challenge",
    date: "Apr 2024",
    description:
      "Secured 2nd place at HACKATHON-ENSET-2024 with our project, N7-guard. Competing against 50+ teams, we developed an AI-powered system for real-time phishing detection.",
    image: "/competitions/N7 Challenge.jpg",
  },
  {
    title: "3rd place - Orange Digital Center Champions",
    organization: "Orange Digital Center",
    date: "Dec 2023",
    description:
      "Achieved 3rd place with team N7Gangs in the Orange Digital Center Champions competition in Morocco. Showed expertise in problem-solving, understanding algorithms, and coding skills.",
    image: "/competitions/odc.jpg",
  },
  {
    title: "Top 10 in DevJam Hackathon",
    organization: "DevJam",
    date: "Feb 2024",
    description:
      "Ranked within the top 10 out of 50+ competing teams from various educational backgrounds, our journey was both challenging and enlightening.",
    image: "/competitions/devjam.jpeg",
  },
]

const certifications = [
  { title: "OCI Generative AI Professional", issuer: "Oracle" },
  { title: "Oracle Cloud Infrastructure Foundations I", issuer: "Oracle" },
  { title: "Fundamentals AI Concepts", issuer: "Microsoft" },
  { title: "Deep Learning with TensorFlow", issuer: "Cognitive Class" },
  { title: "Python for Data Science", issuer: "Cognitive Class" },
  { title: "Get Started with Data Analytics", issuer: "Microsoft" },
]

const activities = [
  {
    type: "volenteering",
    title: "Winter School : Next Generation AI and econimic Application",
    date: "Februaru 2025",
    location: "EMINES-UM6P Gengrir",
    description:
      "Participated in a winter school focused on the latest advancements in AI and its applications in various economic sectors, enhancing my understanding of AI's impact on the economy.",
    image: "/activities/winter-school.jpg",
    link: "https://next-genai-xemines.com/index.html",
  },
  {
    type: "speaking",
    title: "Speaker – Hack The Challenge: Your Guide to Hackathons and Competitive Programming",
    date: "March 2024",
    location: "ENSET Mohammedia, Morocco | Organized by GDG on Campus ENSET",
    description:
      "Spoke at *Hack The Challenge* by GDG ENSET Mohammedia, guiding students on excelling in hackathons and competitive programming through effective problem-solving and project-building strategies",
    image: "/activities/gdsc.png",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-enset-ecole-normale-superieure-de-lenseignement-technique-de-mohammedia-mohammedia-morocco-presents-hack-the-challenge-your-guide-to-hackathons-and-competitive-programming/",
  },
  {
    type: "speaking",
    title: "Authentic orientation for high school students",
    date: "April 2024",
    location: "IAV Hassan II , Rabat",
    description:
      " Event offers high school students authentic guidance on pursuing engineering careers in Morocco. Organized by DigiGirlz, it highlights the diverse paths and the value of adaptability in education and career planning within the engineering field.",
    image: "/activities/orientation.png",
    link: "https://www.linkedin.com/posts/nouhaylamouakkal_digigirlzmentorship-stemabrempowerment-climatechange-activity-7159230561142665216-vBTP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyKHgIBqnBIUgL-AevcI2c_3ChfsPKDgmM",
  },
  {
    type: "volunteering",
    title: "Mentor: DigiGirlz Morocco",
    date: "2023-2024",
    location: "Mohammedia",
    description:
      "Mentoring young mentees interested in STEM, providing guidance on educational pathways and skill development in data science and AI.",
    image: "/activities/tot.png",
    link: "https://www.linkedin.com/company/digigirlz-morocco/",
  },
  {
    type: "organizing",
    title: "Team Leader: Social Media Management",
    date: "2022-2024",
    location: "N7 Geeks Aggregation",
    description:
      "Leading a team of content creators and social media managers to promote tech events, share educational content, and build community engagement.",
    image: "/activities/smm.png",
    // link: "https://www.linkedin.com/company/n7-geeks/",
  },
  {
    type: "volunteering",
    title: "Evaluator: LDX ENSET",
    date: "2023-2024",
    location: "ENSET Mohammedia",
    description:
      "Evaluating student projects and providing constructive feedback to help improve technical implementations and presentation skills.",
    image: "/activities/ldx.jpg",
    // link: "https://www.linkedin.com/company/ldx-enset/",
  },
  {
    type: "volunteering",
    title: "Team Leader of Organization Committee : Medical Caravan",
    date: "2023",
    location: "Bni Said - Tétouan",
    description:
      "Successfully led a student project organizing a medical caravan in Bni-Said, Tétouan, providing primary healthcare to 600+ patients and enhancing community well-being.",
    image: "/activities/pp.jpeg",
    link: "https://www.linkedin.com/posts/nouhaylamouakkal_pp-enset-caravanemaezdicale-activity-7074553599921397760-pfGM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyKHgIBqnBIUgL-AevcI2c_3ChfsPKDgmM",
  },
]

const skills = [
  "TensorFlow",
  "Scikit-learn",
  "Keras",
  "PyTorch",
  "OpenCV",
  "Jupyter",
  "Power BI",
  "Python",
  "Angular",
  "Flask",
  "MySQL",
  "Firebase",
  "MongoDB",
  "Cassandra",
  "Redis",
  "OpenAI",
  "Azure",
  "Oracle",
  "Hadoop",
  "Docker",
  "RAG",
  "LLMs",
  "NLP",
  "ETL",
  "Kubernetes",
]

