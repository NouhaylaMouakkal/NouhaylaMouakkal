import ParticleBackground from "@/components/particle-background"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Briefcase, GraduationCap, Trophy, Download, Mic, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
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
                  <img
                    src="/MyPicture.png?height=200&width=200"
                    alt="Nouhayla Mouakkal"
                    className="w-full h-full object-cover"
                  />
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
              <Card key={index} className="experience-card">
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
                <Card key={index} className="experience-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        {activity.type === "speaking" && <Mic className="h-6 w-6 text-primary" />}
                        {activity.type === "organizing" && <Users className="h-6 w-6 text-primary" />}
                        {activity.type === "volunteering" && <Globe className="h-6 w-6 text-primary" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {activity.date} • {activity.location}
                        </p>
                        <p className="text-muted-foreground">{activity.description}</p>
                      </div>
                    </div>
                  </CardContent>
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
  },
  {
    title: "3rd place - Orange Digital Center Champions",
    organization: "Orange Digital Center",
    date: "Dec 2023",
    description:
      "Achieved 3rd place with team N7Gangs in the Orange Digital Center Champions competition in Morocco. Showed expertise in problem-solving, understanding algorithms, and coding skills.",
  },
  {
    title: "Top 10 in DevJam Hackathon",
    organization: "DevJam",
    date: "Feb 2024",
    description:
      "Ranked within the top 10 out of 50+ competing teams from various educational backgrounds, our journey was both challenging and enlightening.",
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
    type: "speaking",
    title: "Guest Speaker: AI Ethics in Education",
    date: "March 2024",
    location: "ENSET Mohammedia",
    description:
      "Delivered a talk on ethical considerations in implementing AI solutions in educational settings, focusing on privacy, bias, and accessibility.",
  },
  {
    type: "organizing",
    title: "Lead Organizer: Data Science Workshop Series",
    date: "January-February 2024",
    location: "N7 Geeks Aggregation",
    description:
      "Organized and led a series of workshops introducing students to data science fundamentals, Python programming, and basic machine learning concepts.",
  },
  {
    type: "volunteering",
    title: "Mentor: DigiGirlz Morocco",
    date: "2023-Present",
    location: "Casablanca",
    description:
      "Mentoring young women interested in technology careers, providing guidance on educational pathways and skill development in data science and AI.",
  },
  {
    type: "speaking",
    title: "Panelist: Women in Tech Conference",
    date: "November 2023",
    location: "Rabat",
    description:
      "Participated in a panel discussion about challenges and opportunities for women in data science and AI fields in Morocco.",
  },
  {
    type: "organizing",
    title: "Team Leader: Social Media Management",
    date: "2022-Present",
    location: "N7 Geeks Aggregation",
    description:
      "Leading a team of content creators and social media managers to promote tech events, share educational content, and build community engagement.",
  },
  {
    type: "volunteering",
    title: "Evaluator: LDX ENSET",
    date: "2023-Present",
    location: "ENSET Mohammedia",
    description:
      "Evaluating student projects and providing constructive feedback to help improve technical implementations and presentation skills.",
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
