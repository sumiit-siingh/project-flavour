import React from "react";
import Navbar from "./components/navbar";
import {Outlet} from "react-router-dom";


export default function Layout() {
  return (
    <main>
      <Navbar/>
      <Outlet />
    </main>
  );
}
