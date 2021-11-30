import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../api/blogs";
import Axiosxustom from "../hooks/Axiosxustom";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { blogs, fails, loads } = Axiosxustom(
    "http://localhost:8000/blogs/" + id
  );

  const handleDelete = () => {
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
          <Link to={`/edit/${blogs.id}`}>
            <button className="edit">Edit</button>
          </Link>
          <button className="hapus" onClick={handleDelete}>
            Hapus
          </button>
        </div>
      )}
    </div>
  );
}
