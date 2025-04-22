import React from "react";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Layout from "./layout";
import './App.css';
import Signup from "./pages/signup";
import Services from "./pages/services";
import Menu from "./pages/menu";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      {/* <Layout/> */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      
    </Router>
  );
}
export default App;
