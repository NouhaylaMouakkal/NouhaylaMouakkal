import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Writings() {
  return (
    <>
      <Container fluid className="writings-section d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center text-white">
              <h1 className="mb-4">
                Enjoy <span className="purple">Reading</span> My Writings
              </h1>
              <Row className="justify-content-center">
                <Col xs={12} sm={6} className="mb-3">
                  <Button
                    variant="primary"
                    href="https://nouhaylamouakkal.hashnode.dev/"
                    target="_blank"
                    className="w-100 custom-button"
                  >
                    Blogs
                  </Button>
                </Col>
                <Col xs={12} sm={6} className="mb-3">
                  <Button
                    variant="primary"
                    href="https://www.ijcnis.org/index.php/ijcnis/article/view/6700"
                    target="_blank"
                    className="w-100 custom-button"
                  >
                    IJCNIS
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>

      <style jsx>{`
        
      `}</style>
    </>
  );
}

export default Writings;
