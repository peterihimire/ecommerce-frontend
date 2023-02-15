import React, { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import {
  ArrowDownward,
  DarkModeOutlined,
  Search,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { WbSunnyOutlined } from "@mui/icons-material";
import useDarkMode from "use-dark-mode";

import "./styles.scss";

const CartNav = ({ isOpen }) => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.split("/")[1]);
  const fullPath = location.pathname;
  let pathUrl = location.pathname.split("/")[1];

  const darkMode = useDarkMode(false);
  console.log(darkMode);

  const [about, openAbout] = useState(false);

  useEffect(() => {
    openAbout(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      openAbout(false);
    }
  }, [isOpen]);

  return (
    <nav className={`cartNav ${isOpen ? "show" : ""}`} >
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
