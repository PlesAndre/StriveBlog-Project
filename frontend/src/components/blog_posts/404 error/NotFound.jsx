import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container className="d-flex vh-100">
      <Row className="m-auto text-center">
        <Col>
          <h1>404</h1>
          <p>Oops! La pagina che stai cercando non è stata trovata.</p>
        </Col>
      </Row>
    </Container>
  );
}
