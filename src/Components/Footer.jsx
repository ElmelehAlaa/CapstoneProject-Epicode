import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <p>&copy; 2023 High Score Academy. Tutti i diritti riservati.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
