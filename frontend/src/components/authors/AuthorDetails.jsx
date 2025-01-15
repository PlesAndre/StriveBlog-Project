import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";
import "./style.css";

export default function AuthorDetails() {
  const { id } = useParams(); // Ottiene l'ID dalla URL

  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();

  const dataAuthor = {
    _id: id,
    nome,
    cognome,
    data_di_nascita: data,
    email,
    avatar,
  };

  // Funzione per ottenere i dettagli dell'autore
  const fetchDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/authors/${id}`);
      if (!response.ok) {
        navigate("/404");
        throw new Error(`${response.status}`);
      }
      const authorDetails = await response.json();
      setNome(authorDetails.nome);
      setCognome(authorDetails.cognome);
      setEmail(authorDetails.email);
      setData(authorDetails.data_di_nascita);
      setAvatar(authorDetails.avatar);
    } catch (error) {
      console.log(error);
    }
  };

  const editAuthor = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/authors/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataAuthor),
      });
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAuthor = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/authors/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      navigate("/authors");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Container className="container-sm">
        <Row>
          <Col>
            <h1 className="title-authors">Author Details</h1>
          </Col>
        </Row>
        <Row>
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>
                {dataAuthor.nome} {dataAuthor.cognome}
              </Card.Title>
              {dataAuthor.avatar && (
                <Card.Img
                  src={dataAuthor.avatar}
                  alt={`${dataAuthor.nome} ${dataAuthor.cognome}`}
                />
              )}

              <Card.Text>{dataAuthor.email}</Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Card.Text>
              <Card.Text>{dataAuthor.data_di_nascita}</Card.Text>
            </Card.Body>
          </Card>
          <Col className="ms-5">
            <Row>
              <h2>Edit data</h2>
            </Row>
            <Form>
              {/* NOME */}
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter author name"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Form.Group>

              {/* COGNOME */}
              <Form.Group className="mb-3" controlId="formSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter author surname"
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                />
              </Form.Group>

              {/* EMAIL */}
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              {/* DATA DI NASCITA */}
              <Form.Group className="mb-3" controlId="formDateBirth">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter date of birth"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
              </Form.Group>

              {/* AVATAR */}
              <Form.Group className="mb-3" controlId="formAvatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter avatar's author"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </Form.Group>

              {/* PULSANTE INVIA DATI */}
              <Button variant="primary" onClick={editAuthor}>
                Submit
              </Button>
            </Form>
            {/* PULSANTE CANCELLA DATI */}
            <Button variant="danger" className="mt-2" onClick={deleteAuthor}>
              Delete User
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
