import React from "react";

// Stili di react-bootstrap
import { Button, Col, Container } from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";

// Stili di CSS
import "./style.css";
import BlogPosts from "../blog_posts/BlogPosts";

export default function Home() {
  return (
    <Container fluid="sm">
      {/* TITOLO DEL MAIN */}
      <h1 className="blog-main-title mb-3">Welcome to Strive Blog</h1>

      <Col className="d-flex justify-content-between">
        {/* PULSANTE PER GLI AUTORI */}
        <Button variant="dark" type="button">
          <Link to="/authors" className="link">
            AUTHORS
          </Link>
        </Button>
        {/* PULSANTE AGGIUNGI POST */}
        <Button variant="dark" type="button" className="mb-2">
          <Link to="/post/new" className="link">
            CREATE POST
          </Link>
        </Button>
      </Col>

      <Col>
        <BlogPosts />
      </Col>
    </Container>
  );
}
