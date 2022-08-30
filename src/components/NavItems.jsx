import React from "react";

const NavItems = ({ item, onClick, liStyle }) => {
  return (
    <li className={liStyle} onClick={onClick}>
      <a href={item.href} {...item?.props}>
        {item.text}
      </a>
    </li>
  );
};

export default NavItems;
