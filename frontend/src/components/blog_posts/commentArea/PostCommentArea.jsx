/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function PostCommentArea() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchComments = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/comments");
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
    navigate(`/blog/${id}`);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Card
      className="mb-2"
      style={{ width: "25rem", height: "15rem", overflowY: "scroll" }}
    >
      <Card.Header className="bg-dark-subtle fw-bold text-center">
        Commenti
      </Card.Header>
      <Card.Body className="d-flex justify-content-center">
        <Row>
          {comments.map((comment, index) => (
            <div key={index}>
              <Card.Text>Autore: {comment.autore}</Card.Text>
              <Card.Text>Commento: {comment.commento}</Card.Text>
              <hr />
            </div>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}
