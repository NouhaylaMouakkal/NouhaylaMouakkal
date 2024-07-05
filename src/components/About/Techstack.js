import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiPython,
    DiMongodb,
    DiDocker,
    DiAngularSimple,
} from "react-icons/di";
import {
  SiRedis,
  SiMysql,
  SiTensorflow,
  SiScikitlearn,
  SiPowerbi, 
  SiOracle,
  SiFlask,
  SiApachehadoop,
  SiKeras,
  SiJupyter,
  SiMicrosoftazure,
  SiPytorch,
  SiOpencv,
  SiApachecassandra,
  SiOpenai
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiKeras />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiOpencv />
      </Col>
      {/*  */}
      <Col xs={4} md={2} className="tech-icons">
      <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col> 
      {/* DB */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <IoLogoFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachecassandra />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      {/*  */}
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachehadoop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
       
    </Row>
  );
}

export default Techstack;
