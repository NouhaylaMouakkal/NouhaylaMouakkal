import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ABB from "../../Assets/Projects/ABB.png";
import N7career from "../../Assets/Projects/RS N7 Career.png";
import detection from "../../Assets/Projects/Object Detection.png";
import safeguide from "../../Assets/Projects/safeguide.png";
import bts from "../../Assets/Projects/BrainTumorSegmentation.png";
import echosign from "../../Assets/Projects/Home.png";
import crypto from "../../Assets/Projects/cryptoscolar.jpg";
import n7guard from "../../Assets/Projects/N7Guard.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={echosign}
              isBlog={false} 
              title="EchoSign: Moroccan Sign Language Translation App "
              description="ETransforming Moroccan Sign Language into text and audio for seamless communication with the deaf community. Our Python-based app utilizes machine learning to analyze signs through an intuitive interface, fostering inclusivity and understanding. Transitioning text to audio enhances everyday interactions for deaf individuals in Morocco."
              ghLink="https://github.com/NouhaylaMouakkal/EchoSign.git"
              demoLink="https://youtu.be/badtxnmgq_Y"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={echosign}
              isBlog={false} 
              title="WellBot: The 3D Anatomy Explorer for Aspiring Medical Professionals"
              description="An immersive anatomy learning platform that combines 3D interactive models of the human body with layer-by-layer exploration, allowing students to peel back layers from skin to bones. It provides detailed descriptions of anatomical parts, interactive quizzes for knowledge assessment, and a medical chatbot assistant. The platform also includes a quiz mode tailored for medical students, complete with explanations, fostering a dynamic and comprehensive understanding of human anatomy."
              ghLink="https://github.com/ElhoubeBrahim/health-tech-hackathon.git"
              demoLink="https://youtu.be/8HAMyIxJGWI?si=bnGUi4pw4aH3tyEK"
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={n7guard}
              isBlog={false} 
              title="N7 Guard: The AI Gatekeeper Against Phishing Attacks"
              description="This project leverages artificial intelligence to develop a comprehensive phishing detection solution comprising a browser extension for real-time URL and email scanning, and intuitive web applications with detailed dashboards. By analyzing URLs, emails, images via OCR, and audio files, the system provides robust phishing protection across multiple formats, enhancing cybersecurity with user-friendly interfaces and detailed reporting."
              ghLink="https://github.com/N7-Challenge-GEIW2/Hackathon-Final.git"
              demoLink = "https://youtu.be/tu4fzEORwcE"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false} 
              title="CryptMyData: AI-Powered Blockchain Solution for Student Admissions"
              description="A blockchain-based solution that streamlines student applications for higher education in Morocco, featuring a secure system for recording student data on a blockchain with AI-assisted data extraction, and an entrance exam application system that verifies eligibility and facilitates the process. This project leverages blockchain, AI, and cybersecurity to enhance data security, transparency, efficiency, and integrity in managing student information and admissions."
              ghLink="https://github.com/N7-Challenge-GEIW2/N7-Challenge-Project.git"
              demoLink = "https://youtu.be/qPxQh0-OdSo"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bts}
              isBlog={false}
              title="Brain Tumor Segmentation"
              description="Brain Tumor Segmentation using NaSNET architecture with Tensorflow and Keras. The model was trained on the BraTS dataset , was able to segment the tumor from the MRI images with an accuracy of 80% and aide in accurate diagnosis and treatment planning."
              ghLink="https://github.com/Brain-Tumor-Segmentation-ENSET"
              demoLink="https://braints-n7.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={safeguide}
              isBlog={false}
              title="Safe Guide"
              description="An innovative travel app provides real-time pricing information on Moroccan products, ensuring transparency and trust, with features like geolocation integration and interactive chat, simplifying the shopping experience for users worldwide."
              ghLink="https://github.com/AhmedHoussamBouzine/safeguide"
              demoLink="https://safeguide.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ABB}
              isBlog={false}
              title="Analyzing banking data "
              description="Led a comprehensive Banking Data Analysis project leveraging Machine Learning (ML) models and Power BI to extract valuable insights critical for informed decision-making. The project followed a structured methodology, encompassing key stages from project definition to reporting."
              ghLink="https://github.com/NouhaylaMouakkal/Analyzing-banking-data"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={N7career}
              isBlog={false}
              title="Career Recommendation System : N7 Career"
              description="N7Career project aims to create an interactive platform using Java (JavaFX) to help users explore career opportunities based on their skills. Users can register, input technical and non-technical skills, and receive job recommendations tailored to their profiles."
              ghLink="https://github.com/NouhaylaMouakkal/Career_Recommendation_System"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={detection}
              isBlog={false}
              title="Real-time Object Detection with OpenCV and SSD MobileNet"
              description="Implemented real-time object detection using OpenCV and SSD MobileNet model. The project loads an image, detects objects, and displays bounding boxes with class labels and confidence scores. Practical for security and surveillance applications."
              ghLink="https://github.com/NouhaylaMouakkal/Real-time-Object-Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
