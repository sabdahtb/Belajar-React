import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Add from "./components/Add";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Axiosxustom from "./hooks/Axiosxustom";

function App() {
  const { blogs, fails, loads } = Axiosxustom("http://localhost:8000/blogs");
  
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
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
