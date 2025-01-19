import React from "react";

// Stili di react-bootstrap
import { Container,Navbar } from "react-bootstrap";

// Importo il logo dalla folder assets
import logo from "../../assets/logo.png";

// Stili da CSS
import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand="lg" className="blog-navbar" fixed="top">
      <Container className="justify-content-between">
        {/* LOGO "STRIVE SCHOOL" */}
        <Link to="/">
          <Navbar.Brand>
            <img className="blog-navbar-brand p-2" alt="logo" src={logo} />
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}
