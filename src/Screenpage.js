import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import images from "./images.jpg";

const Screenpage = () => {
  const [posts, setPosts] = useState([]);

  const apiPost = () => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.reverse()));
  };
  useEffect(() => {
    apiPost();
  }, []);
  return (
    <div>
      <div className="ui container segment">
        <h1 className="ui block header">Social media app</h1>
        <img src={images} alt="My Social Website" height="90px" width="200px" />
        <Link
          to="/postupload"
          style={{ margin: "25px 10px 10px 10px" }}
          className="ui primary button style"
        >
          Upload your post
        </Link>
      </div>
      <div className="ui container list">
        {posts.map((data, index) => {
          return (
            <div key={index} className="item">
              <i className="map marker icon"></i>
              <div className="content">
                <p>{data.username}</p>
                <h5>{data.email}</h5>
                <h5>{data.city}</h5>
                <div>{data.topic}</div>
                <div>{data.description}</div>
                <button className="ui green button">Edit</button>
                <button className="ui red button">Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Screenpage;
