import React from "react";

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
          <h1>404</h1>
          <h3>Confusing to : {fails}</h3>
        </div>
      )}

      {blogs &&
        blogs.map((blog) => (
          <div className="card" key={blog.id}>
            <h2>{blog.judul}</h2>
            <h5>klik untuk baca...</h5>
          </div>
        ))}
    </div>
  );
};
