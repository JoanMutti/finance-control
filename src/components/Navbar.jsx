import React, { useState, useLayoutEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import NavItems from "./NavItems";

const navItems = [
  {
    text: "Sobre Mí",
    href: "#about",
  },
  {
    text: "Proyectos",
    href: "#projects",
  },
  {
    text: "Contacto",
    href: "#contact",
  },
  {
    text: "Curriculum",
    href: "https://google.com",
    props: {
      target: "_blank",
      rel: "noreferrer",
      className: "Header_toCv",
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
            <NavItems item={item} key={`Nav-${item.text}`} liStyle="nav_item" />
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
