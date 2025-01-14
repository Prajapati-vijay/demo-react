import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Students from "./components/student";
import CookieReader from "./components/CookieReader";

function App() {
  return (
    <Router basename="/reactcookie">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
    <li>
            <Link to="/student">Student Data</Link>
          </li>
    <li>
            <Link to="/cookie">Cookie Data</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       <Route path="/student" element={<Students />} />
      <Route path="/cookie" element={<CookieReader />} />
      </Routes>
    </Router>
  );
}

export default App;
