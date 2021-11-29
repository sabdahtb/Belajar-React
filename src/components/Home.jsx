import React from "react";
import { Link } from "react-router-dom";

export const Home = ({ blogs, loads, fails }) => {
  return (
    <div className="components">
      <h2 className="judul">Kumpulan BLOG</h2>

      {loads && (
        <div className="card">
          <h2>Loading...</h2>
        </div>
      )}

      {fails && (
        <div className="card">
          <h1>Failed</h1>
          <h3>{fails}</h3>
        </div>
      )}

      {blogs &&
        blogs.map((blog) => (
          <div className="card" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.judul}</h2>
              <h5>klik untuk baca...</h5>
            </Link>
          </div>
        ))}
    </div>
  );
};
