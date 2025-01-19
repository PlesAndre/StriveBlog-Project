import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function AddComment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const postComment = async (event) => {
    event.preventDefault();
    try {
      console.log(id);
      const newComment = {
        autore: event.target.formAuthor.value,
        commento: event.target.formComment.value,
      };

      const response = await fetch(`http://localhost:3001/api/comments/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
    navigate(`/blog/${id}`);
  };

  return (
    <Col>
      <Row>
        <h2>Comment area</h2>
      </Row>
      <Form onSubmit={postComment}>
        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Author comment" />
        </Form.Group>
        <Form.Group controlId="formComment">
          <Form.Label>Content</Form.Label>
          <Form.Control type="text" placeholder="Your comment" />
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit">
          Post it
        </Button>
      </Form>
    </Col>
  );
}
