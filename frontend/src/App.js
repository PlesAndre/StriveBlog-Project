// Componenti utilizzati
import React from "react";
import Header from "./components/header/Header";
import Home from "./components/main/Home";
import Authors from "./components/authors/Authors";
import Footer from "./components/footer/Footer";

// react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthorDetails from "./components/authors/AuthorDetails";
import NewAuthor from "./components/authors/NewAuthor";
import PostDetails from "./components/blog_posts/PostDetails";
import NewPost from "./components/blog_posts/NewPost";
import NotFound from "./components/blog_posts/404 error/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:page" element={<Home />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/:id" element={<AuthorDetails />} />
        <Route path="/author/new" element={<NewAuthor />} />
        <Route path="/blog/:id" element={<PostDetails />} />
        <Route path="/post/new" element={<NewPost />} />
        <Route path="*" element={<NotFound />} /> 
        <Route />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
