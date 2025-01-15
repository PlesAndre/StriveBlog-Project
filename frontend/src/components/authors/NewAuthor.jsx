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
      const newAuthor = {
        nome: event.target.formName.value,
        cognome: event.target.formSurname.value,
        email: event.target.formEmail.value,
        data_di_nascita: "01-01-2001",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      };

      const response = await fetch("http://localhost:3001/api/authors/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAuthor),
      });
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
    navigate("/authors");
  };

  return (
    <Container className="container-sm mt-5">
      <Row>
        <h1 className="title-authors">Add author's data</h1>
      </Row>
      <Form onSubmit={handleSubmit}>
        {/* NOME */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter author name" />
        </Form.Group>

        {/* COGNOME */}
        <Form.Group className="mb-3" controlId="formSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Enter author surname" />
        </Form.Group>

        {/* EMAIL */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        {/* DATA DI NASCITA */}
        <Form.Group className="mb-3" controlId="formDateBirth">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control type="text" placeholder="Enter date of birth" />
        </Form.Group>

        {/* AVATAR */}
        <Form.Group className="mb-3" controlId="formAvatar">
          <Form.Label>Avatar</Form.Label>
          <Form.Control type="text" placeholder="Enter avatar's author" />
        </Form.Group>

        {/* PULSANTE INVIA DATI */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
