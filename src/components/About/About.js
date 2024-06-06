import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/Me.png";


// Importez vos images de récompense ici
import award1Image from "../../Assets/competitions/devjam.jpeg";
import award2Image from "../../Assets/competitions/odc.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="purple">am I ?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        {/* Partie des récompenses */}
        <div style={{ marginTop: "50px" }}>
          <h1 className="project-heading">
            <strong className="purple">Awards</strong>
          </h1>
          <Row>
            {/* Première récompense */}
            <Col md={6}>
              <div className="award-card">
              <img src={award1Image} alt="Award 1" className="award-img" style={{height: "200px", width: "auto", objectFit: "cover"}} />
                <div className="award-details">
                  <h2>Top 10 in DevJam Hackathon<sub style={{fontSize:"14"}}><i>Feb 2024</i> </sub></h2>
                  <p>Ranked within the top 10 out of 50+ competing teams from various educational backgrounds, our journey was both challenging and enlightening. Although we didn't secure the first place, the experience proved transformative, providing us with invaluable insights and growth opportunities.</p>
                  <p>Tech Stack : Anglar , Firebase , GCP , TailwindCSS</p>
                </div>
              </div>
            </Col>
            {/* Deuxième récompense */}
            <Col md={6}>
              <div className="award-card">
              <img src={award2Image} alt="Award 2" className="award-img" style={{height: "200px", width: "auto", objectFit: "cover"}} />
                <div className="award-details">
                  <h2>3rd place - Orange Digital Center Champions, Morocco<sub style={{fontSize:"14"}}><i>Dec 2023</i> </sub></h2>
                  <p>Achieved 3rd place with team N7Gangs in the Orange Digital Center Champions competition in Morocco. Showed expertise in problem-solving, understanding algorithms, and coding skills through the CodingGame platform. This award recognizes our teamwork and technical strength in a national programming competition.</p>
                  <p>Tech Stack : python , javaScript</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default About;
