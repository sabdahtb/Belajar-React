import React from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Axioscustom from "../hooks/Axioscustom";
import api from "../api/blogs";
import Swal from "sweetalert2";

export default function Detail() {
  const { id } = useParams();
  const { blogs, fails, loads } = Axioscustom(
    "http://localhost:8000/blogs/" + id
  );
  const navigate = useNavigate();

  const handleHapus = (e) => {
    Swal.fire({
      title: "Yakin ?",
      text: "Data akan dihapus permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yakin dan Hapus",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          api.delete("/blogs/" + id);
        } catch (error) {
          Swal.fire(error.message);
        }
        Swal.fire("Selesai!", "Data telah terhapus.", "success");
        navigate("/");
        setTimeout(() => {
          window.location.reload(true);
        }, 1500);
      }
    });
  };

  return (
    <div className="components">
      {loads && <h2>Loading...</h2>}

      {fails && <h2>{fails}</h2>}

      {blogs && (
        <div className="det">
          <h2>{blogs.judul}</h2>
          <h5>{blogs.isi}</h5>
          <Link to={`/edit/${blogs.id}`}>
            <button className="edit">Edit</button>
          </Link>
          <button className="hapus" onClick={handleHapus}>
            Hapus
          </button>
        </div>
      )}
    </div>
  );
}
