import React from "react";
import { Link } from "react-router-dom";

const Postupload = () => {
  return (
    <div>
      <form className="ui container form">
        <div className="field">
          <label for="name">Your Name</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>
        <div className="field">
          <label for="email">Your Email</label>
          <input type="text" id="email" placeholder="Your Email" />
        </div>
        <div className="field">
          <label for="city">City</label>
          <input type="text" id="city" placeholder="Your Name" />
        </div>
        <div className="field">
          <label for="topic">Topic</label>
          <textarea type="text" id="topic" rows="2"></textarea>
        </div>
        <div class="field">
          <label for="description">Descrition</label>
          <textarea type="text" id="description"></textarea>
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
