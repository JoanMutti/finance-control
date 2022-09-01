import React, { useEffect, useState } from "react";
import NavItems from "./NavItems";
import { motion } from "framer-motion";
import "../styles/MobileNavbar.css";

const variants = {
  open: { opacity: 1, right: 0 },
  closed: { opacity: 0, x: "400px" },
};

const Path = (props) => <motion.path fill="transparent" cursor="pointer" strokeWidth="1.5" stroke="var(--green)" strokeLinecap="round" {...props} />;

const MobileNavbar = ({ navItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    menuOpen && document.body.classList.add("blur");
    return () => document.body.classList.remove("blur");
  }, [menuOpen]);

  return (
    <nav className="Header_nav">
      <motion.i onClick={toggleMenu} animate={menuOpen ? "open" : "closed"}>
        <svg width="30" height="25" viewBox="0 0 20 18">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          {/* <Path
            d="M 4 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          /> */}
          <Path
            variants={{
              closed: { d: "M 6 10.346 L 20 10.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </motion.i>
      <motion.ul animate={menuOpen ? "open" : "closed"} variants={variants} className="MobileNavbar_container">
        {navItems.map((item) => (
          <NavItems item={item} key={`Nav-${item.text}`} onClick={toggleMenu} liStyle="mobile_nav_item" />
        ))}
      </motion.ul>
    </nav>
  );
};

export default MobileNavbar;
