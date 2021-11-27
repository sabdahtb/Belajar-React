import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="Nav">
      <div className="kiri">
        <h2>Learn React </h2>
      </div>
      <div className="kanan">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
