import React from "react";
import { Card, Row } from "react-bootstrap";

export default function PostCommentArea() {
  return (
    <Card
      className="mb-2"
      style={{ width: "25rem", height: "15rem", overflowY: "scroll" }}
    >
      <Card.Header className="bg-dark-subtle fw-bold text-center"></Card.Header>
      <Card.Body className="d-flex justify-content-center">
        <Row>
          <Card.Text></Card.Text>
        </Row>
      </Card.Body>
    </Card>
  );
}
