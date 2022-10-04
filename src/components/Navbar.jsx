import React, { useState, useLayoutEffect } from "react";
import { auth } from "../utils/firebaseConfig";
import MobileNavbar from "./MobileNavbar";
import NavItems from "./NavItems";

const navItems = [
  {
    type: "navi",
    text: "Inicio",
    to: "/",
  },
  {
    type: "navi",
    text: "Ahorros",
    to: "/ahorros",
  },
  {
    type: "navi",
    text: "Inversiones",
    to: "/inversiones",
  },

  {
    type: "common",
    text: "Cerrar Sesión",
    onClick: () => {
      auth.signOut();
      window.location.reload();
    },
  },
];

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width >= 768) {
    return (
      <nav className="Header_nav">
        <ul className="Header_nav">
          {navItems.map((item) => (
            <NavItems item={item} onClick={item?.onClick} key={`Nav-${item.text}`} liStyle="nav_item" />
          ))}
        </ul>
      </nav>
    );
  }

  if (width < 768) {
    return <MobileNavbar navItems={navItems} />;
  }
};

export default Navbar;
