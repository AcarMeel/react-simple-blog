import React, { useState } from "react";
import { blogsList } from "../blogsSeed";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([...blogsList]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
  return (
    <div className="home">
      <h2>Home Page</h2>
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
