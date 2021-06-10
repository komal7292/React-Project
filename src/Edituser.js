import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const Edituser = () => {
  let { id } = useParams();
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
    await axios.put(`http://localhost:3001/posts/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/posts/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="ui container segment" style={{ marginTop: "30px" }}>
      <form onSubmit={(e) => submitHandler(e)} className="ui container form">
        <div className="field">
          <label>Edit Name</label>
          <input
            type="text"
            placeholder="Name"
            name="username"
            value={username}
            onChange={(e) => inputChange(e)}
          />
        </div>
        <div className="field">
          <label>Edit Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => inputChange(e)}
          />
        </div>
        <div className="field">
          <label>Edit City</label>
          <input
            type="text"
            name="city"
            value={city}
            placeholder="City"
            onChange={(e) => inputChange(e)}
          />
        </div>
        <div className="field">
          <label>Edit Your Topic</label>
          <textarea
            rows="2"
            placeholder="Topic"
            name="topic"
            value={topic}
            onChange={(e) => inputChange(e)}
          ></textarea>
        </div>
        <div className="field">
          <label>Edit description</label>
          <textarea
            placeholder="Description"
            name="description"
            value={description}
            onChange={(e) => inputChange(e)}
          ></textarea>
        </div>
        <button type="submit" className="ui green button">
          Submit
        </button>
        <Link to="/" className="ui red button">
          Back
        </Link>
      </form>
    </div>
  );
};

export default Edituser;
