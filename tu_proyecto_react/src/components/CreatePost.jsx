import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style/CreatePost.css"

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post(
      "/api/posts",
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    navigate("/posts");
  };

  return (
    <div className="container mx-auto">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="p-2 border"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
