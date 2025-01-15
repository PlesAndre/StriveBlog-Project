import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PostCard({
  _id,
  categoria,
  titolo,
  cover,
  autore,
  contenuto,
  readTime,
}) {
  return (
    <Col xs={3}>
      <Link to={`/blog/${_id}`} className="text-decoration-none">
        <Card style={{ width: "18rem", height: "500px" }} className="mt-5">
          <Card.Img
            variant="top"
            src={cover}
            style={{ height: "350px", objectFit: "cover" }}
          />
          <Card.Body style={{ overflowY: "scroll" }}>
            <Card.Title>{titolo}</Card.Title>
            <Card.Text>{contenuto}</Card.Text>
            <Card.Text>{autore}</Card.Text>
            <Card.Text>{categoria}</Card.Text>
            <Card.Text>
              Tempo di lettura: {readTime.value} {readTime.unit}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
