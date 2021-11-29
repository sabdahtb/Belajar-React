import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Add from "./components/Add";
import Details from "./components/Details";
import api from "./api/blogs";

function App() {
  const [blogs, setBlogs] = useState(null);
  const [loads, setLoads] = useState(true);
  const [fails, setFails] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("./blogs");
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
          <Route path="/blogs/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
