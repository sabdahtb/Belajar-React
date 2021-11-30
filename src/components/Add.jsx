import React, { useState } from "react";
import { useNavigate } from "react-router";
import api from "../api/blogs";
import Swal from "sweetalert2";

export default function Add() {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const navigate = useNavigate();

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
      await api.post("/blogs", body);
      setJudul("");
      setIsi("");
      Swal.fire({
        icon: "success",
        title: "Berhasil menambahkan data!",
      });
      setTimeout(() => {
        navigate("/");
        window.location.reload(true);
      }, 1500);
    } catch (error) {
      Swal.fire(error.message);
    }
  };

  return (
    <div className="add">
      <h2 className="judul">Add a New Blogs</h2>
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
        <button>Tambah</button>
      </form>
    </div>
  );
}
