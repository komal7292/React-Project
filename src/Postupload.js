import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Postupload = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    username: "",
    email: "",
    city: "",
    topic: "",
    description: "",
  });
  const { username, email, city, topic, description } = user;
  function inputChange(e) {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/posts", user);
    history.push("/");
  };

  return (
    <div className="ui container segment" style={{ marginTop: "50px" }}>
      <form onSubmit={(e) => submitHandler(e)} className="ui container form">
        <div className="field">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="username"
            value={username}
            placeholder="Your Name"
            onChange={(e) => inputChange(e)}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Your Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="Your Email"
            onChange={(e) => inputChange(e)}
          />
        </div>
        <div className="field">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            placeholder="Your Name"
            onChange={(e) => inputChange(e)}
          />
        </div>
        <div className="field">
          <label htmlFor="topic">Topic</label>
          <textarea
            name="topic"
            value={topic}
            type="text"
            id="topic"
            rows="2"
            onChange={(e) => inputChange(e)}
          ></textarea>
        </div>
        <div className="field">
          <label htmlFor="description">Descrition</label>
          <textarea
            name="description"
            value={description}
            type="text"
            id="description"
            onChange={(e) => inputChange(e)}
          ></textarea>
        </div>
        <button type="submit" className="ui blue button">
          Submit
        </button>
        <Link to="/" className="ui red button">
          Back
        </Link>
      </form>
    </div>
  );
};
export default Postupload;
