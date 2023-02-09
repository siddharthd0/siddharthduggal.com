import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");



  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/posts", { title, content })
      .then((res) => setPosts([...posts, res.data]))
      .catch((err) => console.error(err));
    setTitle("");
    setContent("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "") {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <input
          className="inputs"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
            />
            <button type="submit">Submit</button>
          </form>
          <ul>
            {Array.isArray(posts) &&
              posts
                .slice()
                .reverse()
                .map((post, index) => (
                  <li key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>{dayjs(post.createdAt).format("MMM D, YYYY")}</p>
                  </li>
                ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;
