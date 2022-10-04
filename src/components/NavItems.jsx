import React from "react";
import { Link } from "react-router-dom";

const NavItems = ({ item, onClick, liStyle, type }) => {
  return (
    <li className={liStyle} onClick={onClick}>
      {item?.type === "navi" ? <Link to={item.to}>{item.text}</Link> : <p {...item?.props}>{item.text}</p>}
    </li>
  );
};

export default NavItems;
