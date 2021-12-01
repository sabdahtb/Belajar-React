import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Add from "./components/Add";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Axioscustom from "./hooks/Axioscustom";
import api from "./api/blogs";
import { useState } from "react";
import Swal from "sweetalert2";
import Edit from "./components/Edit";

function App() {
  const { blogs, fails, loads } = Axioscustom("http://localhost:8000/blogs");

  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  const handleJudul = (e) => {
    setJudul(e.target.value);
  };

  const handleIsi = (e) => {
    setIsi(e.target.value);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const body = { judul, isi };
    try {
      await api.post("http://localhost:8000/blogs", body);
      setJudul("");
      setIsi("");
      Swal.fire({
        icon: "success",
        title: "Berhasil menambahkan Blogs",
      });
      setTimeout(() => {
        window.location.reload(true);
      }, 1500);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.message,
      });
    }
  };

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home blogs={blogs} fails={fails} loads={loads} />}
          />
          <Route
            path="/add"
            element={
              <Add
                judul={judul}
                isi={isi}
                handleJudul={handleJudul}
                handleIsi={handleIsi}
                handleAdd={handleAdd}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/blogs/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
