import React from "react";
import { Link, Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import MyNavbar from "./layouts/MyNavbar";
import Users from "./pages/Users";
import User from "./pages/User";

function App1() {
  return (
    <div>
      <Routes>
        <Route element={<MyNavbar />}>
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/user">
            <Route path="/user/" element={<Home />} />
            <Route path="/user/about" element={<About />} />
            <Route path="/user/users" element={<Users />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/user/contact" element={<Contact />} />
            <Route path="/user/settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App1;
