import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../api/blogs";

export default function Details() {
  const [blogs, setBlogs] = useState(null);
  const [loads, setLoads] = useState(true);
  const [fails, setFails] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("./blogs/" + id);
        setBlogs(response.data);
        setLoads(false);
        setFails(false);
      } catch (error) {
        setFails(error.message);
        setLoads(false);
        setBlogs(false);
      }
    };

    fetchBlogs();
  }, [id]);

  return (
    <div className="components">
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

      {blogs && (
        <div className="det">
          <h2> Judul : {blogs.judul}</h2>
          <br />
          <h2>Sinopsis</h2>
          <h5>{blogs.isi}</h5>
        </div>
      )}
    </div>
  );
}
