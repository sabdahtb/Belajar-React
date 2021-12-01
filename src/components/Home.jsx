import React from "react";
import { Link } from "react-router-dom";

export default function Home({ blogs, fails, loads }) {
  return (
    <div className="components">
      <h2>React Blogs</h2>

      {loads && <h2>Loading...</h2>}

      {fails && <h2>{fails}</h2>}

      {blogs &&
        blogs.map((blog) => (
          <div className="card" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.judul}</h2>
              <h5>baca selengkapnya...</h5>
            </Link>
          </div>
        ))}
    </div>
  );
}
