import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PostCard from "./PostCard";
import { Link, useParams } from "react-router-dom";

export default function BlogPosts({ searchPost }) {
  const [posts, setPosts] = useState([]);
  const [count, setPageCount] = useState(0);
  const [filteredPost, setFilteredPost] = useState([]);

  const { page } = useParams();

  const fetchBlogPosts = async () => {
    try {
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

  useEffect(() => {
    if (searchPost) {
      const lowerCaseTitle = searchPost.toLowerCase();
      const filtered = posts.filter((post) => post.titolo && post.titolo.toLowerCase().includes(lowerCaseTitle)
      );
      setFilteredPost(filtered);
    } else {
      // Se non c'è un termine di ricerca, mostra tutti i post
      setFilteredPost(posts);
    }
  }, [searchPost, posts]);

  return (
    <Container>
      <Row>
        {filteredPost.map((post) => (
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
