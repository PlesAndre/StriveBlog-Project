import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function AddComment() {
  return (
    <Col>
      <Row>
        <h2>Comment area</h2>
      </Row>
      <Form>
        <Form.Group className="mb-3" controlId="formComment">
          <Form.Label>Post your thoughts</Form.Label>
          <Form.Control type="text" placeholder="Comments" />
        </Form.Group>
        <Button variant="primary">Post it</Button>
      </Form>
    </Col>
  );
}
