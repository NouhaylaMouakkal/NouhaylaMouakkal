import React from "react";
import Card from "react-bootstrap/Card";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nouhayla Mouakkal </span>
            from <span className="purple"> Casablanca, Morocco.</span>
            <br />
            I'm Big Data & Cloud Computing Engineering Student at ENSET Mohammedia.
            <ul>
              <li className="about-activity">
              <VscDebugBreakpointLogUnverified />Mentor at Digigirlz Morocco.
              </li>
              <li className="about-activity">
              <VscDebugBreakpointLogUnverified />Evaluator at LDX ENSET.
              </li>
              <li className="about-activity">
              <VscDebugBreakpointLogUnverified />Team Leader of Social Media Managers & Content Creator at N7 Geeks Aggregation.
              </li>
              <li className="about-activity">
              <VscDebugBreakpointLogUnverified />Member of GDSC ENSET Mohammedia.
              </li>
            </ul>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <VscDebugBreakpointLogUnverified /> Volleyball
            </li>
            <li className="about-activity">
              <VscDebugBreakpointLogUnverified /> Swimmming
            </li>
            <li className="about-activity">
              <VscDebugBreakpointLogUnverified /> Driving & Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Crafting conversations in a digital world where every likr is a stocke of success"{" "}
          </p>
          <footer className="blockquote-footer">Nouhayla</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
