import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function NewAuthor() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newPost = {
        categoria: event.target.formCategory.value,
        titolo: event.target.formTitle.value,
        autore: event.target.formAuthor.value,
        contenuto: event.target.formContent.value,
        cover: "https://loremflickr.com/1195/913?lock=8001816975359004",
        readTime: {
          value: parseInt(event.target.formReadTimeValue.value, 10),
          unit: event.target.formReadTimeUnit.value,
        },
      };

      const response = await fetch("http://localhost:3001/api/blog_posts/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  return (
    <Container className="container-sm mt-5">
      <Row>
        <h1 className="title-authors">Add post data</h1>
      </Row>
      <Form onSubmit={handleSubmit}>
        {/* TITOLO */}
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Add a title" />
        </Form.Group>

        {/* CONTENUTO */}
        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>Content</Form.Label>
          <Form.Control type="text" placeholder="Add some content" />
        </Form.Group>

        {/* AUTORE */}
        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Add the author" />
        </Form.Group>

        {/* CATEGORIA */}
        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Which category" />
        </Form.Group>

        {/* COVER */}
        <Form.Group className="mb-3" controlId="formCover">
          <Form.Label>Cover</Form.Label>
          <Form.Control type="text" placeholder="Add some cover" />
        </Form.Group>

        {/* TEMPO DI LETTURA */}
        <Form.Group className="mb-3" controlId="formReadTimeValue">
          <Form.Label>Reading Time (Value)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Add reading time (e.g., 5)"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formReadTimeUnit">
          <Form.Label>Reading Time (Unit)</Form.Label>
          <Form.Control type="text" placeholder="Add unit (e.g., minutes)" />
        </Form.Group>

        {/* PULSANTE INVIA DATI */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
