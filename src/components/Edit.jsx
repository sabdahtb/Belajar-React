import { useEffect, useState } from "react";
import api from "../api/blogs";
import { useParams } from "react-router";
import Swal from "sweetalert2";

export default function Edit() {
  const { id } = useParams();

  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/blogs/" + id);
        setJudul(response.data.judul);
        setIsi(response.data.isi);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleJudul = (e) => {
    setJudul(e.target.value);
  };

  const handleIsi = (e) => {
    setIsi(e.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const body = { judul: judul, isi: isi };
    try {
      api.put("/blogs/" + id, body);
      Swal.fire({
        icon: "success",
        title: "Berhasil mengedit data",
      });
      setTimeout(() => {
        window.location.reload(true);
      }, 1500);
    } catch (error) {
      Swal.fire(error.message);
    }
  };

  return (
    <div className="components">
      <h2 className="formTambah">Edit Blog</h2>

      <form className="formTambah" onSubmit={handleEdit}>
        <label>Judul</label>
        <input type="text" name="judul" value={judul} onChange={handleJudul} />
        <label>Isi</label>
        <textarea
          name="isi"
          cols="30"
          rows="10"
          value={isi}
          onChange={handleIsi}
        />
        <button>Edit</button>
      </form>
    </div>
  );
}
