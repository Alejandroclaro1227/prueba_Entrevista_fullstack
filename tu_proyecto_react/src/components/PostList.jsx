import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style/PostList.css"

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("/api/posts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const handleDeletePost = async (postId) => {
    const token = localStorage.getItem("token");
    await axios.delete(`/api/posts/${postId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      <h1>Your Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button
              onClick={() => handleDeletePost(post.id)}
              className="bg-red-500 text-white p-2 ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
