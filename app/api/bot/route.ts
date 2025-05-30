// app/api/bot/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// Define the Gemini API endpoint for gemini-2.0-flash
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
// Retrieve the API key from environment variables
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Very specific context about Nouhayla Mouakkal for the AI model
const nouhaylaContext = `
  Nouhayla Mouakkal's Profile:
  - **Full Name**: Nouhayla Mouakkal [cite: 1]
  - **Current Role**: Big Data and Cloud Computing Engineering Student - AI Consultant Intern [cite: 1]
  - **Contact**:
    - Phone: +212 618-068186 [cite: 1]
    - Email: mouakkalnouhayla@gmail.com [cite: 1]
    - LinkedIn: in/nouhayla-mouakkal [cite: 1]
    - Website: mouakkal.netlify.app [cite: 1]
    - Location: Morocco [cite: 1]

  - **Education**:
    - Engineer's Degree in Computer Engineering: Big Data and Cloud Computing (2022-2025) at National Higher School of Technical Education (ENSET), Mohammedia [cite: 2]
    - DGUS in Mathematics and Computer Science (2020-2022) at Polydisciplinary Faculty, Larache [cite: 2]
    - Baccalaureate in Mathematical Sciences A (2019-2020) at Abdelali Benchakroune High School, Larache [cite: 2]

  - **Professional Experience**:
    - **AI Consultant Intern at ITSS** (04/02/2025-Present, Casablanca) [cite: 3]
      - Project: LearNia: Next-Generation AI-Powered Learning Management System Through Intelligent Automation [cite: 3]
      - Responsibilities: Developed LearNia, an AI-powered SaaS LMS with multimodal content generation, personalized AI tutoring, VR classrooms, and student analytics [cite: 3]
    - **AI & Data Analyst Intern at Oklever** (10/06/2024-10/08/2024, Casablanca) [cite: 4]
      - Project: Strategic Insight Pro-AI-Powered Decision-Making for CEOs [cite: 4]
      - Responsibilities: Built Strategic Insight Pro, an AI platform delivering real-time analytics, AI-driven scenario planning, and a strategic chatbot with NLP and Retrieval-Augmented Generation [cite: 5]
    - **Data Scientist Intern at AL Barid Bank** (03/07/2023-31/07/2023, Rabat) [cite: 6]
      - Responsibilities: Conducted banking data analysis using Python and machine learning (PCA, SVM, KNN), developed customer segmentation models, built Power BI dashboards, and optimized model performance [cite: 6]

  - **Technical Skills**:
    - Machine Learning / Deep Learning / NLP: Scikit-learn, TensorFlow, Keras, PyTorch, NLTK, Voice Cloning [cite: 7]
    - Computer Vision / Image Processing: OpenCV, MediaPipe, TesseractOCR, PIL, YOLO [cite: 7]
    - Generative AI: Retrieval-Augmented Generation (RAG), Fine-Tuning, Prompt Engineering, LLMs (Large Language Models), FAISS, Qdrant, ChromaDB, Langchain, Agentic AI, Deep Search [cite: 7]
    - Data Analytics / Big Data: NumPy, Pandas, Matplotlib, Seaborn, PySpark, Hadoop, Kafka, DAX, Excel, ETL Processes [cite: 7]
    - Data Visualization: Power BI, Tableau, Prometheus, Grafana [cite: 7]
    - Databases: MySQL, Postgresql, MongoDB, Firebase, Cassandra, Redis, HBase, Supabase [cite: 7]
    - Cloud Computing & MLOps: Azure, Google Cloud (GCP), Oracle Cloud Infrastructure (OCI), Groq Cloud, Docker, Kubernetes, ZenML [cite: 8]
    - Software Engineering: Python, C/C++, R, SQL, Flask, FastAPI, Spring, Express, Angular, Next.js, Tailwind CSS, Prisma ORM, Bash [cite: 8]

  - **Soft Skills**: Analytical thinking and problem-solving, Teamwork and collaboration, Time Management, Agility and Adaptability, Effective communication, Stress Management [cite: 8]

  - **Certifications**:
    - OCI Generative AI Professional (Oracle) [cite: 8]
    - Oracle Cloud Infrastructure Foundations I (Oracle) [cite: 8]
    - Fundamentals AI Concepts (Microsoft) [cite: 8]
    - Get Started with Data Analytics (Microsoft) [cite: 8]
    - Python for Data Science (Cognitive Class) [cite: 8]
    - Deep Learning with TensorFlow (Cognitive Class) [cite: 8]

  - **Achievements & Volunteering**:
    - Mentor: DigiGirlz Morocco [cite: 8]
    - Evaluator: LDX ENSET [cite: 8]
    - Team Leader of Social Media Managers: N7 Geeks [cite: 9]
    - 2nd Place in N7-Challenge National Hackathon [cite: 8]
    - 3rd Place in Orange Digital Center Champions [cite: 9]

  - **Languages**:
    - Arabic: Native [cite: 9]
    - English: Professional [cite: 9]
    - French: Professional [cite: 9]

  This AI assistant is designed to provide information about Nouhayla Mouakkal based solely on the provided context.
`;

/**
 * Generates a response from the Gemini API using the provided message and context.
 * @param message The user's message to send to the Gemini model.
 * @returns A promise that resolves to the generated text response.
 * @throws An error if the API call fails or the response structure is unexpected.
 */
const generateResponse = async (message: string): Promise<string> => {
  try {
    // Combine the context with the user's message to form the full prompt.
    // The Gemini API's generateContent method typically takes a single user turn
    // for simple text generation, so we embed the context directly.
    const prompt = `${nouhaylaContext}\n\nUser query: ${message}`;

    // Prepare the payload for the Gemini API.
    // The 'contents' array holds the conversation history, with each object
    // representing a turn and containing a 'role' and 'parts' array.
    const payload = {
      contents: [
        {
          role: "user", // The role of the sender (user or model)
          parts: [{ text: prompt }], // The content of the message
        },
      ],
    };

    // Construct the full API URL, including the API key as a query parameter.
    // This is the standard way to pass the API key for Gemini API calls.
    const apiUrlWithKey = `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`;

    // Make a POST request to the Gemini API using axios.
    const response = await axios.post(
      apiUrlWithKey, // The API endpoint with the key
      payload,       // The request body containing the prompt
      {
        headers: {
          "Content-Type": "application/json", // Specify content type as JSON
        },
      }
    );

    // Parse the response from the Gemini API.
    const result = response.data;

    // Check if the response contains valid candidates and content.
    if (
      result.candidates &&
      result.candidates.length > 0 &&
      result.candidates[0].content &&
      result.candidates[0].content.parts &&
      result.candidates[0].content.parts.length > 0
    ) {
      // Extract the generated text from the first candidate's first part.
      return result.candidates[0].content.parts[0].text;
    } else {
      // If the response structure is not as expected, throw an error.
      throw new Error("Unexpected response structure from Gemini API");
    }
  } catch (error: unknown) { // Use 'unknown' for better type safety
    console.error("Error calling Gemini API:", error);
    // If it's an Axios error, log the response data for more details.
    if (axios.isAxiosError(error) && error.response) {
      console.error("Gemini API error response data:", error.response.data);
    }
    // Re-throw a generic error message for the client.
    throw new Error("Failed to generate response from Gemini API");
  }
};

/**
 * Handles POST requests to this API route.
 * It expects a JSON body with a 'message' field.
 * @param req The NextRequest object containing the request details.
 * @returns A NextResponse object with the generated response or an error.
 */
export async function POST(req: NextRequest) {
  try {
    // Parse the request body to get the 'message'.
    const { message } = await req.json();

    // Ensure a message is provided.
    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Generate the response using the Gemini API.
    const response = await generateResponse(message);

    // Return the generated response with a 200 OK status.
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.error("Error in API route:", error);
    // Return an error response with a 500 Internal Server Error status.
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}