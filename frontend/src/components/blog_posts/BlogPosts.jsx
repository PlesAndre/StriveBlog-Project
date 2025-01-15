import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PostCard from "./PostCard";
import { Link, useParams } from "react-router-dom";

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [count, setPageCount] = useState(0);

  const { page } = useParams();

  const fetchBlogPosts = async () => {
    try {
      console.log(`Fetch dalla pagina ${page}`);
      const response = await fetch(
        `http://localhost:3001/api/blog_posts/page/${page}`
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPagesNumbers = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/blog_posts/count"
      );
      const data = await response.json();
      setPageCount(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
    fetchPagesNumbers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Container>
      <Row>
        {posts.map((post) => (
          <PostCard {...post} key={post._id} />
        ))}
      </Row>

      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          {Array.from({ length: count }).map((_, index) => {
            return (
              <Link
                key={index}
                className="m-3 text-decoration-none"
                to={`/page/${index + 1}`}
              >
                {index + 1}
              </Link>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
