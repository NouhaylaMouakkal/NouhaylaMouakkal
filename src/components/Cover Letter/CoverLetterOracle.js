import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Nouhayla_Mouakkal_Research_Assistant_Cover_Letter.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FaExternalLinkAlt } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function CoverLotterOracle() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", margin : "1px"  }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginRight: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Cover Letter
          </Button>
          
          <Button
            variant="outline-primary"
            href={"https://careers.oracle.com/jobs/#en/sites/jobsearch/job/233522/?utm_medium=career+site&utm_source=job+alert"}
            target="_blank"
            style={{ maxWidth: "250px", borderColor: "#007bff" }} 
          >
            <FaExternalLinkAlt />
            &nbsp;See offer
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginRight: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Cover Letter
          </Button>
          
          <Button
            variant="outline-primary"
            href={"https://careers.oracle.com/jobs/#en/sites/jobsearch/job/233522/?utm_medium=career+site&utm_source=job+alert"}
            target="_blank"
            style={{ maxWidth: "250px", borderColor: "#007bff" }}
          >
            <FaExternalLinkAlt />
            &nbsp;See offer
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default CoverLotterOracle;
