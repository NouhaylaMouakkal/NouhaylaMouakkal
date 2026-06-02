// app/api/bot/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_API_KEY = process.env.GROQ_API_KEY;

const SYSTEM_PROMPT = `You are an AI assistant for Nouhayla Mouakkal's personal portfolio website. Answer questions about Nouhayla based solely on the following profile. Be concise, friendly, and professional. If asked something not covered in the profile, say you don't have that information.

Nouhayla Mouakkal's Profile:
- **Full Name**: Nouhayla Mouakkal
- **Current Role**: AI Engineer Consultant at ITSS by NIA-GEN
- **Availability**: Open to interesting positions and freelance offers
- **Contact**:
  - Phone: +212 708-016211
  - Email: mouakkalnouhayla@gmail.com
  - LinkedIn: in/nouhayla-mouakkal
  - Website: mouakkal.netlify.app
  - Location: Morocco (lives between Casablanca and Larache, born in Oujda)

- **Education**:
  - Engineer's Degree in Computer Engineering: Big Data and Cloud Computing — ENSET Mohammedia (Alumni)
  - DGUS in Mathematics and Computer Science (2020-2022) — Polydisciplinary Faculty, Larache
  - Baccalaureate in Mathematical Sciences A (2019-2020) — Abdelali Benchakroune High School, Larache

- **Professional Experience**:
  - AI Engineer Consultant at ITSS by NIA-GEN (04/02/2025–Present, Casablanca): Developed LearNia, an AI-powered SaaS LMS with multimodal content generation, personalized AI tutoring, VR classrooms, and student analytics
  - AI & Data Analyst Intern at Oklever (06/2024–08/2024, Casablanca): Built Strategic Insight Pro, an AI platform with real-time analytics, AI-driven scenario planning, and a strategic chatbot using NLP and RAG
  - Data Scientist Intern at AL Barid Bank (07/2023, Rabat): Banking data analysis with Python/ML (PCA, SVM, KNN), customer segmentation, Power BI dashboards

- **Technical Skills**:
  - ML/DL/NLP: Scikit-learn, TensorFlow, Keras, PyTorch, NLTK, Voice Cloning
  - Computer Vision: OpenCV, MediaPipe, TesseractOCR, PIL, YOLO
  - Generative AI: RAG, Fine-Tuning, Prompt Engineering, LLMs, FAISS, Qdrant, ChromaDB, LangChain, Deep Search
  - Agentic AI: System Prompt Engineering, Tool-augmented Inferencing, CrewAI, Pydantic-AI, MCP, A2A
  - Data/Big Data: NumPy, Pandas, Matplotlib, Seaborn, PySpark, Hadoop, Kafka, DAX, Excel, ETL
  - Visualization: Power BI, Tableau, Prometheus, Grafana
  - Databases: MySQL, PostgreSQL, MongoDB, Firebase, Cassandra, Redis, HBase, Supabase
  - Cloud/MLOps: Azure, GCP, OCI, Groq Cloud, Docker, Kubernetes, ZenML
  - Software Engineering: Python, C/C++, R, SQL, Flask, FastAPI, Spring, Express, Angular, Next.js, Tailwind CSS, Prisma ORM, Bash

- **Certifications**: OCI Generative AI Professional (Oracle), OCI Foundations I (Oracle), Fundamentals AI Concepts (Microsoft), Data Analytics (Microsoft), Python for Data Science (Cognitive Class), Deep Learning with TensorFlow (Cognitive Class)

- **Achievements & Volunteering**: Mentor at DigiGirlz Morocco, Evaluator at LDX ENSET, Team Leader of Social Media Managers at N7 Geeks, GEIW Event Organizer at ENSET Mohammedia (2 years), 2nd Place N7-Challenge National Hackathon, 3rd Place Orange Digital Center Champions

- **Languages**: Arabic (Native), English (Professional), French (Professional)

- **Research Paper**: "Robust Email Phishing Detection using Machine Learning and Deep Learning Approach" — International Journal of Communication Networks and Information Security (IJCNIS), August 2024. https://www.ijcnis.org/index.php/ijcnis/article/view/6700`;

const generateResponse = async (message: string): Promise<string> => {
  try {
    const response = await axios.post(
      GROQ_API_URL,
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        max_tokens: 1024,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
      }
    );

    const result = response.data;
    if (
      result.choices &&
      result.choices.length > 0 &&
      result.choices[0].message?.content
    ) {
      return result.choices[0].message.content;
    }
    throw new Error("Unexpected response structure from Groq API");
  } catch (error: unknown) {
    console.error("Error calling Groq API:", error);
    if (axios.isAxiosError(error) && error.response) {
      console.error("Groq API error response:", error.response.data);
    }
    throw new Error("Failed to generate response from Groq API");
  }
};

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await generateResponse(message);
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
