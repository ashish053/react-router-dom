import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home"
import User from "./Components/User"
import About from "./Components/About"

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
