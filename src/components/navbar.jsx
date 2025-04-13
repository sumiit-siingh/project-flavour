import React from 'react';

function Navbar() {
  return (
    <div
      style={{
        height: "7rem",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        fontFamily: "Poppins",
        justifyContent: "space-between",
        zIndex: "1000",
        position: "fixed",
        top: "0",
        left: "0",
      }}
    >
      <div
        style={{
          fontWeight: "bolder",
          fontSize: "1.5rem",
          padding: "4rem",
        }}
      >
        <span>
          f<span style={{ color: "red" }}>o</span>c
          <span style={{ color: "red" }}>o</span>
        </span>
      </div>

      <div
        style={{
          display: "flex",
          gap: "4rem",
          fontSize: "15px",
          marginRight: "32rem",
        }}
      >
        <div style={{ cursor: "pointer" }}>Home</div>
        <div style={{ cursor: "pointer" }}>Menu</div>
        <div style={{ cursor: "pointer" }}>Services</div>
        <div style={{ cursor: "pointer" }}>Contact</div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button
          style={{
            color : "white",
            padding: "0.8rem 2rem",
            backgroundColor: "transparent",
            border: "1px solid white",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Sign in
        </button>
        <button
          style={{
            
            padding: "0.8rem 2rem",
            backgroundColor: "#ffcc70",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
export default Navbar;