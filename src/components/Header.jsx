import React from "react";
import Navbar from "./Navbar";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h2>Ingresos / Egresos</h2>
      <Navbar />
    </header>
  );
};

export default Header;
