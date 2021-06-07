import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import images from "./images.jpg";

const Screenpage = () => {
  const [posts, setPosts] = useState([]);

  const apiPost = () => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  };
  useEffect(() => {
    apiPost();
  }, []);
  return (
    <div>
      <div className="ui container segment">
        <h1 className="ui block header">Social media app</h1>
        <img src={images} alt="My Social Website" height="90px" width="200px" />
        <br />
        <Link to="/postupload" className="ui primary button">
          Upload your post
        </Link>
      </div>
      <div className="ui container list">
        {posts.map((data, index) => {
          return (
            <div key={index} className="item">
              <i className="map marker icon"></i>
              <div className="content">
                <p>{data.name}</p>
                <h5>{data.email}</h5>
                <h5>{data.city}</h5>
                <div>{data.content}</div>
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
