import React from "react";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Layout from "./layout";
import './App.css';


function App() {
  return (
    <Router>
      {/* <Layout/> */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/home" element={<Homepage/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
    </Router>
  );
}
export default App;
