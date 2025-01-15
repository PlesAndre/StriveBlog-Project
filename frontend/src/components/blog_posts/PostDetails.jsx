import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import "./style.css";

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState("");
  const [titolo, setTitolo] = useState("");
  const [cover, setCover] = useState("");
  const [autore, setAutore] = useState("");
  const [contenuto, setContenuto] = useState("");

  const dataPost = {
    categoria,
    titolo,
    cover,
    autore,
    contenuto,
  };

  const fetchDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/blog_posts/post/${id}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}: ${response.statusText}`);
      }
      const postDetails = await response.json();
      setCategoria(postDetails.categoria);
      setTitolo(postDetails.titolo);
      setCover(postDetails.cover);
      setAutore(postDetails.autore);
      setContenuto(postDetails.contenuto);
    } catch (error) {
      console.log("Fetch fallito: " + error);
    }
  };

  const editPost = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/blog_posts/post/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataPost),
        }
      );
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/blog_posts/post/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="container-sm">
        <Row>
          <Col>
            <h1 className="title-authors">Post Details</h1>
          </Col>
        </Row>
        <Row>
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>{dataPost.titolo}</Card.Title>
              <Card.Img
                src={dataPost.cover}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Text>{dataPost.contenuto}</Card.Text>
              <Card.Text>{dataPost.categoria}</Card.Text>
            </Card.Body>
          </Card>
          <Col className="ms-5">
            <Row>
              <h2>Edit data</h2>
            </Row>
            <Form>
              {/* TITOLO */}
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title's post"
                  value={titolo}
                  onChange={(e) => setTitolo(e.target.value)}
                />
              </Form.Group>

              {/* CONTENUTO */}
              <Form.Group className="mb-3" controlId="formContent">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter some text"
                  value={contenuto}
                  onChange={(e) => setContenuto(e.target.value)}
                />
              </Form.Group>

              {/* CATEGORIA */}
              <Form.Group className="mb-3" controlId="formCategoria">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Which category"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                />
              </Form.Group>

              {/* COVER */}
              <Form.Group className="mb-3" controlId="formCover">
                <Form.Label>Cover</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add image"
                  value={cover}
                  onChange={(e) => setCover(e.target.value)}
                />
              </Form.Group>

              {/* PULSANTE INVIA DATI */}
              <Button variant="primary" onClick={editPost}>
                Submit
              </Button>
            </Form>
            {/* PULSANTE CANCELLA DATI */}
            <Button variant="danger" className="mt-2" onClick={deletePost}>
              Delete Post
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
