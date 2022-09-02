import React from "react";
import AddInOut from "../components/AddInOut";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <section id="content">{children}</section>
      <AddInOut />
    </main>
  );
};

export default Layout;
