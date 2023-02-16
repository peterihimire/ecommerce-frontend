import React, { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import useDarkMode from "use-dark-mode";

import "./styles.scss";

const CartNav = ({ isOpen, clicked }) => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.split("/")[1]);
  const fullPath = location.pathname;
  let pathUrl = location.pathname.split("/")[1];

  const darkMode = useDarkMode(false);
  console.log(darkMode);
  const [openSlider, setOpenSlider] = useState(isOpen);
  console.log(openSlider);
  console.log(isOpen);
  const closeCartHandler = (isOpen) => {
    console.log("Clicked the x button", isOpen);
  };
  return (
    <nav className={`cartNav ${isOpen ? "show" : ""}`}>
      <button onClick={clicked}>X</button>
      <ul className="navLinks">
        <li>
          <NavLink to="/" activeclassname="active" exact="true">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/collections" activeclassname="active">
            Collections
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default CartNav;
