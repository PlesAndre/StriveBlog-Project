import React from "react";
import PostCommentArea from "./PostCommentArea";
import AddComment from "./AddComment";
import { Col, Row } from "react-bootstrap";

export default function CommentArea() {
  return (
    <>
      <div>
        <Row>
          <Col xs={4}>
            <PostCommentArea />
          </Col>
          <Col>
            <AddComment />
          </Col>
        </Row>
      </div>
    </>
  );
}
