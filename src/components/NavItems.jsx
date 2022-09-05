import React from "react";

const NavItems = ({ item, onClick, liStyle }) => {
  return (
    <li className={liStyle} onClick={onClick}>
      <p {...item?.props}>{item.text}</p>
    </li>
  );
};

export default NavItems;
