import React from 'react';
import { NavLink } from "react-router-dom";

const Item = ({ item }) => {
  const {name, path} =item;
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
        to={path}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default Item;