import React from "react";
import Header from "../components/Header";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <section>{children}</section>
      <button className="btn_add">+</button>
    </main>
  );
};

export default Layout;
