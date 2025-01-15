import React, { useEffect, useState } from "react";

// Stili di react-bootstrap
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// react-router-dom
import { Link } from "react-router-dom";

import AuthorCard from "./AuthorCard";

// Stili CSS
import "./style.css";

export default function Authors() {
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/authors");
      const data = await response.json();
      setAuthors(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <Container className="container-sm">
      <Row>
        <Col>
          {/* TITOLO "AUTHORS" */}
          <h3 className="title-authors">Authors</h3>
        </Col>
      </Row>
      <Row> 
        <Col className="d-flex justify-content-between">
          {/* PULSANTE PER TORNARE AI BLOGS */}
          <Button variant="dark" type="button" className="mb-2">
            <Link to="/" className="link">
              BLOGS
            </Link>
          </Button>
          {/* PULSANTE AGGIUNGI AUTORE */}
          <Button variant="dark" type="button" className="mb-2">
            <Link to="/author/new" className="link">
              ADD AUTHOR
            </Link>
          </Button>
        </Col>
      </Row>

      <Row className="g-2">
        {authors.map((author) => (
          <AuthorCard {...author} key={author._id} />
        ))}
      </Row>
    </Container>
  );
}
