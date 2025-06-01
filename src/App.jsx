import React from "react";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/homepage";
import Layout from "./layout";
import './App.css';
import Signup from "./pages/signup";
import Services from "./pages/services";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/auth/Profile';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/home" element={<Homepage/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/menu" element={<Menu/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <div>Home Page (Protected)</div>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
export default App;
