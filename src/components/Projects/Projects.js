import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ABB from "../../Assets/Projects/ABB.png";
import N7career from "../../Assets/Projects/RS N7 Career.png";
import detection from "../../Assets/Projects/Object Detection.png";
import safeguide from "../../Assets/Projects/safeguide.png";
import bts from "../../Assets/Projects/BrainTumorSegmentation.png";
import { de } from "date-fns/locale";
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
              imgPath={bts}
              isBlog={false}
              title="Brain Tumor Segmentation"
              description="Brain Tumor Segmentation using NaSNET architecture with Tensorflow and Keras. The model was trained on the BraTS dataset , was able to segment the tumor from the MRI images with an accuracy of 80% and aide in accurate diagnosis and treatment planning."
              ghLink="https://github.com/Brain-Tumor-Segmentation-ENSET"
              // demoLink=""
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
