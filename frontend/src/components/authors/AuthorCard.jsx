import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router";

export default function AuthorCard({
  _id,
  nome,
  cognome,
  data_di_nascita,
  email,
  avatar,
}) {
  return (
    <Col xs={3}>
      <Link to={`/authors/${_id}`} className="text-decoration-none">
        {/* CARD DEGLI AUTORI */}
        <Card style={{ width: "18rem", height: "470px" }} className="mt-5">
          <Card.Body>
            <Card.Title>
              {nome} {cognome}
            </Card.Title>
            <Card.Img src={avatar}></Card.Img>
            <Card.Text>{email}</Card.Text>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Text>
            <Card.Text>
              {new Date(data_di_nascita).toLocaleDateString()}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
