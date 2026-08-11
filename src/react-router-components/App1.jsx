import React from "react";
import { Link, Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import MyNavbar from "./layouts/MyNavbar";

function App1() {
  return (
    <div>
      <Routes>
        <Route element={<MyNavbar />}>
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App1;
