import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Students from "./components/student";
import CookieReader from "./components/CookieReader";
import IM from "./components/IM";
import UserData from "./UserData";

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
     <li>
            <Link to="/IM">IM Data</Link>
          </li>
    <li>
            <Link to="/UserData">UserData</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       <Route path="/student" element={<Students />} />
      <Route path="/IM" element={<IM />} />
  <Route path="/UserData" element={<UserData />} />
      </Routes>
    </Router>
  );
}

export default App;
