import axios from "axios";
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
  // const deleteUser = async id => {
  //   await axios.delete(`http://localhost:3001/posts/${id}`)
  //   apiPost();
  // }
  return (
    <div>
      <div className="ui container segment" style={{ marginTop: "25px" }}>
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
              <div className="content">
                <h2 className="name">{data.username}</h2>
                <h5 className="email">Email: {data.email}</h5>
                <h5 className="city">City: {data.city}</h5>
                <div className="buttonStyle">
                  <Link to="/edituser" className="ui green button">Edit</Link>
                  <button className="ui red button">Delete</button>
                </div>
                <h5 className="topic">Topic: {data.topic}</h5>
                <h5 className="desc">Description: {data.description}</h5>
                <hr />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Screenpage;
