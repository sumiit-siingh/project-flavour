import React from "react";
import Navbar from "./components/navbar";
import {Outlet} from "react-router-dom";
import Homepage from "./pages/homepage";

export default function Layout() {
  return (
    <main>
      <Navbar/>
      <Outlet />
    </main>
  );
}
