import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import api from "../api/blogs";

export default function Edit() {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("./blogs/" + id);
        setJudul(response.data.judul);
        setIsi(response.data.isi);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchBlogs();
  }, [id]);

  const handleJudul = (e) => {
    setJudul(e.target.value);
  };

  const handleIsi = (e) => {
    setIsi(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { judul: judul, isi: isi };
    try {
      await api.put("/blogs/" + id, body);
      setJudul("");
      setIsi("");
      navigate("/");
      Swal.fire({
        icon: "success",
        title: "Berhasil mengedit data!",
      });
      setTimeout(() => {
        window.location.reload(true);
      }, 1500);
    } catch (error) {
      Swal.fire(error.message);
    }
  };

  return (
    <div className="add">
      <h2 className="judul">Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Judul</label>
        <input type="text" name="judul" value={judul} onChange={handleJudul} />
        <label>Isi</label>
        <textarea
          name="isi"
          cols="30"
          rows="10"
          value={isi}
          onChange={handleIsi}
        ></textarea>
        <button>Edit</button>
      </form>
    </div>
  );
}
