import "./App.css";
import React from "react";
import { Header } from "./Components/Header";
import { F_Header } from "./Components/Faculty/F_Header";
import About from "./Components/About";
import NewFooter from "./Components/NewFooter";
import Admin_login from "./Components/Admin/Admin_login";
import Student_login from "./Components/Student/Student_login";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import Temp from "./Components/Temp";
import Home from "./Components/Home";
import LoginFormStudent from "./Components/Student/Student_login";
import Register from "./Components/Register";
import Card from "./Components/Student/Card";
import Uploader from "./Components/Faculty/Uploader";

function App() {
  return (
    <>
      <Router>
        <F_Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Admin_login" element={<Admin_login />} />
          <Route path="/Student_login" element={<Student_login />} />
          <Route path="/success" element={<success_message />} />
          <Route path="/contact" element={<Card />} />
          <Route path="/uploader" element={<Uploader />} />
        </Routes>
        <NewFooter />
      </Router>
    </>
  );
}

export default App;
