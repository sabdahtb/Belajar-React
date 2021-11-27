import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Add } from "./components/Add";
import { About } from "./components/About";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [blogs, setBlogs] = useState(null);
  const [loads, setLoads] = useState(true);
  const [fails, setFails] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        setFails(err.message);
      })
      .then(() => {
        setLoads(false);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home blogs={blogs} fails={fails} loads={loads} />}
          />
          <Route path="/add" element={<Add />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
