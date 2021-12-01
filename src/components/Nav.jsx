import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="kanan">
          <h2>Blog React</h2>
        </div>
        <div className="kiri">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li> | </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
            <li> | </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
