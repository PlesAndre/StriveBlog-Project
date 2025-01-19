import React, { useState } from "react";

// Stili di react-bootstrap
import { Button, Col, Container, Form } from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";

// Stili di CSS
import "./style.css";
import BlogPosts from "../blog_posts/BlogPosts";

export default function Home() {
  const [searchPost, setSearchPost] = useState("");

  const handleSearch = (event) => {
    setSearchPost(event.target.value);
  };

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

        <Form className="d-flex">
          <Form.Control
            type="search"
            className="border border-black"
            placeholder="Search post..."
            aria-label="Search"
            value={searchPost}
            onChange={handleSearch}
          />
        </Form>

        {/* PULSANTE AGGIUNGI POST */}
        <Button variant="dark" type="button" className="mb-2">
          <Link to="/post/new" className="link">
            CREATE POST
          </Link>
        </Button>
      </Col>

      <Col>
        <BlogPosts searchPost={searchPost} />
      </Col>
    </Container>
  );
}
